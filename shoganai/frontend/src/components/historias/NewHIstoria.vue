<template lang="html">
    <div class="container">
        <div class="row">
            <div class="col text-left">
                <h2>Guardar capítulo</h2>
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
                                    <b-button type="submit" variant="success">Guardar</b-button>
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
            form:{
                event: '',
                description: ''
            }
        }
    },
    methods:{
        onSubmit(evt){ 
            evt.preventDefault();
            console.log(process.env.BASE_URI)
            const path = `${process.env.BASE_URI}historias/`;
            axios.post(path, this.form).then((res)=>{
                this.form.event = res.data.event;
                this.form.description = res.data.description;                
                swal("Registro creado.","","success").then(()=>{                    
                    location.href = '/historias';
                })
            }).catch((err)=>{
                swal("No se pudo crear el regist.ro.","","error")
                console.error(err);
            });
        }
    },
    created(){
        
    }
}
</script>

<style lang="css" scoped>

</style>