<template>
  <div id="app">
    <div>
    <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
      <b-navbar-brand :href="'/'" replace>{{title}}</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item  :href="'/historias'" replace>Listado</b-nav-item>
          <b-nav-item :href="'/create'" replace>Nuevo</b-nav-item>
        </b-navbar-nav>
        </b-collapse>
    </b-navbar>
  </div>
 
      <router-view/>

  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark" fixed="bottom" class="footer"></b-navbar>
  </div>


  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
       title: process.env.NOVELA
    };
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
   margin-top: 70px; 
   margin-bottom: 30px;
   }
.footer{
  height: 25px;
}
</style>
