<template>
  <div class="bottom-container">
    BOTTOM
    <div v-bind:class="[inView ? 'test-color' : '', 'box']" v-on:click="test">
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
    test() {
      let position = window.scrollY;
      if (position === 1794) {
        this.inView = !this.inView;
      } else {
      console.log(position);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bottom-container {
  background: white;
  height: 45rem;
}

.box {
  height: 40rem;
  width: 40rem;
  border: solid 1px black;
  margin-left: 30%;
}

.test-color {
  background: red;
}
</style>