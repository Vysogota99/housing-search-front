<template>
    <div class="ad">
        <v-card-title>Объявление {{data.id}} </v-card-title>
         <v-card-subtitle>
             {{data.address}}
         </v-card-subtitle>
         <v-card-text>
         <ul>
            <li>
                <v-icon dark color="grey" class="ad_v-icon">
                    mdi-eye-plus-outline
                </v-icon>
                Количество просмотров <span>0</span>
            </li>
            <li>
                <v-icon dark color="grey" class="ad_v-icon"> 
                    mdi-thumb-up-outline
                </v-icon>
                Количество попаданий в избранное <span>0</span>
            </li>
            <li>
                <v-icon dark color="grey" class="ad_v-icon">
                    mdi-access-point
                </v-icon>
                Статус <span v-if="data.is_visible" class="green-span">видимое</span><span v-else class="red-span">скрытое</span>
            </li>
            <li>
                <v-icon dark color="grey" class="ad_v-icon">
                    mdi-plus
                </v-icon>
                Дата создания <span>{{convertDate(data.created_at)}}</span>
            </li>
            <li>
                <v-icon dark color="grey" class="ad_v-icon">
                    mdi-update
                </v-icon>
                Дата последнего обновления <span>{{convertDate(data.updated_at)}}</span>
            </li>
        </ul>
        <v-divider class="mx-4"></v-divider>
        </v-card-text> 
        <v-card-actions>
        <button class="default-btn btn-min-width">Открыть объявление</button>
        <router-link :to="{ name: 'create ad', params: { id: data.id, isConstruct: false }}">
            <button class="default-btn">Редактировать</button>
        </router-link>
    </v-card-actions>
    </div>
</template>

<script>
export default {
    data: function(){
        return{
        }
    },
    props: {
        data: {
            type: Object,
            required: true,
        }
    },
    methods: {
        convertDate: function(date) {
            let dt = new Date(date);
            return dt.getDay() + '.' + dt.getMonth() + '.' + dt.getFullYear()
        }
    },
}
</script>

<style>
.ad{
    border: 0px solid #512DE4;
    border-radius: 25px;
    width: 520px;
    height: 400px;
    margin: 5px;
    padding: 20px 15px;
    box-shadow:0px 1px 7px 0px rgba(0,0,0,0.45);
    -webkit-box-shadow:0px 1px 7px 0px rgba(0,0,0,0.45);
    -moz-box-shadow:0px 1px 7px 0px rgba(0,0,0,0.45);
}
.ad span{
    font-size: 18px;
}
.ad li {
    list-style: none; 
}
.green-span{
    color: green !important;
}
.red-span{
    color: red !important;
}
.ad_v-icon {
    margin-right: 10px;
}
.btn-min-width{
    min-width: 240px;
}
</style>