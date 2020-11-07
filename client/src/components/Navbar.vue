<template>
  <nav v-bind:class="[isOpen ? 'navbar-open' : 'navbar-close', 'navbar']">
    <button
      v-bind:class="[isOpen ? 'button-open' : 'button-close', 'button']"
      v-on:click="toggleNav"
    >
      <i class="fas fa-chevron-circle-down"></i>
    </button>
    <ul class="nav-list">
      <li v-bind:class="[isOpen ? 'nav-item-open' : 'nav-item-close', 'nav-item']">
        <a href>Here</a>
      </li>
      <li v-bind:class="[isOpen ? 'nav-item-open' : 'nav-item-close', 'nav-item']">
        <a href>There</a>
      </li>
      <li v-bind:class="[isOpen ? 'nav-item-open' : 'nav-item-close', 'nav-item']">
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
      isOpen: false,
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
  position: fixed;
  padding: 1rem;
  width: 15vw;
  top: 3rem;
  right: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 1em;
  z-index: 1;
}

.navbar-open {
  background: rgb(59, 59, 59);
  transition: 500ms ease-in;
}

.navbar-close {
  background: transparent;
  transition: 500ms ease-in;
}

.button {
  background: transparent;
  border: none;
  font-size: 2rem;
}

.button:hover {
  cursor: pointer;
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
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-list a {
  text-decoration: none;
}

.nav-list a:visited {
  color: inherit;
}

.nav-item {
  font-size: 1.5rem;
}

.nav-item:hover {
  background: black;
  cursor: pointer;
}

.nav-item-open {
  transition: 500ms ease-in;
  line-height: 2rem;
  color: white;
}

.nav-item-close {
  visibility: hidden;
  line-height: 15rem;
  transition: 500ms ease-in;
}
</style>