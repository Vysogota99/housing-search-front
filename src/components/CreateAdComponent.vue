<template>
    <div class="create-ad">
        <div class="create-ad-flat">
            <div class="create-ad-row">
                <div class="ml-4"> <h3>{{construct.address}}</h3> </div>
                <div>
                    <button class="default-btn w278">
                        Применить
                    </button>
                </div>
            </div>
            <h2 class="ml-4">Квартира</h2>
            <div class="create-ad-row">
                <div class="flat-descr">
                    <images-block-component/>
                    <div class="flat-descr-text">
                        <p>Количество комнат <span>{{construct.rooms.length}}</span></p>
                        <p>Площадь <span>{{construct.area}}</span> м<sup>2</sup></p>
                        <p>Ремонт<span>{{repair()}}</span></p>
                        <p>Этаж<span>{{construct.floor}}</span></p>
                        <p>Этажей в дома<span>{{construct.floor_total}}</span></p>
                        <p v-show="construct.vacuum_cleaner">Пылесос<span></span></p>
                        <p v-show="construct.dishwasher">Посудомоечная машина<span></span></p>
                        <p v-show="construct.microwave_oven">Микроволновка<span></span></p>
                        <p v-show="construct.refrigerator">Холодильник<span></span></p>
                        <p v-show="construct.internet">Интернет<span></span></p>
                        <p v-show="construct.bathroom">Пол<span></span></p>
                    </div>
                </div>
                <div class="flat-inputs">
                    <label>Цена за квартиру</label>
                        <input type="text" class="default-input mb-2 mt-1 ml-2 mr-1" placeholder="0">&#8381;
                    <br>
                    <label>Комиссия</label>
                        <input type="text" class="default-input mb-2 ml-2 mr-1" placeholder="0">%
                    <br>
                    <label>Залог</label>
                        <input type="text" class="default-input mb-2 ml-2 mr-1" placeholder="0">&#8381;
                    <br>
                    <label>Предоплата</label>
                        <input type="text" class="default-input ml-2 mr-1" placeholder="0">&#8381;
                    <br>
                </div>

            </div>
            <div class="create-ad-row mt-3">
                <label for="exampleFormControlTextarea1" class="ml-4">
                    <span>
                        Текст объявления
                    </span>
                </label>
                <br>
                <textarea class="form-control txtarea" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div class="checkbox mb-3 ml-3 mt-3">
                <input type="checkbox" id="showAd"  v-model="construct.is_visible">
                <label for="showAd"><span id="ad-checkbox">показывать объявление в поиске</span></label>
            </div>
        </div>


        <div class="create-ad-room mb-10"
            v-for="(room, index) in construct['rooms']"
            :key="room.id"
        >
            <h2 class="ml-4">Комната </h2>

            <div class="create-ad-row" v-if="visibleCardsStatus[index] == true">
                <div class="flat-descr">
                    <images-block-component/>
                    <div class="flat-descr-text">
                        <p>Максимум жильцов <span>{{room.living_place.length}}</span></p>
                        <p>Односпальных кроватей <span>{{oneBed(index)}}</span></p>
                        <p>Двуспальных кроватей<span>{{twoBed(index)}}</span></p>
                        <p>Столов<span>{{room.num_of_tables}}</span></p>
                        <p>Стульев<span>{{room.num_of_tables}}</span></p>
                        <p>Площадь<span>{{room.area}}</span></p>
                        <p v-show="room.balcony">Балкон</p>
                        <p v-show="room.windows">Окна</p>
                        <p v-show="construct.internet">Интернет</p>
                        <p v-show="construct.wifi">Wi-Fi</p>
                        <p v-show="room.tv">Телевизор</p>
                    </div>
                </div>
                <div class="flat-inputs">
                    <label>Цена за комнату</label>
                        <input type="text" class="default-input mb-2 mt-1 ml-2 mr-1" placeholder="0">&#8381;
                    <br>
                    <label>Комиссия</label>
                        <input type="text" class="default-input mb-2 ml-2 mr-1" placeholder="0">%
                    <br>
                    <label>Залог</label>
                        <input type="text" class="default-input mb-2 ml-2 mr-1" placeholder="0">&#8381;
                    <br>
                    <label>Предоплата</label>
                        <input type="text" class="default-input ml-2 mr-1" placeholder="0">&#8381;
                    <br>
                </div>

            </div>
            <div class="create-ad-row mt-3"  v-if="visibleCardsStatus[index] == true">
                <label for="exampleFormControlTextarea1" class="ml-4">
                    <span>
                        Текст объявления
                    </span>
                </label>
                <br>
                <textarea class="form-control txtarea" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div class="create-ad-row mt-3">
                <div class="checkbox mt-3 ml-3">
                    <input type="checkbox" id="showAd" >
                    <label for="showAd"><span id="ad-checkbox">показывать комнату в поиске</span></label>
                </div>
                <div>
                    <button class="default-btn" @click="hideCard(index)"  v-if="visibleCardsStatus[index]">Скрыть</button>
                    <button class="default-btn" @click="hideCard(index)"  v-if="!visibleCardsStatus[index]">Раскрыть</button>
                </div>
            </div>
        </div>
    </div>  
