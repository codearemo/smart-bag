<template>
  <div>
    <sb-header></sb-header>
    <main>
      <h3>You are viewing the details of blood code {{bagDetails.BagId}}</h3>
      <div id="top-info">
        <div id="test-details">
          <div id="bag-details">
            <p class="test-attribute">Date of Donation</p>
            <p class="test-value">6 June, 2018</p>

            <!-- <p class="test-attribute">Donor Code</p>
            <p class="test-value">123499</p> -->

            <p class="test-attribute">PVC</p>
            <p class="test-value">{{bagDetails.PVC}}</p>
          </div>
          <div id="donor-details">
            <p class="test-attribute">Blood Code</p>
            <p class="test-value">{{bagDetails.BagId}}</p>

            <p class="test-attribute">Unique Blood Bank Code</p>
            <p class="test-value">{{bagDetails.owner | txt}}</p>

            <p class="test-attribute">Blood Type</p>
            <p class="test-value">{{bagDetails.Btype}}</p>

            <!-- <p class="test-attribute">Screener’s Name</p>
            <p class="test-value">Muhammed Ali</p> -->
          </div>
        </div>
        <div id="test-remark">
          <p>Test Result</p><span class="remark" v-bind:class="{safe: safe, 'unsafe': unsafe}">{{bagDetails.safety}}</span>
        </div>
      </div>
      <div id="bottom-info">
        <p id="test-header">Test Result</p>
        <div>
          <div id="test-result">
            <div>
              <p class="test-done">HIV</p>
              <div>
                <span class="remark" v-bind:class="{safe: safe, 'unsafe': unsafe}">{{bagDetails.HIV}}</span>
              </div>
            </div>
            <div>
              <p class="test-done">Hepatitis B</p>
              <div>
                <span class="remark" v-bind:class="{safe: safe, 'unsafe': unsafe}">{{bagDetails.HepatitisB}}</span>
              </div>
            </div>
            <div>
              <p class="test-done">Hepatitis C</p>
              <div>
                <span class="remark" v-bind:class="{safe: safe, 'unsafe': unsafe}">{{bagDetails.Hepatitisc}}</span>
              </div>
            </div>
            <div>
              <p class="test-done">Syphillis</p>
              <div>
                <span class="remark" v-bind:class="{safe: safe, 'unsafe': unsafe}">{{bagDetails.Spyhills}}</span>
              </div>
            </div>
            <div>
              <p class="test-done">HCV</p>
              <div>
                <span class="remark" v-bind:class="{safe: safe, 'unsafe': unsafe}">{{bagDetails.HCV}}</span>
              </div>
            </div>
            <div>
              <p class="test-done">Test Result</p>
              <div>
                <span class="remark" v-bind:class="{safe: safe, 'unsafe': unsafe}">{{bagDetails.safety}}</span>
              </div>
            </div>
            <div>
              <p class="test-done">Supervisor Note</p>
              <div>
                <!-- class="remark" id="sup_remark" -->
                <span>{{bagDetails.Notes}}</span>
              </div>
            </div>
          </div>
          <div id="remark-sticker" v-if="safe">
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data () {
    return {
      bagDetails: {},
      safe: true,
      unsafe: false
    }
  },
  created () {
    this.$http.get(`http://ec2-18-188-8-66.us-east-2.compute.amazonaws.com:3000/api/Bag/${this.$route.params.id}`)
      .then(response => {
        // console.log(response.body)
      this.bagDetails = response.body
      // console.log(this.bagDetails)
      for (var test in this.bagDetails) {
        console.log(this.bagDetails[test])
          if (this.bagDetails[test] == 'Positive') {
            this.safe = true
            this.unsafe = false
          }
          else {
            this.safe = false
            this.unsafe = true
          }
        }
    })
  .catch(error => console.log(error))
  }
}
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
    /* background-color: #27AE60; */
    color: #fff;
    border-radius: 4px;
  }

  .remark {
    padding: 1px 50px;
    /* background-color: #27AE60; */
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
    justify-content: space-between;
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
    background-position: center;
    background-size: 25em;
  }

  .unsafe {
    background-color: #27AE60;
  }

  .safe {
    background-color: #27AE60;
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
    /* background-color: #27AE60; */
    color: #fff;
    border-radius: 4px;
  }
  #remark-sticker {
    height: 35vh;
    background-position: center;
  }
  #test-result {
    width: 55%;
  }
}

@media screen and (max-width: 700px) {
  #test-details {
    flex-direction: column;
  }
  #bottom-info > div {
    flex-direction: column;
  }
    #test-result {
    width: 100%;
  }
  #remark-sticker {
    width: 100%;
    background-position: center;
  }
}
</style>
