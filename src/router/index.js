import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';
import Home from '../views/Home.vue';
import Info from '../views/Info.vue';
import Search from '../views/SearchFeed.vue';

Vue.use(VueRouter);

const requireAuth = (to, from, next) => {
  if (!store.getters.SESSION_IS_LOGGED) {
    next({ name: 'Home' });
  } else {
    next();
  }
};

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "dashboard" */ '@/views/About.vue'),
    beforeEnter: requireAuth,
  },
  {
    path: '/tagfeed',
    name: 'TagFeed',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/TagsFeed.vue'),
    beforeEnter: requireAuth,
  },
  {
    path: '/usersfeed',
    name: 'UsersFeed',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/UsersFeed.vue'),
    beforeEnter: requireAuth,
  },
  {
    path: '/info',
    name: 'ImageInfo',
    component: Info,
    beforeEnter: requireAuth,
    props: (route) => ({
      image: { firstName: 'John', lastName: 'Snow' },
      ...route.params,
    }),
  },
  {
    path: '/userTags',
    name: 'UserTags',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/UserTags.vue'),
    beforeEnter: requireAuth,
  },
  {
    path: '/search',
    name: 'SearchFeed',
    component: Search,
    beforeEnter: requireAuth,
    props: (route) => ({
      image: { firstName: 'John', lastName: 'Snow' },
      ...route.params,
    }),
  },
  {
    path: '/user',
    name: 'User',
    component: () => import(/* webpackChunkName: "dashboard" */'@/views/User.vue'),
    beforeEnter: requireAuth,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "dashboard" */'@/views/ProfileTabs.vue'),
    beforeEnter: requireAuth,
    children: [
      {
        path: '',
        component: () => import('@/views/profile/Multimedia.vue'),
      },
      {
        path: '/multimedia',
        component: () => import(/* webpackChunkName: "dashboard" */'@/views/profile/Multimedia.vue'),
      },
      {
        path: '/homedemo',
        component: () => import(/* webpackChunkName: "dashboard" */'@/views/profile/Siguiendo.vue'),
      },
    ],
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
