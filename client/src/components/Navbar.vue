<template>
  <nav class="navbar">
    <ul class="nav-list">
      <button v-bind:class="[isOpen ? 'open' : 'closed']" v-on:click="toggleNav">
        <i class="fas fa-chevron-circle-down"></i>
      </button>
      <li>
        <a href>Here</a>
      </li>
      <li>
        <a href>There</a>
      </li>
      <li>
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
  background: white;
  position: fixed;
  top: 3rem;
  right: 3rem;
}

.open {
  color: blue;
  transition: 500ms ease-in;
}

.closed {
  color: red;
  transform: rotate(-180deg);
  transition: 500ms ease-in;
}

.nav-list {
  list-style: none;
  line-height: 2rem;
}
</style>