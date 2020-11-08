<template>
  <div class="bottom-container">
    BOTTOM
    <div class="box-container">
      <div v-bind:class="[inView ? 'box-second' : 'box-first']">
        <h1>OUR FOUNDER</h1>
        <img class="box-image" src="../assets/founder.jpg" alt="">
      </div>
      <div v-bind:class="[inView ? 'box-fourth' : 'box-third']">
        <p class="box-copy">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
          anim id est laborum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
          anim id est laborum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
          anim id est laborum.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Bottom",
  data: () => {
    return {
      inView: false,
    };
  },
  methods: {
    animateBox() {
      if (window.scrollY > 1400) {
        this.inView = true;

      } else if (window.scrollY < 1400) {
        this.inView = false;
      }
      
    },
  },
  mounted: function () {
    console.log("MOUNTED");
    document.addEventListener('scroll', this.animateBox);
  },
  destroyed() {
    console.log("DESTROYED");
    document.removeEventListener('scroll', this.animateBox);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bottom-container {
  background: rgb(32, 32, 32);
  color: white;
  height: 45rem;
}

.box-container {
  display: flex;
  justify-content: space-between;
}

.box-image {
  max-width: 100%;
  max-height: 100%;
}

.box-copy {
  line-height: 2rem;
  padding: 2rem;
}

.box-first {
  height: 40rem;
  width: 40rem;
  /* border: solid 1px white; */
  margin-left: 0;
  visibility: hidden;
  opacity: 0;
  transition: 900ms ease-in;
}

.box-second {
  height: 40rem;
  width: 40rem;
  /* border: solid 1px white; */
  margin-left: 5%;
  visibility: visible;
  opacity: 1;
  transition: 900ms ease-in;
}

.box-third {
  height: 40rem;
  width: 40rem;
  /* border: solid 1px white; */
  margin-right: 0;
  visibility: hidden;
  opacity: 0;
  transition: 900ms ease-in;
}

.box-fourth {
  height: 40rem;
  width: 40rem;
  /* border: solid 1px white; */
  margin-right: 5%;
  visibility: visible;
  opacity: 1;
  transition: 900ms ease-in;
}

.test-color {
  background: red;
}
</style>