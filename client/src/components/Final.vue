<template>
  <div class="final-container">
    <div class="final-content">
      <div
        v-bind:class="[inView ? 'first-container-animated' : 'first-container-start', 'first-container']"
      >
        <div class="final-headers">
          <h1>MODEL X</h1>
          <h5>(signature series)</h5>
        </div>
      </div>
      <div class="mid-container">
        <div v-bind:class="[inView ? 'mid-content-animated' : 'mid-content-start', 'mid-content']"></div>
      </div>
      <div v-bind:class="[inView ? 'end-container-animated' : 'end-container-start', 'end-container']">
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

.first-container {
  padding: 0 2rem 0 10rem;
  -webkit-transition: all 1000ms ease-in;
  -moz-transition: all 1000ms ease-in;
  -o-transition: all 1000ms ease-in;
  transition: all 1000ms ease-in;
}

.first-container-start {
  opacity: 0;
}

.first-container-animated {
  opacity: 1;
}

.mid-container {
  width: 80vw;
  height: 87vh;
  position: relative;
}

.mid-content {
  background: url("../assets/jeep.jpg");
  background-size: 1200px;
  height: 700px;
  position: absolute;
  -webkit-transition: all 1000ms ease-in;
  -moz-transition: all 1000ms ease-in;
  -o-transition: all 1000ms ease-in;
  transition: all 1000ms ease-in;
}

.mid-content-start {
  width: 0;
}

.mid-content-animated {
  width: 73vw;
}

.end-container {
  padding: 0 6rem 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  -webkit-transition: all 1000ms ease-in;
  -moz-transition: all 1000ms ease-in;
  -o-transition: all 1000ms ease-in;
  transition: all 1000ms ease-in;
}

.end-container-start {
  transform: translateY(20%);
  opacity: 0;
}

.end-container-animated {
  transform: translateY(0%);
  opacity: 1;
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

@media only screen and (max-width: 760px) {
  .final-container {
    height: 75rem;
  }

  .final-content {
    flex-direction: column;
    align-items: center;
  }

  .final-headers {
    text-align: center;
    margin: 0 0 4rem 0;
  }

  .first-container-start {
    padding: 0;
  }

  .first-container-animated {
    padding: 0;
  }

  .mid-container {
    width: 100vw;
  }

  .mid-content-start {
    width: 0;
  }

  .mid-content-animated {
    width: 100vw;
  }
}
</style>