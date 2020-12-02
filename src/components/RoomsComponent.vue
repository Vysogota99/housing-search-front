<template>
<div class="rooms-container">
    <div class="rooms-content">
        <div class="row">
            <button @click="mapVisible = !mapVisible">Скрыть карту</button>
        </div>
        <div class="row">
            <div class="col-1"></div>
            <div class="col-10">
                <CardComponent/>
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
        </div>
    </transition>
</div>
</template>

<script>

import CardComponent from './subComponents/CardComponent.vue';
export default {
    components: {
        CardComponent,
    },
    data(){
        return{
            mapVisible: true,   
        }
    },
    methods: {
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
    height: 100vh;
    background-color: green;
}
.hidemap{
    flex-grow: 0;
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