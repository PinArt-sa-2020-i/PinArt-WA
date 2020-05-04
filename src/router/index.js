import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';
import Home from '../views/Home.vue';
import Info from '../views/Info.vue';

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
    props: {
      image: 'a',
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
