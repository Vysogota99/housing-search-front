<template>
    <div class="create-ad">
        <div class="create-ad-flat">
            <div class="create-ad-row">
                <div class="ml-4"> <h3>Москва</h3> </div>
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
                        <p>Количество комнат <span>{{templ.rooms.length}}</span></p>
                        <p>Площадь <span>{{templ.area}}</span> м<sup>2</sup></p>
                        <p>Ремонт<span>{{repair()}}</span></p>
                        <p>Этаж<span>{{templ.floor}}</span></p>
                        <p>Этажей в дома<span>{{templ.floor_total}}</span></p>
                        <p v-show="templ.vacuum_cleaner">пылесос<span></span></p>
                        <p v-show="templ.dishwasher">посудомоечная машина<span></span></p>
                        <p v-show="templ.microwave_oven">микроволновка<span></span></p>
                        <p v-show="templ.refrigerator">Холодильник<span></span></p>
                        <p v-show="templ.internet">Интернет<span></span></p>
                        <p v-show="templ.bathroom">Пол<span></span></p>
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
                <input type="checkbox" id="showAd"  v-model="templ.is_visible">
                <label for="showAd"><span id="ad-checkbox">показывать объявление в поиске</span></label>
            </div>
        </div>


        <div class="create-ad-room mb-10" v-for="room in templ.rooms" :key="room.id">
            <h2 class="ml-4">Комната </h2>

            <div class="create-ad-row">
                <div class="flat-descr">
                    <images-block-component/>
                    <div class="flat-descr-text">
                        <p>Максимум жильцов <span>{{room.living_place.length}}</span></p>
                        <p>Односпальных кроватей <span>{{oneBed(room.id)}}</span></p>
                        <p>Двуспальных кроватей<span>{{twoBed(room.id)}}</span></p>
                        <p>Столов<span></span></p>
                        <p>Стульев<span></span></p>
                        <p>Площадь<span></span></p>
                        <p>Балкон<span></span></p>
                        <p>Окна<span></span></p>
                        <p>Интернет<span></span></p>
                        <p>Wi-Fi<span></span></p>
                        <p>Телевизор<span></span></p>
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
            <div class="create-ad-row mt-3">
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
                    <button class="default-btn">Скрыть</button>
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
          templ: {},
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
            axios.get(config.apiURL + '/lot/id/7/true',
            {
                withCredentials: true 
            })
            .then(function(response){
                self.templ = response.data.result;
            })
            .catch(function(error){
                console.log(error.request);
            })
      },
      repair: function() {
          if(this.templ.repair == '1') {
              return 'Бабушкин';
          }else
          if(this.templ == '2'){
              return 'Евроремнт';
          }else{
              return 'Дизайнерский';
          }
      },
      oneBed: function(i) {
          let counter = i;
          console.log(this.templ)

          return counter;
      },
      twoBed: function(i) {
          let counter = i;

          return counter;
      }
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