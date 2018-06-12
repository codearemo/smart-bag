<template>
  <header>
    <div id="top-header">
      <div id="img-div">
        <img src="../assets/logo.png" alt="Logo">
      </div>
      <div id="search-div">
        <div>
          <input type="text" placeholder="Type to search...">
          <i class="fas fa-search"></i>
        </div>
      </div>
      <div id="logout-div">
        <div>
          <button>Log out</button>
        </div>
      </div>
    </div>
    <div id="bottom-header">
      <h2>Hi, Welcome to SmartBag</h2>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style scoped>
header {
  height: 18vh;
}

#top-header {
  display: flex;
  background-color: #fff;
  padding-top: 10px;
}

#top-header > * {
  width: 100%;
  height: 7vh;
}

#img-div {
  flex: 2;
  padding-left: 15px;
}

#search-div {
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
}

#search-div div {
  width: 80%;
  height: 4vh;
  display: flex;
  position: relative;
}

#search-div i {
  position: absolute;
  color: rgba(0,0,0,0.2);
  font-size: 1em;
  top: 8px;
  left: 10px;
}

#search-div input {
  width: 100%;
  font-size: 15px;
  background-color: #FAFAF3;
  font-family: 'Lato', sans-serif;
  line-height: 31px;
  border-radius: 4px;
  outline: #aaa;
  padding-left: 35px;
  box-sizing: border-box;
  border-width: 0;
  outline: #aaa;
}

::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  opacity: .5;
  font-family: 'Lato', sans-serif;
}
::-moz-placeholder { /* Firefox 19+ */
  opacity: .5;
  font-family: 'Lato', sans-serif;
}
:-ms-input-placeholder { /* IE 10+ */
  opacity: .5;
  font-family: 'Lato', sans-serif;
}
:-moz-placeholder { /* Firefox 18- */
  opacity: .5;
  font-family: 'Lato', sans-serif;
}

#logout-div {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

#logout-div button{
  padding: 10px 30px;
  border: 0.59px solid #aaa;
  font-family: 'Lato', sans-serif;
  font-weight: bold;
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;
}

#bottom-header {
  padding: 30px 50px;
  box-sizing: border-box;
  background-color: #FAFAFA;
  height: 11vh;
}

h2 {
    font-family: 'Lato', sans-serif;
  }

@media screen and (max-width: 1000px) {
  #img-div {
    flex: 1;
    padding-top: 15px;
    box-sizing: border-box;
  }
  #img-div img {
    width: 100px;
  }
  #search-div{
    flex: 2;
  }
  #logout-div {
    flex: 1;
  }
  #logout-div button {
    padding: 0;
    font-size: 16px;
    border-width: 0;
  }
}
</style>
