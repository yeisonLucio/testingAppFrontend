
<template>
    <div>
        <nav class="navbar navbar-expand-md navbar-dark bg-primary">

            <a class="navbar-brand abs" href="#">
                 <img src="../assets/logo.png" width="150" height="50"  alt="">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navbar-collapse collapse" id="collapsingNavbar">
             <template v-if="!tokenUser">
                    <ul class="navbar-nav ml-auto">
                        <router-link  to="/" active-class="active" exact tag="li" class="nav-item">
                            <a class="nav-link" data-toggle="collapse">Home</a>
                        </router-link>
                        <router-link to="/registro" active-class="active" exact tag="li" class="nav-item">
                            <a class="nav-link" data-toggle="collapse">Registro</a>
                        </router-link>
                        <router-link to="/login" active-class="active" exact tag="li" class="nav-item">
                            <a class="nav-link" data-toggle="collapse">Login</a>
                        </router-link>
                    </ul>
             </template>
             
             <template v-if="tokenUser">
                  <ul class="navbar-nav ml-auto">
                        <router-link  to="/tareas" active-class="active" exact tag="li" class="nav-item">
                            <a class="nav-link" data-toggle="collapse">Tareas</a>
                        </router-link>
                        <router-link to="/registro" active-class="active" exact tag="li" class="nav-item">
                            <a class="nav-link" data-toggle="collapse">otras</a>
                        </router-link>
                        <router-link to="" @click.native="logout" exact tag="li" class="nav-item">
                            <a  class="nav-link" data-toggle="collapse">Salir</a>
                        </router-link>
                    </ul>
             </template>
            </div>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
    data: function (){
        return{
            
            
        }
    },
    computed: {
        ...mapState(['tokenUser'])
    
    },
    methods: {
        logout(){
            this.$store.dispatch('logout',{
                token: this.$store.state.tokenUser,
            })
            .then((respuesta) => {
                if(respuesta.status){
                    
                    this.$router.push('/'); 

                }
                
            })
        }
    }

  /*   beforeUpdate() {
        this.autenticado = this.$cookie.get('token');
        console.log('autenticado = '+this.autenticado);

    }, */

   /*  computed: {
        estaAutenticado(){
            return this.$cookie.get('token');
        }
        
    } */
    
}
</script>

<style>


</style>
