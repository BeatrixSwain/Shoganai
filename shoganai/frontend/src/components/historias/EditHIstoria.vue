<template lang="html">
    <div class="container">
        <div class="row">
            <div class="col text-left">
                <h2>Editar capítulo</h2>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <form @submit="onSubmit">
                            <div class="form-group row">
                                <label for="capitulo" class="col-sm-2 col-form-label">Nombre del capítulo: </label>
                                <div class="col-sm-10">
                                    <input type="text" placeholder="Capítulo X" name="capitulo" class="form-control" v-model.trim="form.event">
                                </div> 
                            </div>   
                             <div class="form-group row">
                                <label for="description" class="col-sm-12 col-form-label text-left">Descripción del capítulo: </label>
                                <div class="col-sm-12">
                                      <b-form-textarea
                                            id="description"
                                            placeholder="Un pequeño resumen del capítulo..."
                                            rows="3"
                                            max-rows="6" v-model.trim="form.description"
                                            ></b-form-textarea>
                                </div> 
                            </div>   
                            <div class="rows">
                                <div class="col text-left">
                                    <b-button type="submit" variant="primary">Editar</b-button>
                                    <b-button type="submit" variant="warning" :href="'/historias'" replace>Cancelar</b-button>
                                </div>    
                            </div>    

                        </form>    
                    </div>
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
            historiaId: this.$route.params.historiaId,
            form:{
                event: '<3',
                description: '<3'
            }
        }
    },
    methods:{
        onSubmit(evt){ 
            evt.preventDefault();
            const path = `${process.env.BASE_URI}historias/${this.historiaId}/`;
            axios.put(path, this.form).then((res)=>{
                this.form.event = res.data.event;
                this.form.description = res.data.description;                
                swal("Registro actualizado.","","success").then(()=>{
                    location.href = '/historias';
                })
                
            }).catch((err)=>{
                swal("No se pudo actualizar el registro.","","error")
                console.error(err);
            });
        },
        getBook(){
            const path = `${process.env.BASE_URI}historias/${this.historiaId}/`;
            axios.get(path).then((res)=>{
                this.form.event = res.data.event;
                this.form.description = res.data.description;
            }).catch((err)=>{
                console.log(err);
            });
        }
    },
    created(){
         this.getBook();
    }
}
</script>

<style lang="css" scoped>

</style>