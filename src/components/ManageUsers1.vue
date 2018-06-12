<template>
  <div>
    <sb-header></sb-header>
    <main>
      <div id="sb-btn-hold">
        <h3>Manage Users</h3>
        <button>Add User +</button>
      </div>
      <div class="bottom-info">
        <div>
          <p>QMed Diagnostic Centre</p>
          <p>Bosun Tewe</p>
          <p>bosun@qmed.ng</p>
          <p>Blood Bank</p>
          <p class="user_links" style="color: #27AE60">Edit User</p>
          <p class="user_links" style="color: #F2994A">Remove User</p>
        </div>
        <div>
          <p>QMed Diagnostic Centre</p>
          <p>Bosun Tewe</p>
          <p>bosun@qmed.ng</p>
          <p>Blood Bank</p>
          <p class="user_links" style="color: #27AE60">Edit User</p>
          <p class="user_links" style="color: #F2994A">Remove User</p>
        </div>
        <div>
          <p>QMed Diagnostic Centre</p>
          <p>Bosun Tewe</p>
          <p>bosun@qmed.ng</p>
          <p>Blood Bank</p>
          <p class="user_links" style="color: #27AE60">Edit User</p>
          <p class="user_links" style="color: #F2994A">Remove User</p>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
  main {
    width: 100%;
    padding: 50px 80px;
    font-family: 'Lato', sans-serif;
    font-size: 16px;
    line-height: 44px;
    background-color: #B70303;
    color: #fff;
    box-sizing: border-box;
    min-height: 82vh;
  }

  #sb-btn-hold {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
  }

  #sb-btn-hold button {
    font-family: 'Lato', sans-serif;
    border: 1px solid #fff;
    padding: 10px 20px;
    background-color: rgba(0,0,0,0);
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    border-radius: 15px;
  }

  main > .bottom-info {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background-color: #FAFAFA;
    color: #000;
    border-radius: 4px;
  }

  .bottom-info > div {
    display: flex;
    justify-content: space-between;
    font-family: 'Lato', sans-serif;
    padding: 30px;
  }

  .user_links {
    text-decoration: underline;
    cursor: pointer;
  }

  @media screen and (max-width: 500px){
    .bottom-info > div {
      flex-direction: column;
    }
  }
</style>
