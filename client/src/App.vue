<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Navbar />
    <Main />
    <Mid />
    <Bottom />
    <Test />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Main from './components/Main.vue';
import Mid from './components/Mid.vue';
import Bottom from './components/Bottom.vue';
import Test from './components/Test.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Main,
    Mid,
    Bottom,
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
