<template>
    <div class="map-container" :key="key">
        <yandex-map 
            :coords="coords"
            :zoom="zoom" 
            :cluster-options="clusterOptions"
        >
        <ymap-marker
            v-for="point in points"
            v-bind:marker-id="point.id" 
            :key="point.id"
            :balloon-template="balloonTemplate"
            :coords="[point.long, point.lat]"
            cluster-name="1"
        />
        </yandex-map>
    </div>
</template>

<script>
import {yandexMap, ymapMarker} from 'vue-yandex-maps'
export default {
    components: {
        yandexMap,
        ymapMarker,
    },
    mounted: function() {
    },
    data: function(){
        return {
            detControls: {
                'geolocationControl': {
                    'visible': false,
                },
            },
            placemarkBodies: [],
            settings: {
                apiKey: 'd08acba1-212c-4135-9542-5a0b02a69be5',
                lang: 'ru_RU',
                coordorder: 'latlong',
                version: '2.1'
            },
            clusterOptions: {
                1: {
                    clusterDisableClickZoom: true,
                    clusterOpenBalloonOnClick: true,
                },
            },
            key: 0,
        }
    },
    methods: {
        onClick(e) {
            this.coords = e.get('coords');
        }
    },
    computed: {
        balloonTemplate() {
        return `
            <h2 class=ballon_header>Какашка</h2>
            <div class=ballon_body>Для машки</div>
            <div class=ballon_footer>Букашки</div>
        `
        }
    },
    props: {
        zoom: {
            type: Number,
            required: true
        },
        coords: {
            type: Array,
            required: true
        },
        points: {
            type: Array,
            required: true
        }       
    },
    watch: {
        points: function() {
            this.key += 1;
        }
    }
}
</script>

<style scoped>
.map-container{
    margin-top: 0;
    background-color: #e6e6e6;
    width: 100%;
    height: 100%;
}
.ymap-container {
  height: 100%;
}
.red {
  color: red;
}
</style>