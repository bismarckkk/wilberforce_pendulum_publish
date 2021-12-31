from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


def commit():
    db.session.commit()


def insert(obj):
    db.session.add(obj)


class Teacher(db.Model):
    __tablename__ = 'teachers'
    name = db.Column(db.String(40), primary_key=True)
    passwd = db.Column(db.String(70))
    email = db.Column(db.String(70), unique=True)
    phone = db.Column(db.String(20))
    code = db.Column(db.String(40), unique=True)
    students = db.relationship('Student', backref=db.backref('students'))

    def getDict(self):
        return {
            'name': self.name,
            'sid': self.name,
            'm': 't',
            'exps': [{'count': 1, 'preview': 100, 'review': 100}] * 4
        }


class Student(db.Model):
    __tablename__ = 'students'
    sid = db.Column(db.String(40), primary_key=True)
    name = db.Column(db.String(40))
    passwd = db.Column(db.String(70))
    exp1 = db.Column(db.Integer, default=0)
    exp1Preview = db.Column(db.Integer, default=0)
    exp1Review = db.Column(db.Integer, default=0)
    exp2 = db.Column(db.Integer, default=0)
    exp2Preview = db.Column(db.Integer, default=0)
    exp2Review = db.Column(db.Integer, default=0)
    exp3 = db.Column(db.Integer, default=0)
    exp3Preview = db.Column(db.Integer, default=0)
    exp3Review = db.Column(db.Integer, default=0)
    exp4 = db.Column(db.Integer, default=0)
    exp4Preview = db.Column(db.Integer, default=0)
    exp4Review = db.Column(db.Integer, default=0)
    teacher = db.Column(db.String(40), db.ForeignKey('teachers.name'))

    def getDict(self):
        return {
            'name': self.name,
            'sid': self.sid,
            'm': 's',
            'exps': [
                {
                    'count': self.exp1,
                    'preview': self.exp1Preview,
                    'review': self.exp1Review
                },
                {
                    'count': self.exp2,
                    'preview': self.exp2Preview,
                    'review': self.exp2Review
                },
                {
                    'count': self.exp3,
                    'preview': self.exp3Preview,
                    'review': self.exp3Review
                },
                {
                    'count': self.exp4,
                    'preview': self.exp4Preview,
                    'review': self.exp4Review
                },
            ]
        }
