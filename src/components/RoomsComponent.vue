<template>
<div class="rooms-container">
    <div class="rooms-content">
        <FilterComponent :isActive="closeOverlayFn" :overlay="overlay" :whatToDo="closeOverlayFn"/>
        <div class="row" id="filters-top-bar">
            <div class="col-1"></div>
            <div class="col-10">
            <div class="top-bar">
                <div class="filters-bar">
                    <input type="text" class="default-input filter-top-bar-inp" placeholder="введите адрес" v-model="address">      
                    <v-slider
                        label="Цена >"
                        v-model="minPrice"
                        class="align-center"
                        :max="max"
                        :min="min"
                    >
                        <template v-slot:append>
                            <v-text-field
                                v-model="minPrice"
                                class="mt-0 pt-0"
                                hide-details
                                single-line
                                type="number"
                                style="width: 60px"
                            ></v-text-field>
                        </template>
                    </v-slider>
                </div>      
                <div class="filters-bar">    
                    <select class="form-control default-input inp-select" id="exampleFormControlSelect1" v-model="selectedSort">
                        <option v-for="item in sortBy" :key="item.id" v-bind:value="item.data">{{item.name}}</option>
                    </select>
                    <v-btn
                        class="mx-2"
                        fab
                        dark
                        color="#512DE4"
                        @click="overlay=true"
                    >
                    <v-icon dark>
                        mdi-filter-outline
                    </v-icon>
                    </v-btn>
                    <button class="default-btn" @click="getRooms(limit,1)">Найти</button> 
                    <router-link to="/rooms/map">
                        <button class="default-btn last-btn">Карта</button> 
                    </router-link>
                </div> 
            </div>
            </div>
            <div class="col-1">
                <div class="map-control">
                    <v-btn
                        class="mx-2"
                        fab
                        large
                        dark
                        color="#fff"
                        @click="mapVisible=!mapVisible"
                    >
                        <v-icon dark color="#512DE4" v-if="mapVisible">
                            mdi-arrow-right-bold-circle-outline
                        </v-icon>
                        <v-icon dark color="#512DE4" v-else>
                            mdi-arrow-left-bold-circle-outline
                        </v-icon>
                        
                    </v-btn>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-1"></div>
            <div class="col-10">
                <CardComponent v-for="room in rooms" :key="room.id" :room="room"/>
            </div>
            <div class="col-1"></div>
        </div>
        <div class="row" v-if="rooms.length > 0">
            <div class="col-1"></div>
            <div class="col-10">
                <div class="pagination">
                    <v-pagination
                    v-model="currPage"
                    color="#512DE4"
                    :length="nPages"
                    circle
                    ></v-pagination>
                </div>
            </div>
            <div class="col-1"></div>
        </div>
    </div>
    <transition 
        name="custom-classes-transition"
        enter-active-class="animated bounceInRight"
        leave-active-class="animated bounceOutRight"
    >
        <div class="rooms-map" id="rooms-map" v-show="mapVisible">
            <div class="map-block">
                <MapComponent :zoom="mapZoom" :coords="mapCenter" :points="rooms"/>
            </div>
        </div>
    </transition>
</div>
</template>

<script>

import CardComponent from './subComponents/CardComponent.vue';
import MapComponent from './subComponents/MapComponent.vue';
import FilterComponent from './subComponents/FiltersComponents'
import config from '../config.js';
import axios from 'axios'
import {mapGetters, mapMutations} from 'vuex'

