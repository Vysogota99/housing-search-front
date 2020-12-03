<template>
<div class="rooms-container">
    <div class="rooms-content">
        <FilterComponent :isActive="closeOverlayFn" :overlay="overlay"/>
        <div class="row" id="filters-top-bar">
            <div class="col-1"></div>
            <div class="col-10">
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
            <div class="row" id="filters-bar">    
                <v-select
                    class="default-input"
                    :items="sortBy"
                    label="сортировать по"
                    v-model="sortValue"
                ></v-select>
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
                <button class="default-btn">Найти</button> 
                <router-link to="/rooms/map">
                    <button class="default-btn">Карта</button> 
                </router-link>
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
        <div class="row">
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
                'время создания объявления',
                'цена'
            ],
            sortValue: '',
            address: '',
            minPrice: '',
            min: 0,
            max: 100000,

            mapCenter: [55.7, 38.45],
            mapZoom: 10,

            limit: 5,
        }
    },
    methods: {
        getRooms: function(limit, offset) {
            let self = this;
            console.log(config.apiURL);
            axios.get(config.apiURL + '/rooms',
                {
                    params: {
                        limit: limit,
                        offset: offset,
                    }
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
    margin-top: 75px;
    display: flex;
    flex-flow: row nowrap;
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