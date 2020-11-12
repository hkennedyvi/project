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
        <a href>home</a>
      </li>
      <li v-bind:class="[isOpen ? 'nav-item-open' : 'nav-item-close', 'nav-item']">
        <a href>about</a>
      </li>
      <li v-bind:class="[isOpen ? 'nav-item-open' : 'nav-item-close', 'nav-item']">
        <a href>contact</a>
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
    switchColor() {
      let position = window.scrollY;
      let els = document.getElementsByClassName("nav-item");
      if (position > 500 && position < 1850) {
        els.forEach((el) => el.classList.add("test"));
      } else if (position > 1850 || (position > 0 && position < 500)) {
        els.forEach((el) => el.classList.remove("test"));
      }
    },
  },
  mounted: function () {
    document.addEventListener("scroll", this.switchColor);
  },
  destroyed() {
    document.removeEventListener("scroll", this.switchColor);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  position: fixed;
  padding: 1rem;
  width: 10vw;
  top: 3rem;
  right: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
  font-family: "Montserrat", sans-serif;
  color: white;
  background: rgba(0, 0, 0, 0.1);
}

.navbar-close {
  background: none;
  transition: 500ms ease-in;
}

.test {
  color: black !important;
  border-bottom: solid 3px black !important;
}

.test:hover {
  background: white !important;
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
  color: white;
  transition: 500ms ease-in;
}

.button-close {
  color: black;
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

.nav-item {
  font-size: 1rem;
  border-bottom: solid 2px;
}

.nav-item:hover {
  background: black;
  cursor: pointer;
}

.nav-item-open {
  transition: 500ms ease-in;
  line-height: 2rem;
}

.nav-item-close {
  visibility: hidden;
  line-height: 15rem;
  transition: 500ms ease-in;
}

@media only screen and (max-width: 760px) {
  .navbar {
    width: 15vw;
    top: 1rem;
    right: 1rem;
  }
}
</style>