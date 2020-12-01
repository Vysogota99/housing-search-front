<template>
    <div class="login-container">
        <v-card
            class="surface"
            max-width="500"
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
                    :value="visible"
                    dense
                    outlined
                    v-bind:type="type"
                >
                    {{message}}
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
import axios from 'axios'
export default {
    data() {
        return{
            visible: false,
            message: "Неправильный номер телефона или пароль",
            telNumber: "",
            password: "",
            type: 'error',
            apiUrl: "http://127.0.0.1/api"
        }
    },
    methods: {
        validate: function(){
            const reTelephone = /\+7\(\d{3}\)\d{3}-\d{2}-\d{2}/;
            let valid = reTelephone.test(this.telNumber)
            if(!valid){
                this.type = 'error';
                this.visible = true;
                this.message = 'Некорректно набран номер!';
                return false;
            }

            if(this.password.length < 5) {
                this.type = 'error';
                this.visible = true;
                this.message = 'Пароль слишком короткий!';
                return false;
            }

            this.telNumber = this.telNumber.replace(/[-]|[(]|[)]/gi, '');
            return true;
        },

        login: function(){
            if(!this.validate()){
                console.log('not valid');
                return;
            }

            const self = this;
            const headers ={
                'Content-Type': 'application/x-www-form-urlencoded',
            } 
            axios.post(this.apiUrl + '/login', 
            {
                    telephoneNumber: this.telNumber,
                    password: this.password,
            },
            {
                headers: headers,
            })
            .then(function(response){
                console.log(response);
                setTimeout(() => {
                        self.visible = false;
                    }, 2000);
                self.visible = true;
                self.type = 'success'
                self.message = 'Готово'
            }).catch(function(error){
                const status = error.response.status
                self.type = 'error';
                setTimeout(() => self.visible = false, 2000);

                if(status == '422') {
                    self.visible = true;
                    self.message = 'Поля заполнены неправильно!';
                }else 
                if(status == '500') {
                    self.visible = true;
                    self.message = 'Внутрення ошибка сервера';
                }else 
                if(status == '401') {
                    self.visible = true;
                    self.message = 'Неправильный логин или пароль';   
                }
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
</style>