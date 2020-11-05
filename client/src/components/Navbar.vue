<template>
  <nav class="navbar">
    <ul class="nav-list">
      <button v-bind:class="[isOpen ? 'button-open' : 'button-close', 'button']" v-on:click="toggleNav">
        <i class="fas fa-chevron-circle-down"></i>
      </button>
      <li v-bind:class="[isOpen ? 'nav-item-open' : 'nav-item-close']">
        <a href>Here</a>
      </li>
      <li v-bind:class="[isOpen ? 'nav-item-open' : 'nav-item-close']">
        <a href>There</a>
      </li>
      <li v-bind:class="[isOpen ? 'nav-item-open' : 'nav-item-close']">
        <a href>Anywhere</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data: () => {
    return {
      isOpen: true,
    };
  },
  methods: {
    toggleNav() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  background: transparent;
  position: fixed;
  top: 3rem;
  right: 3rem;
}

.button {
   background: transparent;
   border: none;
}

.button:focus {
    outline: none;
}

.button-open {
  color: blue;
  transition: 500ms ease-in;
}

.button-close {
  color: red;
  transform: rotate(-180deg);
  transition: 500ms ease-in;
}

.nav-list {
  list-style: none;
  /* line-height: 1.5rem; */
}

.nav-list a {
    text-decoration: none;
}

.nav-list a:visited {
    color: inherit;
}

.nav-item-open {
    transition: 500ms ease-in;
    line-height: 1.5rem;
    color: white;

}

.nav-item-close {
    visibility: hidden;
    line-height: 15rem;
    transition: 500ms ease-in;
}

</style>