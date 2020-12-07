<template>
     <div class="images-block">
        <div class="image-block-img t-l">
            <v-img
                src="http://127.0.0.1/api/images/lot2_room1_1.jpeg"
                height="120"
                width="120"
                class="grey darken-4"
            ></v-img>
        </div>
        <div class="image-block-img t-r">
            <v-img
                src="http://127.0.0.1/api/images/test_lot_1.jpg"
                height="120"
                width="120"
                class="grey darken-4"
            ></v-img>
        </div>
        <div class="image-block-img b-l">
            <v-img
                src="http://127.0.0.1/api/images/test_lot_2.jpg"
                height="120"
                width="120"
                class="grey darken-4"
            ></v-img>
        </div>
        <div class="image-block-img b-r">
            <v-img
                src="http://127.0.0.1/api/images/test_lot_3.jpg"
                height="120"
                width="120"
                class="grey darken-4"
            ></v-img>
        </div>
    </div>   
</template>

<script>
export default {
    
}
</script>

<style>
.images-block{
    width: 244px;
    height: 244px;
    border: 0px solid #512DE4;
    border-radius: 25px;
    overflow: hidden;

    display: flex;
    flex-flow: row wrap;
}
.image-block-img{
    height: 120px;
    width: 120px;
    background-color: rgb(208, 208, 208);
}
</style>