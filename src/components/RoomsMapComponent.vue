<template>
    <div class="map-container">
        <div class="right-bar">
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
        </div>
        <FilterComponent :isActive="closeOverlayFn" :overlay="overlay"/>
        <MapComponent :zoom="mapZoom" :coords="mapCenter" :points="rooms"/>
    </div>
</template>

<script>
import config from '../config.js';
import axios from 'axios'
import MapComponent from './subComponents/MapComponent'
import FilterComponent from './subComponents/FiltersComponents'

export default {
    components: {
        MapComponent,
        FilterComponent,
    },
    data(){
        return{
            overlay: true,

            rooms: [],
            mapCenter: [55.76, 37.64],
            mapZoom: 10,
            limit: 5000,
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
}
</script>

<style>
.map-container{
    margin-top: 95px;
    width: 100vw;
    height: 100vh;
}
.right-bar{
    width: 80px;
    height: 100vh;
    z-index: 2;
    padding-top: 150px;    
    padding-left: 0px;
    position: fixed;
    right: 0;
}
</style>