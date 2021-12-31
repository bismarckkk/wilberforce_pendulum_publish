import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/login',
      component: '../pages/login',
      title: '登录'
    },
    {
      path: '/register',
      component: '../pages/register',
      title: '注册'
    },
    {
      path: '/choose',
      component: '../pages/choose',
      title: '实验类别选择'
    },
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        {
          path: '/',
          component: './laboratory',
          title: '实验台'
        },
        {
          path: '/data',
          component: '../pages/data',
          title: '历史数据'
        },
        {
          path: '/help',
          component: '../pages/help',
          title: '实验指南'
        },
        {
          path: '/studentData',
          component: '../pages/studentData',
          title: '学生实验数据'
        },
      ],
    },
  ],
  fastRefresh: {},
  dynamicImport: {
    loading: '@/component/pageLoading',
  },
  proxy: {
    '/api': {
      'target': 'http://127.0.0.1:8010',
      'changeOrigin': true,
      'pathRewrite': { '^/api' : '' },
    },
  },
});



