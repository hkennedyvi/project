<template>
  <div class="main-container">
    <div class="left">1</div>
    <div class="float-box">
      <div class="pic-box">

      </div>
      <h1 class="header">we're glad you're here.</h1>
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
export default {
  name: "Test",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-container {
  margin: 0;
  padding: 0;
  display: flex;
  height: 100vh;
  /* background: lightslategrey; */
}

.left {
  background: white;
  flex: 1;
  position: relative;
}

.float-box {
  height: 60%;
  width: 70%;
  border: solid 1px black;
  position: absolute;
  left: 20%;
  top: 20%;
  display: flex;
}

.pic-box {
  border: solid 1px black;
  width: 50%;
}

.header {
  align-self: flex-end;
  margin: 0 0 0 auto;
}

.right {
  background: orange;
  flex: 2;
}
</style>