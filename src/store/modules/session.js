import axios from 'axios';


export default {
    namespaced : true,
    state: {
      status: '',
      token: localStorage.getItem('token') || '',
      user: {},
      userName: ''
  },
  mutations: {
      auth_request(state) {
          state.status = 'loading'
      },
      auth_success(state, token, user) {
          function parseJwt(token) {
              var base64Url = token.split('.')[1];
              var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
              var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
                  return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
              }).join(''));
              return JSON.parse(jsonPayload);
          }
          state.status = 'success'
          state.token = token
          state.user = user
          state.userName = parseJwt(token).unique_name
      },
      auth_error(state) {
          state.status = 'error'
      },
      logout(state) {
          state.status = ''
          state.token = ''
          state.userName = ''
      },
  },
  actions: {
      login({ commit }, user) {

          return new Promise((resolve, reject) => {
                commit('auth_request')
                axios({ url: process.env.VUE_APP_SERVER_API + '/account/login', data: user, method: 'POST' })
                  .then(resp => {
                      const token = "Bearer " + resp.data.token
                      const user = resp.data.user
                      localStorage.setItem('token', token)
                      axios.defaults.headers.common['Authorization'] = token
                      commit('auth_success', token, user)
                      resolve(resp)
                  })
                  .catch(err => {
                      commit('auth_error')
                      localStorage.removeItem('token')
                      reject(err)
                  })
          })
      },
      register({ commit }, user) {
          return new Promise((resolve, reject) => {
              commit('auth_request')
              axios({ url: process.env.VUE_APP_SERVER_API + '/account/register', data: user, method: 'POST' })
                  .then(resp => {
                      const token = resp.data.token
                      const user = resp.data.user
                      localStorage.setItem('token', token)
                      axios.defaults.headers.common['Authorization'] = token
                      commit('auth_success', token, user)
                      resolve(resp)
                  })
                  .catch(err => {
                      commit('auth_error', err)
                      localStorage.removeItem('token')
                      reject(err)
                  })
          })
      },
      logout({ commit }) {
          return new Promise((resolve) => {
              commit('logout')
              localStorage.removeItem('token')
              delete axios.defaults.headers.common['Authorization']
              resolve()
          })
      },
  },
  getters: {
      isLoggedIn: state => !!state.token,
      authStatus: state => state.status,
  }
        

}


