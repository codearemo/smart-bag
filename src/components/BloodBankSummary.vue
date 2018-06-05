<template>
  <div>
    <sb-header></sb-header>
    <main>
      <h3>You are viewing the details of blood code 123456</h3>
      <div id="sb-btn-hold">
        <button>Change Details</button>
      </div>
      <div id="bb-details">
        <h4>Blood Bank Details</h4>
        <p class="bb-atr">Date of Donation</p>
        <p class="bb-val">12, June 2018</p>
        <p class="bb-atr">Donor Code</p>
        <p class="bb-val">123456712</p>
        <p class="bb-atr">Unique Blood Bank Code</p>
        <p class="bb-val">123456712</p>
      </div>
    </main>
  </div>
</template>

<style scoped>
  main {
    width: 100%;
    padding: 50px 150px;
    font-family: 'Lato', sans-serif;
    font-weight: bold;
    font-size: 16px;
    line-height: 44px;
    background-color: #B70303;
    color: #fff;
    box-sizing: border-box
  }

  #sb-btn-hold {
    display: flex;
    justify-content: flex-end;
  }

  #sb-btn-hold button {
    font-family: 'Lato', sans-serif;
    border-width: 0;
    padding: 10px 20px;
    background-color: #FFA6A6;
    font-size: 14px;
    border-radius: 4px;
    font-weight: bold;
  }

  #bb-details {
    color: #B70303;
    background-color: #fafafa;
    margin: 50px auto 30vh;
    padding: 20px 30px;
    box-sizing: border-box;
  }

  .bb-atr {
    color: #333;
  }

  .bb-val {
    color: #828282;
    font-weight: 100;
  }
</style>
