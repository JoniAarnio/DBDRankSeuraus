

<template>
  <div id="app">
    <b-container>
      <h1>Dead by Daylight Rank</h1>
      <b-row>
        <b-col>
          <Lightbringer></Lightbringer>
        </b-col>
        <b-col>
          <Unbroken></Unbroken>
        </b-col>
      </b-row>
      <br><br>
      <b-row>
        <b-col>
          <Benevolent></Benevolent>
        </b-col>
        <b-col>
          <Evader></Evader>
        </b-col>
    </b-row>
    </b-container>
    
  </div>


</template>

<script>
import Lightbringer from './components/Lightbringer.vue'
import Unbroken from './components/Unbroken.vue'
import Benevolent from './components/Benevolent.vue'
import Evader from './components/Evader.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from './store/index'

export default {
  store,
  name: 'App',
  components: {
    Lightbringer,
    Unbroken,
    Benevolent,
    Evader
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


</style>
