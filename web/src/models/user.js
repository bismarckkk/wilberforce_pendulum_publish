import { login, initUser, log, quit } from '@/utils/service';
import { message } from 'antd';
import { history } from 'umi';

export default {
  namespace: 'user',
  state: { min: 0, sec: 0, name: '', sid: '', exps: [{preview: 0}], nowExp: 0, m: 's' },
  effects: {
    *'clean'({ payload }, { put }) {
      yield quit();
      history.push('/login')
      yield put({
        type: 'initR',
        payload: {
          name: '',
          sid: '',
          m: 's',
          exps: [{preview: 0}],
          nowExp: 0
        }
      })
    },
    *'login'({ payload }, { put }) {
      let res = yield login(payload)
      if (res.data.error) {
        message.error(res.data.error)
      } else {
        yield put({type: 'initR', payload: res.data})
        history.push('/choose')
      }
    },
    *'init'({ payload }, { put }) {
      let res = yield initUser(payload)
      if (res) {
        if (res.status !== 200) {
          message.error(res.statusText)
        }
        else if (res.data.error) {
          message.error(res.data.error)
          console.log('go to login')
          history.push('/login')
        } else {
          yield put({type: 'initR', payload: res.data})
          console.log('go to /')
          if (history.length > 1) {
            history.goBack()
          } else {
            history.push('/')
          }
        }
      }
    },
    *'log'({ payload: { count, preview, review } }, { put, select }) {
      let p = {
        exp: yield select(state => state.user.nowExp)
      }
      if (count) {
        p.count = count;
      }
      if (preview) {
        p.preview = preview;
      }
      if (review) {
        p.review = review;
      }
      let res = yield log(p)
      if (res.data.error) {
        message.error(res.data.error)
      } else {
        yield put({type: 'logR', payload: { count, preview, review }})
        if (preview && preview >= 60) {
          history.push('/')
        } else if (review && review >= 60) {
          history.push('/choose')
        }
      }
    }
  },
  reducers: {
    'updateTime'(state, { payload: { min, sec } }) {
      if (min >= 2) {
        state.exps[state.nowExp].previewUnlock = true;
      }
      return { ...state, sec: sec, min: min };
    },
    'initR'(_, { payload: { name, sid, exps, m } }) {
      return {
        min: 0,
        sec: 0,
        name: name,
        sid: sid,
        exps: exps,
        m: m,
        nowExp: 0
      };
    },
    'choose'(state, { payload }) {
      return {...state, nowExp: payload, sec: 0, min: 0 }
    },
    'logR'(state, { payload: { count, preview, review } }) {
      let exps = state.exps
      if (count) {
        exps[state.nowExp].count += count;
      }
      if (preview) {
        exps[state.nowExp].preview = preview;
      }
      if (review) {
        exps[state.nowExp].review = review;
      }
      return {...state, exps: exps}
    },
  },
};
