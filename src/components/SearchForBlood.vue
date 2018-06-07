<template>
  <div id="bg-div">
    <header>
    <img src="../assets/logo.png" alt="Logo">
    <div>
      <button id="logout" v-on:click="userLogin">Login</button>
    </div>
  </header>
  <div id="wrap">
    <div id="center-hold">
      <h1>Innovative Smart Blood Transit System</h1>
      <p>SmartBag Tag is a blockchain powered product that helps patients and healthcare providers discover the safety record of blood</p>
      <form>
        <div id="input-icon">
          <input type="text" placeholder="Enter Smart Bag Number">
          <i class="fas fa-search"></i>
        </div>
          <button id="submit" type="submit">Search</button>
      </form>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  methods: {
    userLogin () {
      this.$router.push('/signin')
    }
  }
}
</script>

<style scoped>
#bg-div {
  background: linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url('../assets/Master.jpg');
  background-size: cover;
  color: #fff;
  padding: 0;
}

header {
  display: flex;
  justify-content: space-between;
  height: 10vh;
  padding: 5vh 3vh 0;
  box-sizing: border-box;
}

#wrap {
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

#center-hold {
  width: 50%;
  text-align: center;
  display: flex;
  flex-direction: column;
}

h1 {
  font-size: 36;
  font-family: 'Lato', sans-serif;
  line-height: 43px;
  margin: .5vh;
}

p {
  font-size: 18px;
  font-family: 'Lato', sans-serif;
  line-height: 28px;
  text-align: center;
  letter-spacing: 3%;
  margin: .5vh auto 40px;
}

form {
  display: flex;
}

#input-icon {
  position: relative;
  display: flex;
  width: 80%;
}

#input-icon i {
  position: absolute;
  color: rgba(0,0,0,0.2);
  font-size: 2em;
  top: 8px;
  left: 10px;
}

input {
  width: 100%;
  padding: 8px;
  font-size: 20px;
  background-color: #FAFAF3;
  font-family: 'Lato', sans-serif;
  font-style: regular;
  line-height: 31px;
  letter-spacing: 3%;
  border-radius: 4px;
  border: 2px solid #aaa;
  padding-left: 50px;
}

input:focus {
  border-color: rgb(30, 143, 255);
}

button#logout, button[type=submit] {
  border-width: 0;
  padding: 8px 50px 10px;
  font-size: 20px;
  font-weight: bold;
  line-height: 32px;
  cursor: pointer;
  border-radius: 4px;
  font-family: 'Lato', sans-serif;
  letter-spacing: 3%;
  background-color: #B70303;
  color: #fff;
  margin-left: 5px;
}

button#logout {
  font-family: 'Lato' sans-serif;
  font-size: 16px;
  line-height: 19px;
  background-color: #B70303;
}

@media screen and (max-width: 1100px) {
  form {
    flex-direction: column;
    align-items: center;
  }
  #input-icon {
    width: 100%;
  }
  #submit {
    margin: 0;
    margin-top: 20px;
    text-align: center;
  }
  h1 {
    margin-bottom: 15px;
  }
  #center-hold {
    width: 90%;
  }
}

@media screen and (max-width: 500px) {
  img {
    width: 140px;
  }
  header {
    padding: 3vh 2vh;
  }
  header > div {
    width: 100px;
    display: flex;
    justify-content: center;
  }
  button#logout {
    background-color: rgba(183, 3, 3, 0);
    padding: 0;
  }
}
</style>
