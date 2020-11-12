<template>
  <div class="final-container">
    <div class="final-content">
      <div v-bind:class="[inView ? 'first-container-animated' : 'first-container-start']">
        <div class="final-headers">
          <h1>MODEL X</h1>
          <h5>(signature series)</h5>
        </div>
      </div>
      <div class="mid-container">
        <div v-bind:class="[inView ? 'mid-content-animated' : 'mid-content-start']"></div>
      </div>
      <div v-bind:class="[inView ? 'end-container-animated' : 'end-container-start']">
        <h5 class="final-number">01</h5>
        <p class="final-copy">
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
  name: "Final",
  data: () => {
    return {
      inView: false,
    };
  },
  methods: {
    animateBox() {
      if (window.scrollY > 2600) {
        this.inView = true;
      } else if (window.scrollY < 2800) {
        this.inView = false;
      }
    },
  },
  mounted: function () {
    document.addEventListener("scroll", this.animateBox);
  },
  destroyed() {
    document.removeEventListener("scroll", this.animateBox);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.final-container {
  background: rgb(136, 136, 136);
  color: white;
  height: 45rem;
  padding: 2rem 0;
}

.final-content {
  display: flex;
}

.first-container-start {
  opacity: 0;
  padding: 0 2rem 0 10rem;
  -webkit-transition: all 2000ms ease-in;
  -moz-transition: all 2000ms ease-in;
  -o-transition: all 2000ms ease-in;
  transition: all 2000ms ease-in;
}

.first-container-animated {
  opacity: 1;
  padding: 0 2rem 0 10rem;
  -webkit-transition: all 2000ms ease-in;
  -moz-transition: all 2000ms ease-in;
  -o-transition: all 2000ms ease-in;
  transition: all 2000ms ease-in;
}

.mid-container {
  width: 1200px;
  height: 700px;
  position: relative;
}

.mid-content-start {
  background: url("../assets/jeep.jpg");
  background-size: 1200px;
  width: 0px;
  height: 700px;
  position: absolute;
  -webkit-transition: all 2000ms ease-in;
  -moz-transition: all 2000ms ease-in;
  -o-transition: all 2000ms ease-in;
  transition: all 2000ms ease-in;
}

.mid-content-animated {
  background: url("../assets/jeep.jpg");
  background-size: 1200px;
  width: 1025px;
  height: 700px;
  position: absolute;
  -webkit-transition: all 2000ms ease-in;
  -moz-transition: all 2000ms ease-in;
  -o-transition: all 2000ms ease-in;
  transition: all 2000ms ease-in;
}

.end-container-start {
  padding: 0 10rem 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transform: translateY(80%);
  opacity: 0;
  -webkit-transition: all 2000ms ease-in;
  -moz-transition: all 2000ms ease-in;
  -o-transition: all 2000ms ease-in;
  transition: all 2000ms ease-in;
}

.end-container-animated {
  padding: 0 5rem 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transform: translateY(0%);
  opacity: 1;
  -webkit-transition: all 2000ms ease-in;
  -moz-transition: all 2000ms ease-in;
  -o-transition: all 2000ms ease-in;
  transition: all 2000ms ease-in;
}

.final-number {
  margin: 1rem 0 0 0;
  font-size: 2rem;
}

.final-copy {
  color: black;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.8);
  line-height: 1.5rem;
}

@media only screen and (max-width: 600px) {
  .final-content {
    flex-direction: column;
  }

  .final-headers {
    text-align: center;
    margin: 0 0 4rem 0;
  }

  .mid-container-second {
    width: 100vw;
  }

  .final-image {
    height: 200px;
    width: 50%;
  }
}
</style>