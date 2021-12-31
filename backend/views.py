from flask import request
from flask import abort
from flask import Blueprint
from flask import session
from cal import genSeries
from models import Teacher, Student, commit, insert
from urllib import parse
import datetime
import hashlib
import ujson
import mmh3
import time
import traceback

view = Blueprint('view', __name__)
whitePages = ['/register', '/getTeacher', '/login', '/code2teacher']


def _getTimeSalt():
    return datetime.datetime.now().strftime("%Y-%m-%d")


def _getPasswd(passwd):
    print(passwd + _getTimeSalt())
    s = hashlib.sha256()
    s.update((passwd + _getTimeSalt()).encode("utf-8"))
    pwd = s.hexdigest()
    return str(pwd)


def _b62(n: int) -> str:
    table = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if n == 0:
        return "0"
    rrr = []
    while n > 0:
        rrr.append(table[n % 61])
        n //= 61
    return "".join(rrr[::-1])


def _getCode():
    tm = str(int(time.time() * 1000))
    tm = _b62(mmh3.hash128(parse.quote(tm, 'utf-8'), signed=False))
    return tm


@view.before_request
def before_request():
    if request.path not in whitePages:
        if session.get('username') is None:
            abort(401)
    return None


@view.route('/getShareLink')
def getShareLink():
    name = session.get('username')['name']
    teacher = Teacher.query.filter_by(name=name).first()
    if teacher is None:
        abort(400)
    return '/register?code=' + teacher.code


@view.route('/code2teacher')
def code2teacher():
    code = request.args.get('code')
    teacher = Teacher.query.filter_by(code=code).first()
    if teacher is None:
        abort(400)
    return {'name': teacher.name}


@view.route('/getStudentData')
def getStudentData():
    name = session.get('username')['name']
    teacher = Teacher.query.filter_by(name=name).first()
    if teacher is None:
        abort(400)
    students = teacher.students
    re = []
    for student in students:
        re.append({
            'name': student.name,
            'sid': student.sid,
            'result': (student.exp1Preview * 0.05 + student.exp2Preview * 0.05 +
                       student.exp3Preview * 0.05 + student.exp4Preview * 0.05 +
                       student.exp1Review * 0.2 + student.exp2Review * 0.2 +
                       student.exp3Review * 0.2 + student.exp4Review * 0.2),
            'exp1Preview': student.exp1Preview,
            'exp2Preview': student.exp2Preview,
            'exp3Preview': student.exp3Preview,
            'exp4Preview': student.exp4Preview,
            'exp1': student.exp1,
            'exp2': student.exp2,
            'exp3': student.exp3,
            'exp4': student.exp4,
            'exp1Review': student.exp1Review,
            'exp2Review': student.exp2Review,
            'exp3Review': student.exp3Review,
            'exp4Review': student.exp4Review,
        })
    return ujson.dumps(re)


@view.route('/login', methods=['POST'])
def login():
    req = ujson.loads(request.get_data())
    print(req)
    try:
        if req['m'] == 't':
            teacher = Teacher.query.filter_by(name=req['id']).first()
            if teacher is None:
                return ujson.dumps({'error': '用户名或密码错误'})
            pwd = _getPasswd(teacher.passwd)
            if pwd == req['passwd']:
                session['username'] = {'name': teacher.name, 'm': 't'}
                return ujson.dumps(teacher.getDict())
            else:
                return ujson.dumps({'error': '用户名或密码错误'})
        elif req['m'] == 's':
            student = Student.query.filter_by(sid=req['id']).first()
            if student is None:
                return ujson.dumps({'error': '用户名或密码错误'})
            pwd = _getPasswd(student.passwd)
            if pwd == req['passwd']:
                session['username'] = {'name': student.name, 'sid': student.sid, 'm': 's'}
                return ujson.dumps(student.getDict())
            else:
                return ujson.dumps({'error': '用户名或密码错误'})
        else:
            abort(400)
    except:
        traceback.print_exc()
        abort(400)


