<template>
  <div class="main-container">
    <div class="leftside"></div>
    <div class="float-box">
      <div class="pic-box">
        <div class="slides fade">
          <div class="slide-number">1 / 3</div>
          <div class="slide-text">W3 Series</div>
          <img class="main-image" src="../assets/defender.jpg" />
        </div>

        <div class="slides fade">
          <div class="slide-number">2 / 3</div>
          <div class="slide-text">Model X</div>
          <img class="main-image" src="../assets/defender.jpg" />
        </div>

        <div class="slides fade">
          <div class="slide-number">3 / 3</div>
          <div class="slide-text">Masterclass V.2</div>
          <img class="main-image" src="../assets/defender.jpg" />
        </div>
      </div>
      <div class="gallery-controls">
        <button v-on:click="navSlides(-1)">
          <i class="fas fa-arrow-left"></i>
        </button>
        <button v-on:click="navSlides(1)">
          <i class="fas fa-arrow-right"></i>
        </button>
      </div>
      <h1 class="header">we're glad you're here.</h1>
    </div>
    <div class="rightside"></div>
  </div>
</template>

<script>
export default {
  name: "MainTest",
  data() {
    return {
      image: "../assets/defender.jpg",
      slideIndex: 1,
    };
  },
  methods: {
    navSlides(n) {
      this.showSlides((this.slideIndex += n));
    },
    showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("slides");

      if (n > slides.length) {
        this.slideIndex = 1;
      }
      if (n < 1) {
        this.slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }

      slides[this.slideIndex - 1].style.display = "block";
    },
  },
  mounted: function () {
    this.showSlides();
  },
  destroyed() {
    this.showSlides();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-container {
  margin: 0;
  padding: 0;
  display: flex;
  height: 100vh;
}

.slides {
  display: none;
}

.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

.slide-number {
  padding: 0.5rem;
  position: absolute;
  color: white;
}

.slide-text {
  padding: 0.5rem;
  position: absolute;
  bottom: 0;
  color: white;
}

@-webkit-keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}

.leftside {
  background: white;
  flex: 1;
  position: relative;
}

.float-box {
  height: 60%;
  width: 70%;
  position: absolute;
  left: 20%;
  top: 20%;
  display: flex;
}

.pic-box {
  width: 50%;
}

.main-image {
  max-width: 100%;
  max-height: 100%;
}

.gallery-controls {
  width: 10%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.gallery-controls button {
  border: none;
  background: none;
  font-size: 3rem;
}

.gallery-controls button:hover {
  color: white;
  cursor: pointer;
}

.gallery-controls button:focus {
  outline: none;
}

.header {
  align-self: flex-end;
  margin: 0 0 0 auto;
}

.rightside {
  background: rgb(105, 105, 105);
  flex: 2;
}

@media only screen and (max-width: 600px) {
  .main-container {
    flex-direction: column-reverse;
  }

  .leftside {
    background: rgb(145, 145, 145);
  }

  .float-box {
    flex-direction: column;
  }

  .pic-box {
    width: 80%;
  }

  .gallery-controls {
    width: 80%;
  }

  .header {
    margin: 8rem 0 0 0;
  }
}
</style>