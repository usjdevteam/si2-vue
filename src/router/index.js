import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store/index.js'

import SignIn from '../components/signIn/SignIn.vue';
import Application from '../components/layout/ApplicationLayout.vue'
import Home from '../components/home/Home.vue'
import AddInstitution from '../components/institutions/AddInstitution.vue'
import InstitutionIndex from '../components/institutions/Index.vue'
import ViewInstitution from '../components/institutions/ViewInstitution.vue'



Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: SignIn,
    meta: {
      requiresAuth: false
    }
  },
  { 
    path : "/application",
    name : "Application",
    component : Application,
    meta: { 
        requiresAuth: false
      },
    children : [

        {
            path: 'home',
            name: 'Home',
            component: Home,
            meta: { 
                requiresAuth: false
              },
        },
        {
               path: 'institution/add',
               name: 'AddInstitution',
               component: AddInstitution,
               meta: { 
                   requiresAuth: false
                 },
        }

          path: 'viewinstitution/:institutionid',
          name: 'ViewInstitution',
          props: true ,
          component: ViewInstitution,
          meta: { 
              requiresAuth: true
            },
      },  
      {
       path: 'institutions',
       name: 'Institutions',
       component: InstitutionIndex,
       meta: { 
          requiresAuth: true
       },
      }
    ]
}
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});


router.beforeEach((to, from, next) => {


  if (to.matched.length > 0){ // CHECK IF THE LINK HAS A COMPONENT
    
    if(to.matched.some(record => record.meta.requiresAuth)) {
      //if (store.getters['session/isLoggedIn'] &&  store.getters['session/authStatus'] == 'success') {
      if (store.getters['session/isLoggedIn']) {
        next()
        return
      }
      next('/') 
    }
    next()
  }else{
    next('/') 
  }

})

export default router;
