import App from '../views/app/App.vue'
import Login from '../views/login/Login.vue'
import AppHelper from '../views/app/AppHelper.vue'
import AppInfo from '../views/app/AppInfo.vue'
import AppHelperMain from '../views/app/AppHelperMain.vue'
import AppInfoSide from '../views/app/AppInfoSide.vue'

export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    path: '/app',
    component: App,
    props: true,
    children: [
      {
        path: 'help',
        components: {
          default: AppHelper,
          main: AppHelperMain
        }
      },
      {
        path: 'info',
        components: {
          default: AppInfo,
          side: AppInfoSide
        }
      }
    ],
    meta: {
      title: 'app page'
    }
  },
  {
    path: '/login',
    component: Login,
    name: 'login',
    meta: {
      title: 'login page'
    }
  }
]
