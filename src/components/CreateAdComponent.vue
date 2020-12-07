<template>
    <div class="create-ad">
            <v-alert
                class="create-ad-alert"
                dense
                outlined
                :type="alertType"
                v-if="alertVisible"
            >
                {{alertText}}
            </v-alert>
        <div class="create-ad-flat mb-10">
            <div class="create-ad-row">
                <div class="ml-4"> <h3>{{construct.address}}</h3> </div>
                <div>
                    <v-btn
                        class="mx-2"
                        fab
                        dark
                        small
                        color="red"
                        @click="deleteAd()"
                    >
                    <v-icon dark>
                        mdi-delete
                    </v-icon>
                    </v-btn>
                    <button class="default-btn w200" v-if="construct.is_constructor" @click="createAd()">
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
                        <p v-show="construct.sex">Пол<span></span></p>
                    </div>
                </div>
                <div class="flat-inputs">
                    <label>Цена за квартиру</label>
                        <input type="text" class="default-input mb-2 mt-1 ml-2 mr-1" placeholder="0" v-model="dataToUPdate.lot.price">&#8381;
                    <br>
                    <label>Залог</label>
                        <input type="text" class="default-input mb-2 ml-2 mr-1" placeholder="0" v-model="dataToUPdate.lot.deposit">&#8381;
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
                <textarea class="form-control txtarea" id="exampleFormControlTextarea1" rows="3" v-model="dataToUPdate.lot.description"></textarea>
            </div>
            <div class="create-ad-row mt-3">
                <div class="checkbox mb-3 ml-3 mt-3">
                    <input type="checkbox" id="showAd"  v-model="dataToUPdate.lot.is_visible">
                    <label for="showAd"><span id="ad-checkbox">показывать объявление в поиске</span></label>
                </div>
                <div>
                    <button class="btn-save" @click="saveFlat()" v-if="!construct.is_constructor">Сохранить</button>
                </div>
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
                        <input type="text" class="default-input mb-2 mt-1 ml-2 mr-1" placeholder="0" v-model="dataToUPdate.rooms[index].price">&#8381;
                    <br>
                    <label>Залог</label>
                        <input type="text" class="default-input mb-2 ml-2 mr-1" placeholder="0" v-model="dataToUPdate.rooms[index].deposit">&#8381;
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
                <textarea class="form-control txtarea" id="exampleFormControlTextarea1" rows="3" v-model="dataToUPdate.rooms[index].description"></textarea>
            </div>
            <div class="create-ad-row mt-3">
                <div class="checkbox mt-3 ml-3">
                    <input type="checkbox" v-bind:id="'show_room_card_'+room.id" v-model="dataToUPdate.rooms[index].is_visible">
                    <label v-bind:for="'show_room_card_'+room.id"><span id="ad-checkbox">показывать комнату в поиске</span></label>
                </div>
                <div>
                    <button class="btn-save" @click="saveRoom(room.id, index)" v-if="!construct.is_constructor">Сохранить</button>
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
import {mapActions, mapGetters} from 'vuex'
export default {
  components: { ImagesBlockComponent },
  data: function(){
      return {
          construct: {},
          visibleCardsStatus: [],
          dataToUPdate: {
              lot: {},
              rooms: [],
          },
          
          alertText: "Изменения сохранены",
          alertType: "success",
          alertVisible: false,
      }
  },
  computed: {
      ...mapGetters([
          'getAccessToken',
      ])
  },
  created: function(){
      this.getObjects();
  },
  methods: {
        ...mapActions([
            "logoutUser",
        ]),
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

                self.copyData();
            })
            .catch(function(error){
                if(!error.response){
                    self.$router.push("/");
                }
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
      deleteAd: function() {
            const self = this;
            const url = config.apiURL + '/lot';
            axios.delete(url, {
                params: {
                    'lotid': self.construct.id, 
                },
            },
            {
                fields: self.dataToUPdate.lot,
            },
            {
                withCredentials: true,
            })
            .then(function(){
                self.alertText = 'Изменения сохранены';
                self.alertType = 'success';
                self.alertVisible = true
                setTimeout(() => {
                    self.alertVisible = false;
                    self.$router.push("/my-ads");
                }, 1500)
            })
            .catch(function(error){
                console.log(error.response);
                if(!error.response) {
                    self.logoutUser();
                }

                self.alertText = 'Не удалось внести изменения';
                self.alertType = 'error';
                self.alertVisible = true
                setTimeout(() => {
                    self.alertVisible = false;
                }, 1500)
            })  
      },
      saveFlat: function() {
            const self = this;
            const url = config.apiURL + '/lot/update/' + self.construct.id;

            axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.getAccessToken
            axios.patch(url,
            {
                fields: self.dataToUPdate.lot,
            },
            {
                withCredentials: true,
            })
            .then(function(){
                self.alertText = 'Изменения сохранены';
                self.alertType = 'success';
                self.alertVisible = true
                setTimeout(() => {
                    self.alertVisible = false;
                }, 1500)
            })
            .catch(function(error){
                console.log(error.response);
                if(!error.response) {
                    self.logoutUser();
                }

                self.alertText = 'Не удалось внести изменения';
                self.alertType = 'error';
                self.alertVisible = true
                setTimeout(() => {
                    self.alertVisible = false;
                }, 1500)
            })  
            
      },
      saveRoom: function(roomID, arrIndex) {
            const self = this;
            const url = config.apiURL + '/rooms/room/' + roomID;

            axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.getAccessToken;
            axios.patch(url,
            {
                fields: self.dataToUPdate.rooms[arrIndex],
            },
            {
                withCredentials: true,
            })
            .then(function(){
                self.alertText = 'Изменения сохранены';
                self.alertType = 'success';
                self.alertVisible = true
                setTimeout(() => {
                    self.alertVisible = false;
                }, 1500)
            })
            .catch(function(error){    
                console.log(error);
               if(!error.response) {
                    self.logoutUser();
                }
                self.alertText = 'Не удалось внести изменения';
                self.alertType = 'error';
                self.alertVisible = true
                setTimeout(() => {
                    self.alertVisible = false;
                }, 1500)
            })     
      },
      createAd: function() {
            let requestData = {
                lot: {
                    id: this.construct.id,
                    fields: this.dataToUPdate.lot,
                },
                rooms: [], 
            }

            for(let i = 0; i < this.construct.rooms.length; i++) {
                requestData.rooms[i] = {
                    id: this.construct.rooms[i].id,
                    fields: this.dataToUPdate.rooms[i],
                }
            }

            const self = this;
            const url = config.apiURL + '/lot/ad';
            console.log(requestData)
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.getAccessToken
            axios.patch(url, requestData,
            {
                withCredentials: true,
            })
            .then(function(){
                self.alertText = 'Объявление создано';
                self.alertType = 'success';
                self.alertVisible = true
                setTimeout(() => {
                    self.alertVisible = false;
                    self.$router.push("/my-ads");
                }, 1500)
            })
            .catch(function(error){
                console.log(error.response.data);
                if(!error.response) {
                    self.logoutUser();
                }

                self.alertText = 'Не удалось внести изменения';
                self.alertType = 'error';
                self.alertVisible = true
                setTimeout(() => {
                    self.alertVisible = false;
                }, 1500)
            })  
      },
      copyData: function() {
            if(this.construct.flat_price) {
                this.dataToUPdate.lot.price = this.construct.flat_price;
            }else{
                this.dataToUPdate.lot.price = 0;
            }

            if(this.construct.flat_deposit) {
                this.dataToUPdate.lot.deposit = this.construct.flat_deposit;
            }else{
                this.dataToUPdate.lot.deposit = 0;
            }

            if(this.construct.description) {
                this.dataToUPdate.lot.description = this.construct.description;
            }else{
                this.dataToUPdate.lot.description = '';
            }

            this.dataToUPdate.lot.is_visible = this.construct.is_visible;

            for(let i = 0; i < this.construct.rooms.length; i++) {
                this.dataToUPdate.rooms[i] = {}
                if(this.construct.rooms[i].room_price) {
                    this.dataToUPdate.rooms[i].price = this.construct.rooms[i].room_price;
                }else{
                    this.dataToUPdate.rooms[i].price = 0;
                }     

                if(this.construct.rooms[i].room_deposit) {
                    this.dataToUPdate.rooms[i].deposit = this.construct.rooms[i].room_deposit;
                }else{
                    this.dataToUPdate.rooms[i].deposit = 0;
                }    

                if(this.construct.rooms[i].description) {
                    this.dataToUPdate.rooms[i].description = this.construct.rooms[i].description;
                }else{
                    this.dataToUPdate.rooms[i].description = '';
                }
                
                this.dataToUPdate.rooms[i].is_visible = this.construct.rooms[i].is_visible;
            }
      },
  },
  watch: {

  }
}
</script>
<style>
.create-ad-alert{
    position: fixed;
    top: 110px;
    right: 45%;
    z-index: 10;
}
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
.w200{
    width: 200px;
}
.w100{
    width: 120px;
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
.btn-save{
    margin-right: 10px;
    border-radius: 99px;
    width: 180px;
    height: 50px;
    border: 2px solid #512DE4;
    padding: 8px 23px;
    color: #512DE4;
}
.btn-delete{
    color: #ff0000;  
}
.btn-save:hover{
    background: linear-gradient(207.73deg, #512DE4 58.15%, #7130C4 89.84%);
    color: #fff;
    transition: .2s;

    box-shadow:0px 1px 7px 0px rgba(0,0,0,0.45);
    -webkit-box-shadow:0px 1px 7px 0px rgba(0,0,0,0.45);
    -moz-box-shadow:0px 1px 7px 0px rgba(0,0,0,0.45);
}

.default-btn:hover{
    box-shadow:0px 1px 7px 0px rgba(0,0,0,0.45);
    -webkit-box-shadow:0px 1px 7px 0px rgba(0,0,0,0.45);
    -moz-box-shadow:0px 1px 7px 0px rgba(0,0,0,0.45);
}
</style>