import Vue from 'vue';
import Vuex from 'vuex';
import cookie from 'js-cookie';
import axios from "axios";

import router from './router';

Vue.use(Vuex);

export default new Vuex.Store({

    state:{
        Users: [],
        token: null
    },
    
    mutations:{
        userList(state, userList){
            state.Users = userList
        },

        addUser(state, user){
            state.Users.push(user);
        },

        deleteUser(state, user){
            state.Users.map(x => {
                if(x.id == user){
                    state.Users.splice(0,1)
                }
            })
        },

        editUser(state, user) {
            let userIndex = state.Users.findIndex(x => x.id == user.id)
            state.Users[userIndex] = user
        },

        login(state, token){
            state.token = token
        },

        logout(state){
            state.token = null
        }
    },

    actions:{

        addUser(vuexContext, user) {
            vuexContext.commit('addUser', user)
        },

        deleteUser(vuexContext, user) {
            vuexContext.commit('deleteUser', user)
        },

        editUser(vuexContext, user) {
            vuexContext.commit('editUser', user)
            console.log("edit user")
        },

        async login (vuexContext, formData){
          let response = await axios.post("https://localhost:44386/Authentication",  {
              username: formData.username,
              password: formData.password
          }) 
          this.axios.setHeader("Authorization", "Bearer "+ response.jwt)
          console.log("jwt token", response.jwt)
          vuexContext.commit('login', response.jwt)
          cookie.set('token',response.jwt)
          
          return response
        }
    },

    getters:{
        getUserList(state){
            return state.Users
        },
        isAuthenticated(state){
            return state.token !=null
        },
        getToken(state){
            return state.token
        }


    },
});