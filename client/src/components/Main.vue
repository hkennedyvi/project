<template>
  <div class="main-container">
    <div class="leftside"></div>
    <div class="float-box">
      <div class="pic-box">
        <img class="main-image" src="../assets/defender.jpg" />
      </div>
      <!-- <div> -->
      <div class="gallery-controls">
        <button>
          <i class="fas fa-arrow-left"></i>
        </button>
        <button>
          <i class="fas fa-arrow-right"></i>
        </button>
      </div>
      <h1 class="header">we're glad you're here.</h1>
    </div>
    <!-- </div> -->
    <div class="rightside"></div>
  </div>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      image: "../assets/defender.jpg",
    };
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