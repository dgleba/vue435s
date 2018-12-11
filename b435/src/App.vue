<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    
    <TableSearch/>
    <!-- <HelloWorld msg="Welcomess to Your Vue.js App"/> -->
  
  </div>
</template>

<script>

import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

Vue.use(VueMaterial)

import HelloWorld from './components/HelloWorld.vue'
import TableSearch from './components/TableSearch.vue'


export default {
  name: 'app',
  components: {
    HelloWorld,
    TableSearch
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
  margin-top: 60px;
}
</style>
