<template>
  <div class="form-area">
    <div class="form-container">
      <div class="leftside">
        <div>
          <h1>OUR OFFICE</h1>
          <p>Main Street - 1 789 233 4990</p>
          <p>2nd Ave - 1 789 233 4990</p>
        </div>
        <div>
          <h1>JW</h1>
        </div>
      </div>

      <div class="rightside">
        <h1>CONTACT US</h1>
        <form class="contact-form" action>
          <input class="contact-input" type="text" placeholder="FULL NAME" />
          <input class="contact-input" type="text" placeholder="EMAIL" />
          <textarea class="contact-textarea" name id cols="30" rows="6" placeholder="MESSAGE"></textarea>
          <input class="contact-submit" type="submit" v-on:click="submitForm" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  methods: {
    submitForm(e) {
      e.preventDefault();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form-area {
  background: white;
  padding: 5rem 0;
}

.form-container {
  height: 80vh;
  display: flex;
  justify-content: center;
  color: white;
}

.leftside {
  width: 40%;
  background: rgb(20, 20, 20);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.rightside {
  width: 40%;
  background: rgb(20, 20, 20);
  color: white;
  padding: 2rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
}

.contact-input {
  background: transparent;
  font-size: 1rem;
  color: white;
  width: 100%;
  border: none;
  padding: 1rem 0;
  border-bottom: solid white 1px;
}

.contact-input::placeholder,
.contact-textarea::placeholder {
  color: white;
}

.contact-input:focus,
.contact-textarea:focus,
.contact-submit:focus {
  outline: none;
}

.contact-textarea {
  width: 100%;
  font-size: 1.5rem;
  color: white;
  background: transparent;
  border: none;
  padding: 1rem 0;
  border-bottom: solid white 1px;
}

.contact-submit {
  margin: 3.5rem 0 0 0;
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  background: white;
  color: black;
  align-self: flex-start;
  border: solid white 1px;
}

.contact-submit:hover {
  cursor: pointer;
}
</style>