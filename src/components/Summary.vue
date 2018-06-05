<template>
  <div>
    <sb-header></sb-header>
    <main>
      <h3>You are viewing the details of blood code 123456</h3>
      <div id="top-info">
        <div id="test-details">
          <div id="bag-details">
            <p class="test-attribute">Date of Donation</p>
            <p class="test-value">12 June, 2018</p>

            <p class="test-attribute">Donor Code</p>
            <p class="test-value">123456712</p>

            <p class="test-attribute">PVC</p>
            <p class="test-value">10</p>
          </div>
          <div id="donor-details">
            <p class="test-attribute">Blood Code</p>
            <p class="test-value">123456</p>

            <p class="test-attribute">Unique Blood Bank Code</p>
            <p class="test-value">123456712</p>

            <p class="test-attribute">Unique Screening Centre Code</p>
            <p class="test-value">A+</p>

            <p class="test-attribute">Screener’s Name</p>
            <p class="test-value">Muhammed Ali</p>
          </div>
        </div>
        <div id="test-remark">
          <p>Test Result</p><span class="remark">Safe</span>
        </div>
      </div>
      <div id="bottom-info">
        <p id="test-header">Test Result</p>
        <div>
          <div id="test-result">
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
              <p class="test-done">Test Result</p>
              <div>
                <span class="remark">Safe</span>
              </div>
            </div>
            <div>
              <p class="test-done">Supervisor Status</p>
              <div>
                <span class="remark" id="sup_remark">Accepted</span>
              </div>
            </div>
          </div>
          <div id="remark-sticker">
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {}
</script>

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

  main > #top-info, main > #bottom-info{
    display: flex;
    flex-direction: column;
    background-color: #FAFAFA;
    color: #000;
    padding: 20px 50px 50px;
    margin-top: 70px;
  }

  .test-value {
    font-weight: 100;
    margin-top: -15px;
  }

  main #test-details {
    display: flex;
    justify-content: space-between;
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

  #test-header {
  font-family: 'Lato' sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 0.03em;
  color: #B70303;
  }

  #bottom-info > div {
    display: flex;
  }

  #test-result {
    width: 40%;
    box-sizing: border-box;
  }

  #test-result > div {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    box-sizing: border-box;
    align-items: baseline;
  }

  #test-result > div > p {
    width: 50%;
  }

  #test-result > div > div {
    display: flex;
    width: 50%;
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
    color: #27AE60;
    text-align: center;
  }

  #remark-sticker {
    width: 60%;
    background-image: url("../assets/Tag.png");
    background-repeat: no-repeat;
    background-position: center right;
    background-size: 25em;
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

@media screen and (max-width: 700px) {
  #test-details {
    flex-direction: column;
  }
}
</style>
