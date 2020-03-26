<template>
    <div class="container" id="tareas">
       
            <b-tabs class="card" content-class="mt-3">
                <b-tab title="Nuevas" active>
                    <div v-if="!tareas.nuevas" class="text-center text-muted">
                        No existen tareas nuevas
                    </div>
                    <b-table striped hover :items="tareas.nuevas" :fields="fields" fixed responsive stacked="md">
                       <template slot="actions" slot-scope="row">
                            <router-link  to="/tareas/contenidoTarea">
                                <b-button size="sm" variant="outline-primary">
                                    <i class="material-icons">input</i>
                                </b-button>
                            </router-link>
                           
                        </template>
                    </b-table>
    
                </b-tab>
                <b-tab title="Pendientes">
                    <div v-if="!tareas.pendientes" class="text-center text-muted">
                        No existen tareas pendientes
                    </div>
                    <b-table striped hover :items="tareas.pendientes" :fields="fields" fixed responsive></b-table>
                   
                </b-tab>
                <b-tab title="Terminadas">
                    <div v-if="!tareas.terminadas" class="text-center text-muted">
                        No existen tareas terminadas
                    </div>
                    <b-table striped hover :items="tareas.terminadas" :fields="fields"></b-table>
                  
                </b-tab>
                
            </b-tabs>
    </div>
</template>
<script>
import axios from 'axios';
export default {
     data() {
      return {
        fields: [
            'nombre_tarea',
            'codigo_tarea',
            'descripcion',
            'estado',
            { key: 'actions', label: 'Acciones' }
        ],
        fixed: true,
        tareas: {
            nuevas: null,
            pendientes: null,
            terminadas: null,
            

        }
      }
    },
    mounted(){
        this.getTareas();
        


    },
    methods:{
        getTareas(){
            axios.get('http://localhost:8084/api/tarea',{
                'headers': { 'Authorization': 'Bearer'+ this.$store.state.tokenUser}

            })
            .then((respuesta)=>{
                console.log(respuesta)
                if(respuesta.data.status == 200){
                    
                    let res = respuesta.data.data;
                    var tareasNuevas = [];
                    var tareasPendientes = [];
                    var tareasTerminadas = [];
                    /* var dataMostrar = ['id_tarea'];
                    this.conformarDatos(res,dataMostrar); */
                    res.forEach(function(items) {
                        if(items.estado == 'nueva'){
                            tareasNuevas.push(items);  
                            
                        }else if(items.estado == 'pendiente'){
                            tareasPendientes.push(items);
                        }else if(items.estado == 'terminada'){
                            tareasTerminadas.push(items);
                        }
                    })


                    this.tareas.nuevas = tareasNuevas;
                    this.tareas.pendientes = tareasPendientes;
                    this.tareas.terminadas = tareasTerminadas;



                }
            })


        },
       /*  conformarDatos: function(data, dataMostrar){

            data.forEach((items,index)=>{
                console.log(index);
                dataMostrar.forEach((index) =>{
                    
                })
                

            }) 
        }*/

        
            

        

    },
   

}
</script>
<style>

#tareas{
    margin-top: 30px !important;
}
    
</style>