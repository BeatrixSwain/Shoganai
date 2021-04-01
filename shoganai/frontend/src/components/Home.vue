<template>
  <b-container class="bv-example-row">
    <b-row class="justify-content-md-center">
      <b-col cols="8" >

        <h1>Shoganai</h1>
        <div>
          <b-img src="https://cdn.pixabay.com/photo/2020/06/19/09/16/fantasy-5316369_960_720.jpg" fluid alt="Responsive image"></b-img>
      </div>
      <div class="text">
        <p>
               <b>Shoganai</b> significa que no se puede evitar.<br/>
               Es un término que se utiliza para hacer consciente a las personas de que hay cosas <br/>
               que suceden y no son culpa suya, simplemente no se pueden evitar y deben continuar<br/>
               adelante sin remordimientos.
         </p> 
      </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.text{
  text-align: right;
  padding-top: 20px;
}
</style>
