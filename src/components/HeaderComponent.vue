<template>
    <header>
        <div class="header-container">
            <div class="logo">
                <a href="/">
                    <!-- <h1>HousingSearch</h1> -->
                </a>
            </div>
            <div class="links"></div>
            <div class="right-content">
                <ul class="hr">
                    <li>ДОБАВИТЬ ОБЪЯВЛЕНИЕ</li>
                </ul>
                <v-menu offset-y>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            fab
                            v-bind="attrs"
                            v-on="on"
                            color="#512DE4"
                        >
                            <v-icon
                                color="white"
                            >
                                mdi-account-circle-outline 
                            </v-icon>
                        </v-btn>
                    </template>

                    <v-list v-if="authStatus">
                        <v-list-item
                            v-for="(item, index) in itemsUser"
                            :key="index"
                        >
                                <router-link v-bind:to="item.url" v-if="item.url != '/logout'">
                                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                                </router-link>

                                <a v-else @click="logoutUser">
                                    {{item.title}}
                                </a>
                        </v-list-item>
                    </v-list>
                    <v-list v-else>
                        <v-list-item
                            v-for="(item, index) in itemsGuest"
                            :key="index"
                        >
                                <router-link v-bind:to="item.url">
                                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                                </router-link>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </div>
        </div>
    </header>
</template>
<script>

import {mapGetters, mapActions} from "vuex"

export default {
    data: () => ({
      itemsUser: [
        { 
            title: 'Профиль',
            url: '/account' 
        },
        { 
            title: 'Объявления',
            url: '/', 
        },
        { 
            title: 'Выход',
            url: '/logout',
        },
      ],
      itemsGuest: [
          {
              title: "Регистрация",
              url: "/signup",
          },
          {
              title: "Вход",
              url: "/login"
          }
      ]
    }),
    computed: {
        ...mapGetters([
            "authStatus",
        ]),
    },
    methods: {
        ...mapActions([
            "logoutUser",
        ])
    }
}
</script>
<style>
header{
    background-color: rgb(253, 253, 253);
    z-index: 10;
    position: fixed;
    width: 100%;
    padding-bottom: 0px;
    -webkit-box-shadow: -1px 2px 11px 0px rgba(0,0,0,0.32);
    -moz-box-shadow: -1px 2px 11px 0px rgba(0,0,0,0.32);
    box-shadow: -1px 2px 11px 0px rgba(0,0,0,0.32);
}
.header-container{
    padding: 0 150px;
    width: 100%;
    margin: 15px 0px 5px 0px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
}
.right-content{
    display: flex;
    flex-flow: row nowrap;
}
a{
    text-decoration: none;
    color: #232323;
}
h1{
    color: #232323;
}
a:hover{
    text-decoration: none;
}
ul.hr {
    font-size: 24px;
    margin-top: 10px;
    margin-right: 15px; /* Обнуляем значение отступов */
    padding: 4px; /* Значение полей */
   }
ul.hr li {
    font-weight: 400;
    color: #232323;
    display: inline; /* Отображать как строчный элемент */
    margin-right: 30px; /* Отступ слева */
}
</style>