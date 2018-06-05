<template>
  <div>
    <sb-header></sb-header>
    <main>
      <h3>You are viewing the details of blood code 123456</h3>
      <div id="sb-btn-hold">
        <button>Change Details</button>
      </div>
      <div id="bottom-info">

        <p id="test-header">Screening Centre Details</p>
        <div>
          <div id="test-result">
            <div>
              <p class="test-done">Blood Type</p>
              <div>
                <span class="screen-info">A+</span>
              </div>
            </div>
            <div>
              <p class="test-done">Screening Center Code</p>
              <div>
                <span class="screen-info">123456</span>
              </div>
            </div>
            <div>
              <p class="test-done">PVC</p>
              <div>
                <span class="screen-info">10</span>
              </div>
            </div>
            <div>
              <p class="test-done">Screener's Name</p>
              <div>
                <span class="screen-info">Mohammed Ali</span>
              </div>
            </div>
            <div>
              <p class="test-done">HIV</p>
              <div>
                <span class="remark">Positive</span>
              </div>
            </div>
            <div>
              <p class="test-done">Hepatitis B</p>
              <div>
                <span class="remark">Positive</span>
              </div>
            </div>
            <div>
              <p class="test-done">Hepatitis C</p>
              <div>
                <span class="remark">Positive</span>
              </div>
            </div>
            <div>
              <p class="test-done">Syphillis</p>
              <div>
                <span class="remark">Positive</span>
              </div>
            </div>
            <div>
              <p class="test-done">HCV</p>
              <div>
                <span class="remark">Positive</span>
              </div>
            </div>
            <div>
              <p class="test-done">PCV</p>
              <div>
                <span class="remark">Positive</span>
              </div>
            </div>
            <div>
              <p class="test-done">Blood Result</p>
              <div>
                <span class="remark">Safe</span>
              </div>
            </div>
          </div>
        </div>
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

    main > #bottom-info {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background-color: #FAFAFA;
    color: #000;
    padding: 20px 30px;
    margin: 50px auto 10vh;
  }

  #test-header {
    color: #B70303;
  }

  #bottom-info > div {
    display: flex;
  }

  #test-result {
    width: 60%;
    box-sizing: border-box;
  }

  #test-result span.screen-info {
    text-align: left;
    font-weight: 100;
  }

  #test-result > div {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    box-sizing: border-box;
    align-items: baseline;
  }

  #test-result > div > p {
    width: 70%;
  }

  #test-result > div > div {
    display: flex;
    width: 30%;
  }

  #test-result span {
    flex: 1;
    text-align: center;
  }

  .test-done {
    display: inline-block;
  }

  .test-done span {
    padding: 5px;
  }

  #sup_remark {
    background-color: rgba(0,0,0,0);
    color: #F2994A;
    font-size: 14px;
    padding: 0;
  }

    #test-remark p {
    margin-right: 40px;
    display: inline-block;
  }

  #test-remark .remark {
    padding: 10px 50px;
    background-color: #27AE60;
    color: #fff;
    border-radius: 4px;
  }

  .remark {
    padding: 1px 50px;
    background-color: #27AE60;
    color: #fff;
    border-radius: 4px;
  }
  @media screen and (max-width: 1000px) {
    main {
      padding: 30px;
    }
    main > #top-info, main > #bottom-info {
      padding: 20px 10px 50px;
    }
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
    .remark {
      padding: 0 18px;
      background-color: #27AE60;
      color: #fff;
      border-radius: 4px;
    }
    #remark-sticker {
      display: none;
    }
    #test-result {
      width: 100%;
    }
  }
</style>
