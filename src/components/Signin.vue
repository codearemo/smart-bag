<template>
  <div id="wrap">
    <div id="center-hold">
      <div id="logo">
        <img src="../assets/logo.png" alt="logo">
      </div>
      <h1>Welcome</h1>
      <p>Type the Smart Tag Number to Create New Blood Information</p>
      <form>
        <input type="text" placeholder="Enter Smart Tag Number">
        <select name="" id="category">
          <option value="">Access Level</option>
        </select>
        <button type="submit">Sign In</button>
        <hr class="hr-text" data-content="OR">
        <button id="scan-button">Scan QR Code</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  methods: {}
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}

#wrap {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #B70303 !Important;
}

#center-hold {
  width: 30%;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  padding: 40px 50px;
  box-sizing: border-box;
  text-align: center;
  justify-content: center;
  border-radius: 3px;
}

#logo {
  margin-bottom: 20px;
}

h1 {
  font-family: 'Lato', sans-serif;
  margin-bottom: 10px;
  font-style: bold;
  font-size: 48px;
}

p {
  font-family: 'Lato', sans-serif;
  color: #828282;
  line-height: 22px;
}

form {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
}

form > * {
  margin: 10px auto;
  width: 100%;
  padding: 10px 0;
  font-family: 'Lato', sans-serif;
}

input[type=text], select {
  font-size: 20px;
  background-color: #FAFAF3;
  font-family: 'Lato', sans-serif;
  font-style: regular;
  line-height: 31px;
  border-radius: 4px;
  border: 2px solid #aaa;
  padding-left: 5px;
  box-sizing: border-box;
}

input:focus, select:focus {
  border-color: rgb(30, 143, 255);
}

button[type=submit] {
  background-color: #B70303;
  color: #fff;
  border-width: 0;
  border-radius: 4px;
  font-size: 18px;
  line-height: 24px;
  cursor: pointer;
  margin: 30px auto 30px;
}

#scan-button {
  background-color: #BDBDBD;
  color: #fff;
  border-width: 0;
  border-radius: 4px;
  font-size: 18px;
  line-height: 24px;
  cursor: pointer;
}

/* For the line splited by text */

.container {
  max-width: 50%;
  margin: 40px auto;
}

.hr-text {
  line-height: 1em;
  position: relative;
  outline: 0;
  border: 0;
  color: black;
  text-align: center;
  height: 1.5em;
  opacity: 0.5;
}
.hr-text:before {
  content: "";
  background: linear-gradient(to right, transparent, #444442, transparent);
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  height: 1px;
}
.hr-text:after {
  content: attr(data-content);
  position: relative;
  display: inline-block;
  color: black;
  padding: 0 0.5em;
  line-height: 1.5em;
  color: #20201f;
  background-color: #fcfcfa;
}

@media screen and (max-width: 1100px) {
  #center-hold {
    width: 80%;
    padding: 10px 20px;
  }
}

</style>