@view.route('/initUser')
def initUser():
    m = session.get('username')['m']
    if m == 't':
        name = session.get('username')['name']
        teacher = Teacher.query.filter_by(name=name).first()
        if teacher is None:
            return ujson.dumps({'error': '自动登录失败，请重新登录'})
        return ujson.dumps(teacher.getDict())
    elif m == 's':
        sid = session.get('username')['sid']
        student = Student.query.filter_by(sid=sid).first()
        if student is None:
            return ujson.dumps({'error': '自动登录失败，请重新登录'})
        return ujson.dumps(student.getDict())
    else:
        return ujson.dumps({'error': '自动登录失败，请重新登录'}), 400


@view.route('/register', methods=['POST'])
def register():
    req = ujson.loads(request.get_data())
    try:
        if req['m'] == 't':
            teacher = Teacher.query.filter_by(name=req['name']).first()
            if teacher is not None:
                return ujson.dumps({'error': '该用户已存在'})
            teacher = Teacher(name=req['name'], passwd=req['passwd'], email=req['email'],
                              phone=req['phone'], code=_getCode())
            insert(teacher)
            commit()
            return ujson.dumps({'status': 'ok'})
        elif req['m'] == 's':
            student = Student.query.filter_by(sid=req['sid']).first()
            if student is not None:
                return ujson.dumps({'error': '该用户已存在'})
            if 'code' in req.keys() and req['code'] != '':
                teacher = Teacher.query.filter_by(code=req['code']).first()
                if teacher is None:
                    return ujson.dumps({'error': '教师邀请码不存在'})
                student = Student(sid=req['sid'], passwd=req['passwd'], name=req['name'], teacher=teacher.name)
            else:
                student = Student(sid=req['sid'], passwd=req['passwd'], name=req['name'])
            insert(student)
            commit()
            return ujson.dumps({'status': 'ok'})
        else:
            abort(400)
    except:
        traceback.print_exc()
        abort(400)


@view.route('/log')
def log():
    if session['username']['m'] != 's':
        abort(400)
    student = Student.query.filter_by(sid=session['username']['sid']).first()
    if student is None:
        abort(400)
    exp = request.args.get('exp')
    if exp == '0':
        preview = request.args.get('preview')
        review = request.args.get('review')
        if request.args.get('count') is not None:
            student.exp1 += 1
        elif preview is not None:
            student.exp1Preview = preview
        elif review is not None:
            student.exp1Review = review
        commit()
        return ujson.dumps({'status': 'ok'})
    elif exp == '1':
        preview = request.args.get('preview')
        review = request.args.get('review')
        if request.args.get('count') is not None:
            student.exp2 += 1
        elif preview is not None:
            student.exp2Preview = preview
        elif review is not None:
            student.exp2Review = review
        commit()
        return ujson.dumps({'status': 'ok'})
    elif exp == '2':
        preview = request.args.get('preview')
        review = request.args.get('review')
        if request.args.get('count') is not None:
            student.exp3 += 1
        elif preview is not None:
            student.exp3Preview = preview
        elif review is not None:
            student.exp3Review = review
        commit()
        return ujson.dumps({'status': 'ok'})
    elif exp == '3':
        preview = request.args.get('preview')
        review = request.args.get('review')
        if request.args.get('count') is not None:
            student.exp4 += 1
        elif preview is not None:
            student.exp4Preview = preview
        elif review is not None:
            student.exp4Review = review
        commit()
        return ujson.dumps({'status': 'ok'})
    else:
        abort(400)


@view.route('/getSeries')
def getS():
    print(request.args)
    try:
        m = float(request.args['m'])
        i = float(request.args['i'])
        k = float(request.args['k'])
        kp = float(request.args['kp'])
        rho = float(request.args['rho'])
        theta0 = float(request.args['theta0'])
        z0 = float(request.args['z0'])
        mode = int(request.args['mode'])
    except KeyError:
        abort(400)
    else:
        theta, z, thetaShow, zShow = genSeries(m, i, k, kp, rho, z0, theta0, mode)
        return ujson.dumps({'theta': theta, 'z': z, 'thetaShow': thetaShow, 'zShow': zShow})


@view.route('/quit')
def quitLogin():
    session.clear()
    session.modified = True
    return ujson.dumps({'status': 'ok'})
