export default {
  namespace: 'param',
  state: {k: 25, kp: 5e-3, i: 1.2e-4, m: 0.5, rho: 9e-2, z0: 0, theta0: 0, time: new Date()},
  reducers: {
    'update'(state, { payload: { k, kp, i, m, z0, theta0, rho } }) {
      if (typeof (k) == 'undefined') {
        k = state.k;
      }
      if (typeof (kp) == 'undefined') {
        kp = state.kp;
      }
      if (typeof (i) == 'undefined') {
        i = state.i;
      }
      if (typeof (m) == 'undefined') {
        m = state.m;
      }
      if (typeof (z0) == 'undefined') {
        z0 = state.z0;
      }
      if (typeof (theta0) == 'undefined') {
        theta0 = state.theta0;
      }
      if (typeof (rho) == 'undefined') {
        rho = state.rho;
      }
      return { k: k, kp: kp, i: i, m: m, z0: z0, theta0: theta0, rho: rho, time: new Date() };
    },
  },
};
