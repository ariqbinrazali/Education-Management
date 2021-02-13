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
  },

  actions: {
    login({ commit }, formData) {
      let res = axios
        .post("https://localhost:44386/Authentication", {
          username: formData.username,
          password: formData.password,
        })
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
