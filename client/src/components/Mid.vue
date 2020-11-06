<template>
  <div class="mid-container">
    <div class="mid-header">
      <h1>MID PAGE</h1>
    </div>
    <div class="cards-container">
      <div class="card">
        <div class="card-number">01</div>
        <img class="card-image" src="../assets/defender.jpg" />
        <div class="card-text">
          <h2 class="card-sub-header">Stylish</h2>
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
        <div class="card-number">02</div>
        <img class="card-image" src="../assets/defender.jpg" />
        <div class="card-text">
          <h2 class="card-sub-header">Stylish</h2>
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
        <div class="card-number">03</div>
        <img class="card-image" src="../assets/defender.jpg" />
        <div class="card-text">
          <h2 class="card-sub-header">Stylish</h2>
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
  padding: 5rem 0;
}

.mid-header {
  text-align: center;
  margin: 0;
  padding: 0;
}

.cards-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.card {
  /* border: black solid 1px; */
  width: 20rem;
  height: 50rem;
  margin: 1rem;
}


.card-image {
  max-width: 100%;
  max-height: 100%;
}

.card-text, .card-number {
    padding: 0 2rem;
}

.card-sub-header {
    font-size: 2rem;
}

.card-copy {
  line-height: 2rem;
}
</style>