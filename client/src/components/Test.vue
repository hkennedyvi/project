<template>
  <div>
    <div v-for="user in users" v-bind:key="user.id">
        <h1>{{user}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      users: ["jack", "jill", "bill"],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>