<template>
    <div class="container-fluid">
        
        <div class="row">
            <div class="col-xl-4"></div>
            <div class="col-xl-4" >
                <div class="card" id="card_login">
                    <div class="card-body">
                        <h3 class="card-title">iniciar sesión</h3>
                        <form v-on:submit.prevent>
                            <div class="form-group">
                                <label  for="username">Nombre Usuario</label>
                                <input type="text" id="username" class="form-control" v-model="username" placeholder="Ingrese Nombre de usuario">
                            </div>
                            <div class="form-group">
                                <label for="contrasena">Contraseña</label>
                                <input type="password" id="contrasena" class="form-control" v-model="contrasena" placeholder="Ingrese Contraseña">
                            </div>
                            <button v-on:click="login" class="btn btn-primary" id="btn_ingresar">ENTRAR</button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-xl-4">
                <b-alert 
                id = "alert"
                :show="dismissCountDown"
                dismissible
                variant="danger"
                @dismissed="dismissCountDown=0"
                @dismiss-count-down="countDownChanged"
                >
                    
                    <p v-text="alert"></p>
                    <b-progress
                        variant="danger"
                        :max="dismissSecs"
                        :value="dismissCountDown"
                        height="4px"
                    ></b-progress>
                </b-alert>
            </div>
        </div>
        
    </div>
    
</template>
<script>



import {mapState} from 'vuex';


export default {
    data() {
        return {
            username: null,
            contrasena: null,
            alert: null,
            dismissSecs: 5,
            dismissCountDown: 0,
            showDismissibleAlert: false
        }
    },
    methods: {
      
        login(){
          
            this.$store.dispatch('login',{

                username: this.username,
                contrasena: this.contrasena
            })
            .then((respuesta)=>{
               
                
                if(respuesta.status == 200 && respuesta.token != null ){
                    
                    this.$router.push('/tareas'); 
                   
                }else if(respuesta.status == 401){
                    
                    this.alert = "Nombre de usuario o contraseña incorrectos";
                    this.dismissCountDown = this.dismissSecs

                }
                
            })
                        
        },

        countDownChanged(dismissCountDown) {
            this.dismissCountDown = dismissCountDown
        },
      


    }
}
</script>
<style>
#card_login{
    margin-top:100px;

}
#alert{
    margin: 5px 5px 5px 5px;
}
.columna{
    padding: 0px !important;
}
    
    
</style>