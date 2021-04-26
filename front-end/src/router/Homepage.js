export default {
  path: '/',
  component: () => import('@/views/Homepage/index.vue'),
  children: [
    {
      path: '',
      name: 'Detail',
      component: () => import('@/views/Homepage/pages/SoccerStadium.vue')
    },
    {
      path: 'premeir-standing',
      name: 'FirstMenu',
      component: () => import('@/views/Homepage/pages/premeir-standing.vue')
    },
    {
      path: 'premeir-schedule',
      name: 'premeir-schedule',
      component: () => import('@/views/Homepage/pages/premeir-schedule.vue')
    },
    {
      path: 'premeir-detail/:MatchDetail',
      name: 'premeir-detail',
      component: () => import('@/views/Homepage/pages/premeir-detail.vue'),
      props: true

    },
    {
      path: 'laliga-schedule',
      name: 'laliga-schedule',
      component: () => import('@/views/Homepage/pages/laliga-schedule.vue')

    },
    {
      path: 'laliga-standing',
      name: 'laliga-standing',
      component: () => import('@/views/Homepage/pages/laliga-standing.vue')
    },
    {
      path: 'laliga-detail/:MatchDetail',
      name: 'laliga-detail',
      component: () => import('@/views/Homepage/pages/laliga-detail.vue'),
      props: true
    }
  ]
}
