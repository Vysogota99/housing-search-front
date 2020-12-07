<template>
    <div class="templ-container">
        <div class="templ-content" v-if="templates.length">
            <div class="templ" v-for="tmp in templates" :key="tmp.id">
                <div>
                    <span>{{tmp.id}}</span>
                </div>
                <div class="templ-addr">
                    <span>{{tmp.address}}</span>
                </div>
                <div>
                    <span>{{convertDate(tmp.created_at)}}</span>
                </div>
                <router-link :to="{ name: 'create ad', params: { id: tmp.id, isConstruct: true }}">
                    <button class="default-btn">Открыть</button>
                </router-link>
            </div>
        </div>
        <div class="ads-container no-ads" v-if="!templates.length">
            <h1>
                На данные момент, у вас нет шаблонов ...
            </h1>
        </div>
        <div class="pagination" v-if="templates.length > 0 && nPages > 1">
            <v-pagination
                v-model="currPage"
                color="#512DE4"
                :length="nPages"
                circle
            ></v-pagination>
        </div>
    </div>    
</template>

<script>
import config from '../config'
import axios from 'axios'
import {mapGetters, mapActions} from 'vuex'
export default {
    data: function() {
        return {
            currPage: 1,
            nPages: 1,
            templates: [],
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
        getTemplates: function() {
            let self = this;
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.getAccessToken;
            axios.get(config.apiURL + '/lot/owner/construct',
            {
                withCredentials: true 
            })
            .then(function(response){
                self.templates = response.data.result.data;
                console.log(self.templates);
                self.nPages = response.data.result.num_pages;
                self.currPage = response.data.result.curr_page;
            })
            .catch(function(){
                self.logoutUser();
            })
        },
        convertDate: function(date) {
            let dt = new Date(date);
            return dt.getDay() + '.' + dt.getMonth() + '.' + dt.getFullYear()
        }
    },
    beforeMount: function() {
        this.getTemplates()
    }
}
</script>

<style>
.templ-container{
    max-width: 1600px;
    margin: 100px auto;
    margin-bottom: 0;
    padding: 40px 0px;
}
.templ-content{
    min-height: 600px;
}
.templ{
    border: 0px solid #512DE4;
    border-radius: 25px;
    margin: 20px;
    padding: 20px 25px;
    box-shadow:0px 1px 7px 0px rgba(0,0,0,0.45);
    -webkit-box-shadow:0px 1px 7px 0px rgba(0,0,0,0.45);
    -moz-box-shadow:0px 1px 7px 0px rgba(0,0,0,0.45);

    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
}
.templ-addr{
    width: 600px;
}
</style>