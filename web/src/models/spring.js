import { getSeries } from '@/utils/service';

export default {
  namespace: 'spring',
  state: { rotate: 0, length: 0, theta: [], z: [], thetaShow: [], zShow: [], started: false, startTime: null },
  effects: {
    * 'getSeries'({ payload }, { put, _ }) {
      //console.log(payload)
      let res = yield getSeries(payload);
      if (res.status === 200) {
        yield put({type: 'clear'})
        yield put({type: 'updateSeries', payload: res.data})
        yield put({type: 'start', payload: payload})
      }
    },
  },
  reducers: {
    'update'(state, { payload: { rotate, length } }) {
      if (typeof (rotate) == 'undefined') {
        rotate = state.rotate;
      }
      if (typeof (length) == 'undefined') {
        length = state.length;
      }
      if (-10 > rotate || rotate > 10) {
        rotate = state.rotate
      }
      if (-0.15 > length || length > 0.15) {
        length = state.length
      }
      if (!rotate && rotate !== 0) {
        rotate = state.rotate
      }
      if (!length && length !== 0) {
        length = state.length
      }
      return {
        rotate: rotate,
        length: length,
        started: state.started,
        theta: state.theta,
        z: state.z,
        thetaShow: state.thetaShow,
        zShow: state.zShow,
        startTime: state.startTime
      };
    },
    'updateSeries'(state, { payload }) {
      state.theta = payload.theta
      state.z = payload.z
      state.thetaShow = payload.thetaShow
      state.zShow = payload.zShow
      return state
    },
    'clear'(state, _) {
      return {
        rotate: state.rotate,
        length: state.length,
        started: state.started,
        theta: [],
        z: [],
        thetaShow: [],
        zShow: [],
        startTime: state.startTime
      };
    },
    'start'(state, { payload }) {
      const time = new Date()
      localStorage.setItem(time.Format("yyyy-MM-dd HH:mm:ss"), JSON.stringify({p: payload, time: time.valueOf()}))
      return {
        rotate: state.rotate,
        length: state.length,
        started: true,
        theta: state.theta,
        z: state.z,
        thetaShow: state.thetaShow,
        zShow: state.zShow,
        startTime: time
      };
    },
    'stop'(state, _) {
      return {
        rotate: state.rotate,
        length: state.length,
        started: false,
        theta: state.theta,
        z: state.z,
        thetaShow: state.thetaShow,
        zShow: state.zShow,
        startTime: null
      };
    },
  },
};
