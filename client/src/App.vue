<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Navbar />
    <Test />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Test from './components/Test.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Test
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
