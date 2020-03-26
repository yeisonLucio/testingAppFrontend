import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import createPersistedState from 'vuex-persistedstate'


Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        DatosUser: [],
        tokenUser: null,
    },
    plugins: [createPersistedState()],
    mutations: {
        fijarUser(state,data){
            if(data == null){
                state.DatosUser = [];
            }else{
                state.DatosUser = data;
            }
            
            
        },
        fijarToken(state,data){
            if(data == null){
                state.tokenUser = null;
            }else{
                state.tokenUser = data.token;
            }
        }

    },
    actions: {

        login({commit, dispatch}, data) {
            var params= {};
            if(data.username.match(/@/)){
                params = {email: data.username, password: data.contrasena};
            }else{
                params = {username: data.username, password: data.contrasena};
            }
            return new Promise((resolve, reject) => {
                axios.post('http://localhost:8084/api/auth/login',params)
                .then((res) =>{
                    console.log('res'+res);

                    // Se fija el token en la mutacion
                    commit('fijarToken',res.data);
                    var datos = res.data;

                    
                    //obtener el usuario
                    axios.get('http://localhost:8084/api/auth/user',{
                        'headers': { 'Authorization': 'Bearer'+ res.data.token }
                    })
                    .then((respuesta) =>{
                    
                        commit('fijarUser',respuesta.data.data);
                        datos.user = respuesta.data.data;
                        resolve(datos);

                    }).catch((error) => {
                        console.log(error);
                    })

                    
                }).catch((error) => {
                    resolve(error.response.data); 

                })
                

            })
        },

        logout({commit}, data){
            return new Promise((resolve, reject) => {
                axios.post('http://localhost:8084/api/auth/logout',{

                    'headers': { 'Authorization': 'Bearer'+data.token }
                })
                .then((response) => {
                    commit('fijarToken',null);
                    commit('fijarUser',null);
                    resolve(response);
                })
            })

        }

    },


}); 