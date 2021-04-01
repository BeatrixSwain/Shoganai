<template lang="html">
    <div class="container">
        <div class="row">
            <div class="col text-left">
                <h2>Listado de Capítulos</h2>
                <div class="col-md-12">
                    <b-table striped hover :items="historias" :fields="fields">
                        <!-- Definir los botones -->
                        <template v-slot:cell(action)='row'>
                            <b-button size="sm" variant="success" class="edit" :href="'/historias/'+row.item.id+'/edit'" replac>
                               <b-icon icon="pencil-fill"></b-icon>
                            </b-button>
                            <b-button size="sm" variant="danger" class="delete">
                               <b-icon icon="trash2-fill">
                                <!-- animation="spin" font-scale="4" shift-v="8" -->
                                </b-icon>
                            </b-button>
                        </template>
                    </b-table>
                </div>   
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return{
            fields:[
                {key:'event', label:'Capítulo'},
                {key:'description', label:'Resumen'},
                {key: 'action', label:''}
            ],
            historias: []
        }
    },
    methods:{
        getHistorias(){
            //Petición axios.
            const path = 'http://127.0.0.1:8000/api/v1.0/historias/';
            axios.get(path).then((response)=>{
                this.historias = response.data;
            }).catch((err)=>{
                console.log(err);
            });

        }
    },
    created(){
        this.getHistorias();
    }
}
</script>

<style lang="css" scoped>

</style>