<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Navbar />
    <Main />
    <Mid />
    <Bottom />
    <Final />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Main from "./components/Main.vue";
import Mid from "./components/Mid.vue";
import Bottom from "./components/Bottom.vue";
import Final from "./components/Final.vue";
import Footer from "./components/Footer.vue";
import Contact from "./components/Contact.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Main,
    Mid,
    Bottom,
    Final,
    Contact,
    Footer,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Arapey&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

#app {
  font-family: "Arapey", serif;
}

body {
  margin: 0;
  overflow-x: hidden;
}

h1,
h5 {
  font-family: "Montserrat", sans-serif;
}

a {
  text-decoration: none;
}

a:visited {
  color: inherit;
}
</style>
