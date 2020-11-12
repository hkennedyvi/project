<template>
  <div>
    <div class="footer-top"></div>
    <div class="footer-bottom">
      <div class="logo-container">
        <div id="logo">
        <i class="fas fa-car"></i>
        </div>
        <p>BROWSE WELL. DRIVE FAST.</p>
      </div>
      <div class="icon-container">
        <a href>
          <i class="fab fa-twitter"></i>
        </a>
        <a href>
          <i class="fab fa-twitter"></i>
        </a>
        <a href>
          <i class="fab fa-twitter"></i>
        </a>
        <a href>
          <i class="fab fa-twitter"></i>
        </a>
      </div>
      <div>
        <p>
          <i class="far fa-copyright"></i> car company inc.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer-top {
  color: white;
  background: rgb(43, 43, 43);
  height: 10vh;
}

.footer-bottom {
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: flex-end;
  color: white;
  background: rgb(15, 15, 15);
  height: 35vh;
}

.logo-container {
  font-size: 0.8rem;
  text-align: center;
}

#logo {
  font-size: 5rem;
}

.icon-container {
  width: 50vw;
  display: flex;
  justify-content: space-evenly;
  padding: 0 0 1rem 0;
}
</style>