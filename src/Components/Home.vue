<template>
    <div>
        <h1>home</h1>
        <button v-on:click="materiales">get</button>
        <pre>{{ $data }}</pre>
        
    </div>
    
</template>
<script>
import axios from 'axios';
export default {
    data: function (){
        return{
            material: [],

        }

    },
    methods: {
        materiales(){
            axios.get('http://localhost:8084/api/auth/user',{
                'headers': { 'Authorization': 'Bearer'+this.$cookie.get('token') }
            })
            .then(respuesta =>{
               console.log(respuesta);

            });
            
        }
    }
    
}
</script>