<template>
    <div class="login-container">
        <v-card
            class="surface"
            max-width="550"
        >
            <v-card-title>Авторизация</v-card-title>
            <br>
            <v-card-subtitle>
                Для получения доступа к защищенным страницам, необходимо авторизироваться по номеру телефона и паролю
            </v-card-subtitle>
            <v-card-text>
                <div class="login">
                    <input type="tel" class="default-input inf-inp" placeholder="+7(800)555-35-35" v-model="telNumber">
                </div>
                <div class="password">
                    <input type="password" class="default-input inf-inp" placeholder="Введите пароль" v-model="password">
                </div>
                <v-alert
                    :value="getLoginMessageVisible"
                    dense
                    outlined
                    v-bind:type="getLoginMessageType"
                >
                    {{getLoginMessage}}
                </v-alert>
                <div class="btns">
                    <button class="default-btn" @click="login()">войти</button>
                    <button class="default-btn l-btn">восстановить пароль</button>
                    
                </div>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
import {mapGetters, mapActions, mapMutations} from "vuex"

export default {
    data() {
        return{
            telNumber: "",
            password: "",
            apiUrl: "http://127.0.0.1/api"
        }
    },
    computed: mapGetters([
        "getLoginMessageVisible",
        "getLoginMessage",
        "getLoginMessageType"
        ]),
    methods: {
        ...mapActions(["loginUser"]),
        ...mapMutations([
            "updateLoginMessageType",
            "updateLoginMessageVisible",
            "updateLoginMessage"
        ]),
        validate: function(){
            const reTelephone = /\+7\(\d{3}\)\d{3}-\d{2}-\d{2}/;
            let valid = reTelephone.test(this.telNumber)
            if(!valid){
                this.updateLoginMessageType("error");
                this.updateLoginMessageVisible(true);
                this.updateLoginMessage("Некорректно набран номер!");
                return false;
            }

            if(this.password.length < 2) {
                this.updateLoginMessageType("error");
                this.updateLoginMessageVisible(true);
                this.updateLoginMessage("Пароль слишком короткий!");
                return false;
            }
            return true;
        },

        login: function(){
            if(!this.validate()){
                console.log('not valid');
                return;
            }

            this.loginUser({
                telephoneNumber: this.telNumber.replace(/[-]|[(]|[)]/gi, ''),
                password: this.password,          
            })
        }
    }
}
</script>

<style>
.login-container{
    width: 100%;
    padding: 0px 100px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    background-blend-mode: saturation;
    background-attachment: fixed;
    min-height: 100vh;
    background-image: url("../assets/login_picture.jpg");
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
}
.login, .password, .btns {
    margin-bottom: 15px;
}
.l-btn{
    width: 267px;
}
.inf-inp{
    width: 100%;
}
.v-sheet.v-card {
    border-radius: 15px;
}
.surface{
    padding: 15px 25px;
}
</style>