<template>
<div class="container middle">
  <div class="card-mb-3"  v-for="(card, index) of cards " :key="index">
    <div class="row g-0">
      <div class="col-md-4 ">
        <img class="w-100" src="https://avatars.mds.yandex.net/get-zen_doc/248942/pub_5ad735c1fd96b1aa260a5452_5ad73609d7bf210ca2854682/scale_1200"  alt="HATA1">
      </div>
      <div class="col-md-6 ">
        <div class="card-body">
          <h5 class="card-title">{{card.metro}}</h5>
          <p class="card-text">{{card.address}}</p>
          <p class="card-text">этаж {{card.floor}}/{{card.floor_total}}</p>
          <p class="card-text"><small class="text-muted">{{card.metro}}</small></p>
        </div>
      </div>
      <div class="col-md-2 lol">
        <div class="flex">
        <div class="size">
        <label class="texxxt">Свободно</label><br>
        <span class="n-living-places">3/4</span><br>
        <button class="eye1 first">
            <v-icon size="20" color="red">mdi-eye-off-outline</v-icon>
          </button>
          </div>
          <div class="size">
        <button class="eye2 second">
            <v-icon size="20" color="orange">mdi-email-outline</v-icon>
          </button>
          </div>
          <div class="size">
            <button class="eye3 thrid">
              <v-icon size="40" color="#512DE4">mdi-heart-outline</v-icon>
            </button>
          </div>
      </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
    data:() => ({
    }),
    props: {
            cards: {
                  type: Array,
                  }
    }     
}
</script>

<style>
.texxxt {
    font-family: sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    align-items: center;
    color: #000000;
    margin-top: 20px;
    margin-right: 21px;
    margin-bottom: 0px;
  }
.card-mb-3 {
    height: 320px;
    width: 1100px;
    background: #FFFFFF;
    border-radius: 20px;
    border-style: solid;
    border-color: rgba(81, 45, 228, 1);
    margin-bottom: 15px;
}
.middle {
    text-align: left;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    padding: 0px;
    margin-top: 12px;  
  }
  .card-body {
    text-align: left;
  }
  .w-100 {
    width: 385px;
    margin-left: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 10px;
  }
  .eye1 {
    background: #FFFFFF;
    border: 2px solid #B2B2B2;
    box-sizing: border-box;
    height: 36px;
    width: 36px;
    border-radius: 50px;
    align-items: center;
  }
  .eye2 {
    background: #FFFFFF;
    border: 2px solid #B2B2B2;
    box-sizing: border-box;
    height: 36px;
    width: 36px;
    border-radius: 50px;
  }
  .eye3 {
    background: #FFFFFF;
    border: 2px solid #B2B2B2;
    box-sizing: border-box;
    border-radius: 50px;
    height: 82px;
    width: 80px;
    margin-right: 21px;
    margin-bottom: 21px;
  }

  .lol{
    padding: 0px;
    display: flex;
    flex-flow: column wrap;
    align-items: flex-end;
  }
  .size {
    margin-right:10px;
  }
  .first {
    margin-top: 29px;
    margin-bottom: 7px;
    margin-left: 37px;
  }
  .second {
    margin-bottom: 7px;
    margin-left: 37px;
  }
  .bi-eye-slash {
    height: 50px;
    width: 50px;
  }
  .bi-envelope {
    height: 14px;
    width: 15px;
    border-radius: 0px;

  }
  .flex {
    height: 320px;
    display: flex;
    flex-direction: column;
  }
  .n-living-places{
    font-weight: 700;
    color:#512DE4;
    font-size: 48px;
    align-items: center;
    line-height: 56px;
}

</style>