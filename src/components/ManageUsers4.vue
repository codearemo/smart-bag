<template>
<div>
  <sb-header></sb-header>
  <main>
    <div>
      <span style="cursor: pointer"><i class="fas fa-edit"></i>Edit</span>
      <span style="cursor: pointer"><i class="fas fa-trash-alt"></i>Delete</span>
    </div>
    <form>
      <div class="top-section">
        <h3>Company Information</h3>
        <div id="comp-info">
          <div>
            <label>Name</label>
            <p class="contact-detail">Ayobami</p>
            <label>Email Address</label>
            <p class="contact-detail">ayobami@hotels.ng</p>
          </div>
          <div>
            <label>Contact Name</label>
            <p class="contact-detail">Adelugba</p>
            <label>Phone Number</label>
            <p class="contact-detail">08101234567</p>
          </div>
        </div>
        <label>Accredited Certificate</label>
        <span>QMed Cert.</span><span style="color:#27AE60; cursor: pointer;">Download</span>
      </div>
      <div class="bottom-section">
        <h3>Blood Code</h3>
        <div id="blood-code">
          <div>
          <label>User ID</label>
          <p>001</p>
          <label>Blood Code</label>
          <p>1234567</p>
        </div>
        <div>
          <label>User Access</label>
          <p>Blood Bank</p>
        </div>
        </div>
      </div>
    </form>
  </main>
</div>
</template>

<style scoped>
  main {
    width: 100%;
    padding: 30px 5%;
    font-family: 'Lato', sans-serif;
    line-height: 35px;
    background-color: #B70303;
    color: #fff;
    box-sizing: border-box
  }

  main > div {
    text-align: right;
  }

  h3 {
    color: #B70303;
    font-family: 'Lato', sans-serif;
  }

  .top-section, .bottom-section {
    box-sizing: border-box;
    background-color: #FAFAFA;
    color: #000;
    padding: 20px 40px;
    margin: 50px auto 5vh;
    box-sizing: border-box;
    border-radius: 4px;
  }

  label {
    display: block;
    color: #4f4f4f;
    font-weight: bold;
    font-size: 16px;
  }

  p {
    color: #828282;
    margin-bottom: 15px;
  }

  span {
    padding: 10px;
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
