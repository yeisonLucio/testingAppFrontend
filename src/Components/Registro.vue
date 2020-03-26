<template>
    <div>
       <div class="row">
            <div class="col-lg-4"></div>
            <div class="col-lg-4">
                <div class="card" id="card_register">
                    <div class="card-body">
                        <h3 class="card-title">Registro</h3>
                        <form v-on:submit.prevent>
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <label  for="name">Nombre</label>
                                        <input type="text" id="name" class="form-control" v-model="name" placeholder="Ingrese su nombre">
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <label  for="username">Nombre de usuario</label>
                                        <input type="text" id="username" class="form-control" v-model="username" placeholder="Nombre de usuario">
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label  for="email">Email</label>
                                <input type="email" id="email" class="form-control" v-model="email" placeholder="Ingrese su email">
                            </div>
                            <div class="form-group">
                                <label for="password">Contraseña</label>
                                <input type="password" id="password" class="form-control" v-model="password" placeholder="Ingrese una contraseña">
                            </div>
                            <div class="form-group">
                                <label for="password_confirmation">Confirmar Contraseña</label>
                                <input type="password" id="password_confirmation" class="form-control" v-model="password_confirmation" placeholder="Ingrese una contraseña">
                            </div>
                            <button @click="registrar" class="btn btn-primary" id="btn_ingresar">Registrar</button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-lg-4"></div>
            <pre>{{ $data }}</pre>
        </div>
        
    </div>
    
</template>

<script>
import axios from 'axios';
export default {
    data: function () {
        return {
            
            name: null,
            username: null,
            email: null,
            password: null,
            password_confirmation: null,
        }
    },
    methods: {
        registrar(){
            axios.post('http://localhost:8084/api/auth/register',{
                name: this.name,
                username: this.username,
                email: this.email,
                password: this.password,
                password_confirmation: this.password_confirmation

            })
            .then((respuesta)=>{
                if(respuesta.status == 200){
                    this.$router.push('/login'); 
                }

            })

        }
    }
    
}
</script>
<style>
    #card_register{
        top: 50px;

    }
    
</style>