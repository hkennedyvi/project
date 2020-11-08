<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Navbar />
    <Main />
    <Mid />
    <Bottom />
    <Final />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Main from './components/Main.vue';
import Mid from './components/Mid.vue';
import Bottom from './components/Bottom.vue';
import Final from './components/Final.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Main,
    Mid,
    Bottom,
    Final,
    Footer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Arapey&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

#app {
  background: red;
  font-family: 'Arapey', serif;
}

body {
  margin: 0;
}

h1, h5 {
  font-family: 'Montserrat', sans-serif;
}

</style>
