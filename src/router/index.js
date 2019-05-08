import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

Vue.use(Router)

let router = new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: () =>
                import ('@/page/home'),
            redirect: '/home',
            children: [{
                    path: '/home',
                    name: 'Content',
                    component: () =>
                        import ('@/components/content')
                },
                {
                    path: '/home',
                    name: 'right',
                    component: () =>
                        import ('@/components/right')
                },
                {
                    path: '/home/fornt',
                    name: 'Fornt',
                    component: () =>
                        import ('@/components/front'),
                },
                {
                    path: '/home/android',
                    name: 'Android',
                    component: () =>
                        import ('@/components/Android'),
                },
                {
                    path: '/home/IOS',
                    name: 'IOS',
                    component: () =>
                        import ('@/components/ios'),
                },
                {
                  path: '/home/right',
                  name: 'Right',
                  component: () =>
                      import ('@/components/right'),
              }
            ]
        },
        {
            path: '/login',
            name: 'Login',
            component: () =>
                import ('@/page/login')
        },
        {
            path: '/editor',
            name: 'editor',
            meta: {
                requireLogin: true,
            },
            component: () =>
                import ('@/page/editor')
        },
        {
            path: '/owncenter',
            name: 'owncenter',
            meta: {
                requireLogin: true,
            },
            component: () =>
                import ('@/page/owncenter')
        },
        {
            path: '/register',
            name: 'Register',
            component: () =>
                import ('@/page/register')
        },
        {
          path: '/detail',
          name: 'Detail',
          component: () =>
              import ('@/page/detail')
      }
    ]
})

router.beforeEach((to, from, next) => {
    if (to.meta.requireLogin) { //判断该路由是否需要登陆权限
        if (store.state.userToken) { //通过vuex state获取当前的token是否存在
            next()
        } else {
            next({
                path: '/login',
                query: { redirect: to.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
    } else {
        next();
    }
});

export default router;
