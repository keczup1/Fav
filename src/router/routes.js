
const routes = [
  {
    /*path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]*/
    path: '/',
    component: () => import('layouts/Login.vue')
  },
  {
    path: '/home',
    component: () => import('layouts/Main.vue'),
    children: [
      { path: '', component: () => import('pages/YourProjects.vue')}
    ]
  },
  {
    path: '/register',
    component: () => import('layouts/Register.vue')
  },
  {
    path: '/profile',
    component: () => import('layouts/YourProfile.vue')
  },
  {
    path: '/editor',
    component: () => import('layouts/Editor.vue')
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
