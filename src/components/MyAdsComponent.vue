<template>
    <div class="my-ads">
        <div class="ads-container" v-if="ads.length">
            <div class="ads-content">
                <AdComponent v-for="ad in ads" :key="ad.id" :data="ad"/>
            </div>
            <div class="pagination">
                <v-pagination
                    v-model="currPage"
                    color="#512DE4"
                    :length="nPages"
                    circle
                    v-if="ads.length > 0"
                ></v-pagination>
            </div>
        </div>
        <div class="ads-container no-ads" v-else>
            <h1>Пока что вы не
                <router-link to="/"> 
                    добавили
                </router-link>
            ни одного объявления ... (</h1>
        </div>
    </div>
</template>

<script>
import AdComponent from './subComponents/AdComponent';
import config from '../config';
import axios from 'axios';
import {mapGetters, mapActions} from 'vuex';

export default {
    components: {
        AdComponent,
    },
    data: function(){
        return {
            ads: [],
            nPages: 1,
            currPage: 1,
        }
    },
    computed: {
        ...mapGetters([
            'getAccessToken',
        ]),
    },
    methods: {
        ...mapActions([
            "logoutUser",
        ]),
        getMyAds: function() {
            let self = this;
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.getAccessToken;
            axios.get(config.apiURL + '/lot/owner/ads',
            {
                withCredentials: true 
            })
            .then(function(response){
                self.ads = response.data.result.data;
                self.nPages = response.data.result.num_pages;
                self.currPage = response.data.result.curr_page;
            })
            .catch(function(error){
                if(!error.response){
                    self.logoutUser();
                }
            })
        }
    },
    created: function(){
        this.getMyAds();
    },
}
</script>

<style>
.my-ads{
    margin-top: 100px;
    max-width: 1600px;
    margin: 100px auto;
    margin-bottom: 0;
    padding: 40px 0px;
}
.ads-content{
    min-height: 600px;
    display: flex;
    flex-flow: row wrap;
}
.no-ads{
    margin-top: 270px;
    text-align: center;
}
</style>