export default {
    components: {
        CardComponent,
        MapComponent,
        FilterComponent,
    },
    data(){
        return{
            overlay: false,
            mapVisible: true,  

            rooms: [],
            nPages: 1,
            currPage: 1,
            sortBy: [
                {
                    id: 1,
                    name:'время создания объявления - сначала новые',
                    data: {
                        target: 'desc',
                        teg: 'created_at',
                    }
                },
                {
                    id: 2,
                    name:'время создания объявления - сначала старые',
                    data: {
                        target: 'asc',
                        teg: 'created_at',
                    }
                },
                {
                    id: 3,
                    name:'цена - сначала дешевле',
                    data: {
                        target: 'asc',
                        teg: 'price',
                    }
                },
                {
                    id: 4,
                    name:'цена - сначала дороже',
                    data: {
                        target: 'desc',
                        teg: 'price',
                    }
                },
            ],
            min: 0,
            max: 100000,

            mapCenter: [55.7, 38.45],
            mapZoom: 10,

            limit: 5,
        }
    },
    computed: {
        ...mapGetters([
            'getMinPrice',
            'getOrderBy',
            'getAddress',
            'filterRooms',
        ]),
        selectedSort: {
            get() {
                return this.getOrderBy;
            },
            set(value) {
                this.updateOrderBy(value)
                const result = value.teg + ' ' + value.target;
                this.setToFilterRooms({
                    key: 'sort',
                    value: result,   
                });

            },
        },
        address: {
            get() {
                return this.getAddress;
            },
            set(value) {
                this.updateAddress(value)
                if(value != '') {
                    const result = '=' + value;
                    this.setToFilterRooms({
                        key: 'address',
                        value: result,
                    });
                }else{
                    this.deleteFromFilterRooms('address');
                }
            },
        },
        minPrice: {
            get() {
                return this.getMinPrice;
            },
            set(value) {
                this.updateMinPrice(value)
                if(value != '' && value >= 0) {
                    const result = '>=' + value;
                    this.setToFilterRooms({
                        key: 'price min',
                        value: result,
                    });
                }else{
                    this.deleteFromFilterRooms('price min');
                }
            },
        }

    },
    methods: {
        ...mapMutations([
            'setToFilterRooms',
            'deleteFromFilterRooms',
            'updateMinPrice',
            'updateOrderBy',
            'updateAddress',
        ]),
        getRooms: function(limit, offset) {
            let self = this;    
            let filters = this.filterRooms;
            let requestParams = {
                limit: limit,
                offset: offset,
            };

            for (let [key, value] of filters) {
                requestParams[key] = value;
            }


            axios.get(config.apiURL + '/rooms',
                {
                    params: requestParams,
                }
            )
            .then(function(response){
                self.rooms = response.data.result.data;
                self.nPages = response.data.result.num_pages;
                self.currPage = response.data.result.curr_page;
            })
            .catch(function(error){
                self.rooms = [];
                console.log(error.response);
            })
        },
        closeOverlayFn: function() {
            this.overlay = false;
        }
    },
    created: function(){
        this.getRooms(this.limit, 1);
    },
    watch: {
      currPage: function(value) {
          this.getRooms(this.limit, value);
      }  
    }
}
</script>

<style>
.top-bar{
    background-color: #fff;
    border-radius: 25px;
    margin-top: 25px;
    padding: 25px 15px 10px 15px;

    box-shadow:0px 1px 7px 0px rgba(0,0,0,0.45);
    -webkit-box-shadow:0px 1px 7px 0px rgba(0,0,0,0.45);
    -moz-box-shadow:0px 1px 7px 0px rgba(0,0,0,0.45);
}
.rooms-container{
    margin-top: 95px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
}
.rooms-content{
    min-height: 100vh;
    flex-grow: 1;
    height: 100px;
}
.rooms-map{
    flex-grow: 3;
    height: vh;
    background-color: green;
}
.hidemap{
    flex-grow: 0;
}
.map-block{
    position: fixed;
    width: 100%;
    height: 100vh;

    background-blend-mode: saturation;
    background-attachment: fixed;
    background-image: url("../assets/map-rooms.jpg");
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.filters-bar{
    margin-top: 0px;
    display: flex;
    flex-flow: row nowrap;
}
.inp-select{
    width: 550px;   
}
.last-btn{
    margin-right: 0;
}
.filter-top-bar-inp{
    min-width: 300px;
    margin-right: 20px;
}
.pagination{
    margin: 15px 40% 70px 40%;
    width: 900px;
}
.map-control{
    margin-top: 110px;
    z-index: 2;
    position: fixed;
    top: 10px;
    height: 100px;
    width: 100px;
}
</style>