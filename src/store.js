import Vue from "vue";
import Vuex from "vuex";
import cookie from "js-cookie";
import axios from "axios";

import router from "./router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Users: [],
    token: null,
  },

  mutations: {
    authUser(state, userData) {
      state.Users = userData.Users;
      state.token = userData.token;
    },

    login(state, token) {
      state.token = token;
    },
    logout(state){
      state.token = null
    }
  },

  actions: {
    login({ commit }, formData) {
      const config = {
        headers: {
          'Authorization': 'Bearer '+''
        }
      }

       let res = axios
        .post("https://localhost:44386/Authentication", {
          username: formData.username,
          password: formData.password,
        },
        config
        )
        .then(
          res => {
            console.log(res);
           localStorage.setItem('token', res.data.token)
           commit('login', {
               token: res.data.token
           })
           cookie.set('token', res.data.token)
          },
          
          
        );
    },

    AutoLogin({commit}){
      const token = localStorage.getItem('token')
      if(!token){
        return
      }
      commit('login',{
        token: token
      })
    },

    logout({commit}){
      cookie.remove("token")
      localStorage.removeItem('token')
      commit('logout')
      location.reload()
    }
  },

  getters: {
    getUserList(state) {
      return state.Users;
    },
    isAuthenticated(state) {
      return state.token != null;
    },
    getToken(state) {
      return state.token;
    },
  },
});
