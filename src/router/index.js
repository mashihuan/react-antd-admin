import React from 'react'
import { Redirect } from 'react-router-dom'

import DefaultLayout from '@/layouts/default'

const routes = [
  {
    path: '/login',
    component: React.lazy(_ => import('@/pages/login')),
    hidden: true
  },
  {
    path: '/',
    component: DefaultLayout,
    meta: { title: 'Dashboard', icon: 'DashboardOutlined' },
    routes: [
      {
        path: '/',
        exact: true,
        hidden: true,
        render: () => (
          <Redirect to="/dashboard" />
        )
      },
      {
        path: '/dashboard',
        component: React.lazy(_ => import('@/pages/dashboard')),
        meta: { title: 'Dashboard', icon: 'DashboardOutlined', roles: ['admin', 'editor'] }
      },
      {
        path: '/user',
        component: React.lazy(_ => import('@/pages/user')),
        meta: { title: '个人页', icon: 'UserOutlined', roles: ['editor'] }
      },
      {
        path: '/manage',
        component: React.lazy(_ => import('@/pages/manage')),
        meta: { title: '管理页', icon: 'CrownOutlined', roles: ['admin'] }
      },
      {
        path: '/table',
        component: React.lazy(_ => import('@/pages/table')),
        meta: { title: '表格页', icon: 'TableOutlined' }
      },
      {
        path: '/form',
        component: React.lazy(_ => import('@/pages/form')),
        meta: { title: '表单页', icon: 'FormOutlined' }
      },

      {
        path: '/nested',
        component: React.lazy(_ => import('@/pages/nested')),
        meta: { title: '嵌套页', icon: 'ClusterOutlined' },
        routes: [
          {
            path: '/nested/menu1',
            component: React.lazy(_ => import('@/pages/nested/menu1')),
            meta: { title: 'menu1' },
            routes: [
              {
                path: '/nested/menu1/menu1-1',
                component: React.lazy(_ => import('@/pages/nested/menu1/menu1-1')),
                meta: { title: 'menu1-1' }
              },
              {
                path: '/nested/menu1/menu1-2',
                component: React.lazy(_ => import('@/pages/nested/menu1/menu1-2')),
                meta: { title: 'menu1-2' },
                routes: [
                  {
                    path: '/nested/menu1/menu1-2/menu1-2-1',
                    component: React.lazy(_ => import('@/pages/nested/menu1/menu1-2/menu1-2-1')),
                    meta: { title: 'menu1-2-1' }
                  },
                  {
                    path: '/nested/menu1/menu1-2/menu1-2-2',
                    component: React.lazy(_ => import('@/pages/nested/menu1/menu1-2/menu1-2-2')),
                    meta: { title: 'menu1-2-2' }
                  }
                ]
              }
            ]
          },
          {
            path: '/nested/menu2',
            component: React.lazy(_ => import('@/pages/nested/menu2')),
            meta: { title: 'menu2' }
          }
        ]
      },
    
      {
        path: '/404',
        component: React.lazy(_ => import('@/pages/404')),
        meta: { title: '404', icon: 'WarningOutlined' }
      },

      {
        path: '*',
        component: React.lazy(_ => import('@/pages/404')),
        hidden: true
      }
    ]
  }
  
]

export default routes