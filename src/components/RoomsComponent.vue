<template>
<div class="rooms-container">
    <div class="rooms-content">
        <div class="row">
            <button @click="mapVisible = !mapVisible">Скрыть карту</button>
        </div>
        <div class="row">
            <div class="col-1"></div>
            <div class="col-10">
                <CardComponent v-for="room in rooms" :key="room.id"/>
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

            </div>
        </div>
    </transition>
</div>
</template>

<script>

import CardComponent from './subComponents/CardComponent.vue';
import config from '../config.js';
import axios from 'axios'

export default {
    components: {
        CardComponent,
    },
    data(){
        return{
            mapVisible: true,   
            rooms: [],
            nPages: 1,
            currPage: 1,
        }
    },
    methods: {
        getRooms: function(limit, offset) {
            let self = this;
            axios.get(config.apiURL + '/rooms',
                {
                    params: {
                        limit: limit,
                        offset: offset,
                    }
                }
            )
            .then(function(response){
                console.log(response.data.result);
                self.rooms = response.data.result.data;
                self.nPages = response.data.result.num_pages;
                self.currPage = response.data.result.curr_page;
            })
            .catch(function(error){
                console.log(error.response);
            })
        }
    },
    created: function(){
        this.getRooms(10, 1);
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
    background-color: green;

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
</style>