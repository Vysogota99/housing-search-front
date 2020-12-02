<template>
    <div class="map-container">
        <MapComponent :zoom="mapZoom" :coords="mapCenter" :points="rooms"/>
    </div>
</template>

<script>
import config from '../config.js';
import axios from 'axios'
import MapComponent from './subComponents/MapComponent'
export default {
    components: {
        MapComponent,
    },
    data(){
        return{
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

                console.log(self.rooms);
            })
            .catch(function(error){
                self.rooms = [];
                console.log(error.response);
            })
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
</style>