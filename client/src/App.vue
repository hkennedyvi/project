<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Navbar />
    <Main />
    <Mid />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Main from './components/Main.vue';
import Mid from './components/Mid.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Main,
    Mid
  }
}
</script>

<style>
#app {
  background: red;
}

body {
  margin: 0;
}

</style>
