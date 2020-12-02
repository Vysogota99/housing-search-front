<template>
    <div class="card">
        <div class="card-left-container">
            <div class="card-image">

            </div>
            <div class="card-descr-one">
                <h2>Описание жилья</h2>
                <h3>Коломенский проезд, 23к1 кв62</h3>
                <p>Критерий 1</p>
                <p>Критерий 2</p>
                <p>Критерий 3</p>
                <p>Критерий 4</p>
            </div>
        </div>
        <div class="card-descr-two">
            <p>Занято</p>
            <p><span class="n-living-places">3/4</span></p>
            <div class="card-descr-two-btns">
                <div class="btn-in-card">
                    <v-btn
                        class="mx-2"
                        fab
                        dark
                        large
                        color="#fff"
                    >
                        <v-icon
                            color="#512DE4"
                        >
                            mdi-eye-off-outline
                        </v-icon>
                    </v-btn>
                </div>
                <div class="btn-in-card">
                    <v-btn
                        class="mx-2"
                        fab
                        dark
                        large
                        color="#fff"

                    >
                        <v-icon
                            color="#512DE4"
                        >
                            mdi-heart-outline
                        </v-icon>
                    </v-btn>
                </div>
            </div>
            <p id="price">12500 	&#8381;/месяц</p>
            <div class="default-btn" id="open-lot">
                Подробнее
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
.card{
    min-width: 800px;
    min-height: 380px;
    border: 2px solid #512DE4;
    border-radius: 20px;
    padding: 20px;

    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
}
.card-left-container{
    display: flex;
    flex-flow: row wrap;
    justify-content: left;

    flex-grow: 2;
}
.card-image{
    background-color: #232323;
    min-width:385px;
    min-height: 350px;
    border-radius: 20px;
}
.card-descr-one{
    margin: 0px 15px;
    min-width: 200px;
}
.card-descr-one h2{
    font-size: 30px;
    font-weight: 700;
}
.card-descr-one h3{
    font-size: 18px;
    font-weight: 700;
    color: #535353;
    margin-bottom: 24px;
}
.v-application p {
    margin-bottom: 5px;
    font-size: 14px;
    font-weight: 400;
    color: #000;
}
.card-descr-two{
    flex-grow: 1;
    text-align: right;
    display: flex;
    flex-flow: column wrap;
    align-items: flex-end;
}
.n-living-places{
    font-weight: 700;
    color:#512DE4;
    font-size: 38px;
}
#price{
    font-weight: 700;
    font-size: 30px;
    color: #000;
}
.card-descr-two-btns{
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
    align-content:flex-end;
}
.btn-in-card{
    margin: 5px 0px;
}
#open-lot{
    padding: 12px 0px;
    text-align: center;
}
</style>