</template>

<script>
import ImagesBlockComponent from "./subComponents/ImagesBlockComponent";
import config from "../config";
import axios from "axios";
export default {
  components: { ImagesBlockComponent },
  data: function(){
      return {
          construct: {},
          visibleCardsStatus: [],
      }
  },
  computed: {

  },
  created: function(){
      this.getObjects();
  },
  methods: {
      getObjects: function() {
            let self = this;
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.getAccessToken;
            const url = config.apiURL + '/lot/id/' + this.$route.params.id + '/' + this.$route.params.isConstruct;
            console.log(url);

            axios.get(url,
            {
                withCredentials: true 
            })
            .then(function(response){
                self.construct = response.data.result;  
                for(let i = 0; i < self.construct.rooms.length; i++) {
                    self.visibleCardsStatus[i] = false;
                }
                console.log(self.visibleCardsStatus);
                
            })
            .catch(function(){
                // self.$router.push("/");
            })
      },
      repair: function() {
          if(this.construct.repair == '1') {
              return 'Бабушкин';
          }else
          if(this.construct == '2'){
              return 'Евроремнт';
          }else{
              return 'Дизайнерский';
          }
      },
      oneBed: function(i) {
            let counter = 0;
            this.construct.rooms[i].living_place.forEach(function(item){
                if(item.num_of_berth == 1){
                    counter++;
                }
            });
            return counter;
      },
      twoBed: function(i) {
            let counter = 0;
            this.construct.rooms[i].living_place.forEach(function(item){
                if(item.num_of_berth == 2){
                    counter++;
                }
            });
            return counter;
      },
      hideCard: function(i) {
            this.visibleCardsStatus[i] = !this.visibleCardsStatus[i]
            this.$set(this.visibleCardsStatus, i, this.visibleCardsStatus[i]);
      },
  },
}
</script>
<style>
.create-ad{
    margin-top: 100px;
    width: 1100px;
    margin: 100px auto;
    height: 1000px;
    padding: 40px 0px;

    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
}
.create-ad-flat{
    margin: 0 auto;
    width: 1000px;
}
.create-ad-row{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
}
.create-ad-row h3{
    padding-top: 10px;
    font-size: 24px;
    font-weight: 700;
}
.create-ad h2{
    padding-top: 10px;
    font-size: 36px;
    font-weight: 700;
}
.w278{
    width: 278px;
}
#ad-checkbox{
    font-size: 24px;
    font-weight: 700;
    color: #232323;
}
.flat-descr{
    display: flex;
    flex-flow: row nowrap;
}
.flat-descr-text{
    padding-top: 6px;
    padding-left: 6px;
    text-align: left;
}
.flat-descr-text p{
    font-size: 14px;
    font-weight: 400;
    color: #535353;
    margin: 0;
}
.flat-descr-text span{
    font-size: 14px;
    font-weight: 700;
    color: #444444;
    margin: 0;
    margin-left: 4px;
}
.create-ad-room{
    width: 100%;
    border: 0px solid #512DE4;
    border-radius: 25px;
    padding: 20px 30px;

    box-shadow:0px 1px 7px 0px rgba(0,0,0,0.45);
    -webkit-box-shadow:0px 1px 7px 0px rgba(0,0,0,0.45);
    -moz-box-shadow:0px 1px 7px 0px rgba(0,0,0,0.45);
}
.flat-inputs{
    text-align: right;
}
.flat-inputs input {
    width: 131px;
}
.t-l{
    margin-right: 1px;
    margin-bottom: 1px;
}
.t-r{
    margin-left: 1px;
    margin-bottom: 1px;
}
.b-r{
    margin-left: 1px;
    margin-top: 1px;
}
.b-l{
    margin-right: 1px;
    margin-top: 1px;
}
.txtarea{
    border: 2px solid #512DE4;
    border-radius: 25px;
    min-height: 227px;
    padding: 15px;
}
</style>