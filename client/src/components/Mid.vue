<template>
  <div class="mid-container">
    <!-- <div class="mid-headers"> -->
    <h1 class="mid-header">DESIGN FOR THE LONG HAUL</h1>
    <h2 class="mid-sub-header">(Our Promise to You)</h2>
    <!-- </div> -->
    <div class="cards-container">
      <div class="card">
        <div class="card-number">
          <h5>01</h5>
        </div>
        <img class="card-image" src="../assets/defender.jpg" />
        <div class="card-text">
          <h5 class="card-sub-header">Safety</h5>
          <p class="card-copy">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla.
          </p>
        </div>
      </div>
      <div class="card">
        <div class="card-number">
          <h5>02</h5>
        </div>
        <img class="card-image" src="../assets/defender.jpg" />
        <div class="card-text">
          <h5 class="card-sub-header">Style</h5>
          <p class="card-copy">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla.
          </p>
        </div>
      </div>
      <div class="card">
        <div class="card-number">
          <h5>03</h5>
        </div>
        <img class="card-image" src="../assets/defender.jpg" />
        <div class="card-text">
          <h5 class="card-sub-header">Speed</h5>
          <p class="card-copy">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Mid",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mid-container {
  background: rgb(226, 226, 226);
  margin: 0;
  padding: 10rem 0;
}

.mid-header {
  text-align: center;
  letter-spacing: 0.2rem;
  font-size: 4rem;
  margin: 0;
  padding: 0;
}

.mid-sub-header {
  text-align: center;
  font-size: 1.8rem;
  font-style: italic;
  margin: 1rem 0 0 0;
  padding: 0;
}

.cards-container {
  display: flex;
  justify-content: space-evenly;
}

.card {
  width: 20rem;
  height: 50rem;
  margin: 1rem;
}

.card-number {
  font-size: 2rem;
}

.card-image {
  max-width: 100%;
  max-height: 100%;
}

.card-text,
.card-number {
  padding: 0 2rem;
}

.card-sub-header {
  font-size: 2rem;
  margin: 2rem 0;
}

.card-copy {
  line-height: 2rem;
}

@media only screen and (max-width: 600px) {
  .mid-container {
    padding: 6rem 0;
  }
  .cards-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .card {
    width: 20rem;
    height: 50rem;
    margin: 1rem 0 3rem 0;
  }

  .mid-header {
    font-size: 2rem;
  }
}
</style>