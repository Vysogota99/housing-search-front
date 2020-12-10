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
.alert{
    position: fixed;
    right: 150px;
    top: 100px;
    z-index: 10;
}
.container{
    margin-top: 190px;
    padding: 0px 100px;
    color:black;
}
.col-4{
    text-align: right;
}
h1{
    font-size: 48px;
}
span{
    font-size: 24px;
}
.default-input{
    background-color: #fff;
    border-radius: 99px;
    width: 294px;
    height: 46px;
    border: 2px solid #512DE4;
    padding: 8px 23px;
    color: #232323;
}
.default-btn{
    margin-right: 10px;
    border-radius: 99px;
    width: 180px;
    height: 50px;
    border: 2px solid #512DE4;
    background: linear-gradient(207.73deg, #512DE4 58.15%, #7130C4 89.84%);
    padding: 8px 23px;
    color: #fff;
}
.long{
    width: 450px;
}
#datebirth{
    display: flex;
    flex-flow: row wrap;
}
.icon{
    margin-left: 20px;
}
.day{
    width: 120px;
}
.month{
    width: 191px;
}
.yaer{
    width: 129px;
}
.inp-datebitrh{
    margin-right: 10px;
}
.form_radio_group {
	display: inline-block;
	overflow: hidden;
}
.form_radio_group-item {
	display: inline-block;
}
.form_radio_group input[type=radio] {
	display: none;
}
.form_radio_group label {
	display: inline-block;
	cursor: pointer;
	border-right: none;
	user-select: none;
    padding: 9px 21px;
    color: #232323;
    width: 128px;
    height: 46px;
    border: 2px solid #512DE4;
}
.role label{
    width: 150px;
}
.form_radio_group .form_radio_group-item:first-child label {
	border-radius: 99px 0 0 99px;
}
.form_radio_group .form_radio_group-item:last-child label {
	border-radius: 0px 99px 99px 0px;
}
 
/* Checked */
.form_radio_group input[type=radio]:checked + label {
	background: linear-gradient(207.73deg, #512DE4 58.15%, #7130C4 89.84%);
    color: #fff;
}
/* Disabled */
.form_radio_group input[type=radio]:disabled + label {
	background: #fff;
	color: #232323;
}
.disabled{
    color:dimgrey;
}
.span-error{
    color: #F36316;
}
.invisible{
    display: none;
}
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