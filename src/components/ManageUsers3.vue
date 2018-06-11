<template>
<div>
  <sb-header></sb-header>
  <main>
    <div>
      <form>
        <div class="top-section">
          <h3>Company Information</h3>
          <div id="comp-info">
            <div>
              <label>Name</label>
              <input type="text">
              <label>Email Address</label>
              <input type="email">
            </div>
            <div>
              <label>Contact Name</label>
              <input type="text">
              <label>Phone Number</label>
              <input type="number" min="1">
            </div>
          </div>
          <label>Upload Accredited Certificate</label>
          <button><i class="fas fa-camera"></i>Upload Picture</button>
        </div>
        <div class="bottom-section">
          <h3>Blood Code</h3>
          <div id="blood-code">
            <div>
            <label>User ID</label>
            <input type="number" min="1">
            <label>Blood Code</label>
            <input type="number" min="1">
          </div>
          <div>
            <label>User Access</label>
            <select name="user" id="category">
              <option value="">Blood Bank</option>
            </select>
          </div>
          </div>
        </div>
      </form>
    </div>
    <button id="create-user">Create User</button>
  </main>
</div>
</template>

<style scoped>
  main {
    width: 100%;
    padding: 30px 5%;
    font-family: 'Lato', sans-serif;
    font-weight: bold;
    font-size: 16px;
    line-height: 44px;
    background-color: #B70303;
    color: #fff;
    box-sizing: border-box
  }

  h3 {
    color: #B70303;
    font-family: 'Lato', sans-serif;
  }

  .top-section, .bottom-section {
    box-sizing: border-box;
    background-color: #FAFAFA;
    color: #000;
    padding: 20px 20px;
    margin: 50px auto 5vh;
    box-sizing: border-box;
    border-radius: 4px;
  }

  label {
    display: block;
    margin-bottom: -5px;
    color: #4f4f4f;
  }

  input {
  width: 96%;
  font-size: 18px;
  background-color: #FAFAF3;
  font-family: 'Lato', sans-serif;
  font-style: regular;
  line-height: 31px;
  letter-spacing: 3%;
  border-radius: 4px;
  border: 2px solid #aaa;
  padding-left: 5px;
}

input:focus {
  border-color: rgb(30, 143, 255);
}

button {
  padding: 10px 15px;
  background-color: #4f4f4f;
  color: #fff;
  border: 0px;
  border-radius: 4px;
  outline: 0;
}

i {
  padding-right: 10px;
}

select {
  width: 98%;
  font-size: 18px;
  background-color: #FAFAF3;
  font-family: 'Lato', sans-serif;
  font-style: regular;
  line-height: 31px;
  border-radius: 4px;
  border: 2px solid #aaa;
}

#create-user {
    font-family: 'Lato', sans-serif;
    border-width: 0;
    padding: 10px 20px;
    background-color: #fff;
    font-size: 15px;
    border-radius: 4px;
    font-weight: bold;
    color: #4f4f4f;
  }

  @media screen and (min-width: 750px) {
    #comp-info, #blood-code {
      display: flex;
      justify-content: space-between;
      padding-right: 20px;
      box-sizing: border-box;
    }
    input, select {
      width: 300px;
    }
  }
</style>
