<template>
  <div class="bottom-container">
    <div class="box-container">
      <div v-bind:class="[inView ? 'image-box-animated' : 'image-box-start', 'image-box']">
        <h1 class="box-image-header">JEFF WERCINZCKI</h1>
        <h5 class="box-image-sub-header">(FOUNDER & CEO)</h5>
        <img class="box-image" src="../assets/founder.jpg" alt />
      </div>
      <div v-bind:class="[inView ? 'copy-box-animated' : 'copy-box-start', 'copy-box']">
        <h5 class="box-copy-header">It starts with an idea...</h5>
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
      let position = window.scrollY;
      let width = window.screen.width;
      if (width > 600 && position > 1400) {
        this.inView = true;
      } else if (width > 600 && position < 1400) {
        this.inView = false;
      } else if (width < 600 && position > 3200) {
        console.log("animate");
        this.inView = true;
      } else if (width < 600 && position < 3200) {
        this.inView = false;
        console.log("unanimate");
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
.bottom-container {
  background: rgb(32, 32, 32);
  color: white;
  height: 100vh;
}

.box-container {
  padding: 5rem 0 0 0;
  display: flex;
  justify-content: space-between;
}

.box-image-header {
  font-size: 2rem;
  margin: 0 0 0.5rem 0;
}

.box-image-sub-header {
  font-size: 1rem;
  margin: 0 0 1rem 0;
}

.box-image {
  max-width: 100%;
  max-height: 100%;
}

.box-copy-header {
  font-size: 1.8rem;
  padding: 0 2rem;
  margin: 0;
}

.box-copy {
  line-height: 2rem;
  padding: 0 2rem;
}

.image-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40rem;
  width: 40rem;
  transition: 900ms ease-in;
}

.image-box-start {
  margin-left: 0;
  visibility: hidden;
  opacity: 0;
}

.image-box-animated {
  margin-left: 5%;
  visibility: visible;
  opacity: 1;
}

.copy-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 40rem;
  width: 40rem;
  transition: 900ms ease-in;
}

.copy-box-start {
  margin-right: 0;
  visibility: hidden;
  opacity: 0;
}

.copy-box-animated {
  margin-right: 5%;
  visibility: visible;
  opacity: 1;
}

@media only screen and (max-width: 600px) {
  .bottom-container {
    background: rgb(32, 32, 32);
    color: white;
    height: 160vh;
    width: 100vw;
  }
  .box-container {
    flex-direction: column;
    align-items: center;
  }
  .image-box {
    height: 20rem;
    width: 22rem;
  }
  .image-box-start {
    margin-left: 20%;
  }
  .image-box-animated {
    margin-left: 0%;
  }
  .copy-box {
    align-items: center;
    height: 100vh;
    width: 100vw;
  }
  .copy-box-start {
    margin-right: 20%;
  }
  .copy-box-animated {
    margin-right: 0%;
  }
  .box-copy {
    text-align: center;
  }
}
</style>