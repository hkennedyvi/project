<template>
  <div class="final-container">
    <div class="final-content">
      <div v-bind:class="[inView ? 'start-container-second' : 'start-container-first']">
        <div class="final-headers">
          <h1>MODEL X</h1>
          <h5>(signature series)</h5>
        </div>
      </div>
      <div v-bind:class="[inView ? 'mid-container-second' : 'mid-container-first']">
        <img class="final-image" src="../assets/jeep.jpg" alt />
      </div>
      <div v-bind:class="[inView ? 'end-container-second' : 'end-container-first']">
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
      if (window.scrollY > 2500) {
        this.inView = true;
      } else if (window.scrollY < 2800) {
        this.inView = false;
      }
    },
  },
  mounted: function () {
    console.log("MOUNTED");
    document.addEventListener("scroll", this.animateBox);
  },
  destroyed() {
    console.log("DESTROYED");
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

.start-container-first {
  opacity: 0;
  padding: 0 2rem 0 10rem;
  transition: 1100ms ease-in;
}

.start-container-second {
  opacity: 1;
  padding: 0 2rem 0 10rem;
  transition: 1100ms ease-in;
}

/* .mid-container {
  min-width: 400px;
  padding: 0 2rem;
}

.final-image-first {
  height: 700px;
  width: 0px;
  transition: 500ms ease-in;
}

.final-image-second {
  height: 700px;
  width: 400px;
  transition: 500ms ease-in;
} */
.mid-container-first {
  width: 0px;
  padding: 0 2rem;
  transition: 900ms ease-in;
}

.mid-container-second {
  width: 3000px;
  padding: 0 2rem;
  transition: 900ms ease-in;
}

.final-image {
  height: 700px;
  width: 100%;
}

.end-container-first {
  padding: 0 10rem 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transform: translateY(80%);
  opacity: 0;
  transition: 900ms ease-in;
}

.end-container-second {
  padding: 0 5rem 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transform: translateY(0%);
  opacity: 1;
  transition: 900ms ease-in;
}

.final-number {
  margin: 1rem 0 0 0;
  font-size: 2rem;
}

.final-copy {
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