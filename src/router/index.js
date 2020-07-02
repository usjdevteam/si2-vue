import Vue from 'vue';
import VueRouter from 'vue-router';
//import store from '../store/index.js'


import Navbar from '../components/Navbar.vue';

Vue.use(VueRouter);

const routes = [{
    path: '/',
    component: Navbar,
    meta: {
      requiresAuth: false
  }
}
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

// router.beforeEach((to, from, next) => {
//     if (to.matched.some(record => record.meta.requiresAuth)) {
//         if (store.getters.isLoggedIn) {
//             next()
//             return
//         }
//         next('/login')
//     } else {
//         next()
//     }
// })

// router.beforeEach((to, from, next) => {


//   if (to.matched.length > 0){ // CHECK IF THE LINK HAS A COMPONENT
    
//     if(to.matched.some(record => record.meta.requiresAuth)) {
//       console.log(store.getters); 
//       if (store.getters['session/isLoggedIn'] &&  store.getters['session/authStatus'] == 'success') {
//         next()
//         return
//       }
//       next('/') 
//     }
//     next()
//   }else{
//     next('/') 
//   }

// })

export default router;
