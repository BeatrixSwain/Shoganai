<template lang="html">
    <div class="container">
        <div class="row">
            <div class="col text-left">
                <h2>Listado de Capítulos</h2>
                <div class="col-md-12 containerTable">
                    <b-table striped hover responsive :items="historias" :fields="fields" class="listTable">
                        <!-- Definir los botones -->
                        <template v-slot:cell(action)='row'>
                            <div class="btns-table">
                            <b-button size="sm" variant="success" class="edit align-end" :href="'/historias/'+row.item.id+'/edit'" replac>
                               <b-icon icon="pencil-fill"></b-icon>
                            </b-button>
                            <b-button size="sm" variant="danger" class="delete">
                               <b-icon icon="trash2-fill" v-on:click="deleteHistoria(row.item.id)">
                                <!-- animation="spin" font-scale="4" shift-v="8" -->
                                </b-icon>
                            </b-button>
                            </div>
                        </template>
                    </b-table>
                </div>   
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import swal from 'sweetalert';

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
            const path = `${process.env.BASE_URI}historias/`;
            axios.get(path).then((response)=>{
                this.historias = response.data;
            }).catch((err)=>{
                console.log(err);
            });

        },
        deleteHistoria(id){
            console.log(id)
            swal("¿Quieres borrar este elemento?", "","warning", {buttons: ["No", "Sí"]}).then((res)=>{
                if(res==true){
                    const path = `${process.env.BASE_URI}historias/${id}/`;
                    axios.delete(path).then((res)=>{
                        location.href = '/historias';
                    }).catch((err)=>{
                        swal("No se pudo borrar el registro.","","error")
                        console.error(err);
                        location.href = '/historias';
                    });
                
                }
            }).catch((err)=>{
                console.log(err)
            });
            // if (confirm("¿Quieres borrarlo?")) {
            //     swal("alaa!", "ckck!","warning");
            // } else {
            //     swal("cobarde!", "ckck!","error");
            // }
            
        }
    },
    created(){
        this.getHistorias();
    }
}
</script>

<style lang="css" scoped>
    .btns-table{
        text-align: right;
        min-width: 100px;
    }

    .containerTable{
        padding:0px;
    }

  </style>