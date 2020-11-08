<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Navbar />
    <Main />
    <Mid />
    <Bottom />
    <Final />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Main from './components/Main.vue';
import Mid from './components/Mid.vue';
import Bottom from './components/Bottom.vue';
import Final from './components/Final.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Main,
    Mid,
    Bottom,
    Final
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Arapey&display=swap');

#app {
  background: red;
  font-family: 'Arapey', serif;
}

body {
  margin: 0;
}

</style>
