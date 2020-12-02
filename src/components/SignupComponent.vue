<template>
<div class="container">
    <div class="row alert">
        <v-alert
            v-if="alerVisible"
            dense
            text
            v-bind:type="alertType"
        >
            {{alertText}}
        </v-alert>
    </div>
    <div class="row">
        <div class="col-4"><h1>Создание аккаунта</h1></div>
        <div class="col-8"></div>        
    </div>
    <br>
    <div class="row">
        <div class="col-4"><span>Имя</span></div>
        <div class="col-8">
            <input type="text" class="default-input" placeholder="введите имя" v-model="name">
            <v-icon 
                class="icon invisible"
                id="name-icon-success"
                color="green"
            >
                mdi-check-outline
            </v-icon>
            <span class="span-error invisible" id="name-icon-error">
                <v-icon 
                    class="icon"
                    color="#F36316"
                >
                    mdi-close-outline
                </v-icon>
                Заполните поле
            </span>
        </div>
    </div>
    <div class="row">
        <div class="col-4"><span>Фамилия</span></div>
        <div class="col-8">
            <input type="text" class="default-input" placeholder="введите фамилию" v-model="lastname">
            <v-icon 
                class="icon invisible"
                id="lastname-icon-success"
                color="green"
            >
                mdi-check-outline
            </v-icon>
            <span class="span-error invisible" id="lastname-icon-error">
                <v-icon 
                    class="icon"
                    color="#F36316"
                >
                    mdi-close-outline
                </v-icon>
                Заполните поле
            </span>
        </div>
    </div>
    <div class="row">
        <div class="col-4"><span>Отчество</span></div>
        <div class="col-8">
            <input type="text" class="default-input" placeholder="введите отчество" v-model="fName">
            <v-icon 
                class="icon invisible"
                id="fName-icon-success"
                color="green"
            >
                mdi-check-outline
            </v-icon>
            <span class="span-error invisible" id="fName-icon-error">
                <v-icon 
                    class="icon"
                    color="#F36316"
                >
                    mdi-close-outline
                </v-icon>
                Заполните поле
            </span>
        </div>
    </div>
    <div class="row">
        <div class="col-4"><span>Дата рождения</span></div>
        <div class="col-8" id="datebirth">
            <div class="inp-datebitrh">
                <v-select
                    class="default-input day"
                    :items="dayItems"
                    label="День"
                    v-model="dayBirth"
                ></v-select>
            </div>
            <div class="inp-datebitrh">
                <v-select
                    class="default-input month"
                    :items="monthItems"
                    label="месяц"
                    v-model="monthBirth"
                ></v-select>                
            </div>
            <div class="inp-datebitrh">
            <v-select
                class="default-input year"
                :items="yearItems"
                label="год"
                v-model="yearBirth"
            ></v-select>          
            </div>

            <v-icon 
                class="icon invisible"
                id="db-icon-success"
                color="green"
            >
                mdi-check-outline
            </v-icon>
            <span class="span-error invisible" id="db-icon-error">
                <v-icon 
                    class="icon"
                    color="#F36316"
                >
                    mdi-close-outline
                </v-icon>
                заполните дату
            </span>
        </div>
    </div>
    <div class="row">
        <div class="col-4"><span>Пол</span></div>
        <div class="col-8">            
            <div class="form_radio_group">
                <div class="form_radio_group-item">
                    <input id="male" type="radio" name="sex" checked value="male" v-model="sex">
                    <label for="male">Мужской</label>
                </div>
                <div class="form_radio_group-item">
                    <input id="female" type="radio" name="sex" value="female" v-model="sex">
                    <label for="female">Женский</label>
                </div>
            </div>
        </div>
    </div>
    <br>
    <div class="row">
        <div class="col-4"><span>Телефон</span></div>
        <div class="col-8">
            <input type="tel" class="default-input" placeholder="+7(800)555-35-35" v-model="telNumber">
            <v-icon 
                class="icon invisible"
                id="telNumber-icon-success"
                color="green"
            >
                mdi-check-outline
            </v-icon>
            <span class="span-error invisible" id="telNumber-icon-error">
                <v-icon 
                    class="icon"
                    color="#F36316"
                >
                    mdi-close-outline
                </v-icon>
                телефон набран некорректно
            </span>
        </div>
    </div>
    <div class="row">
        <div class="col-4 disabled"><span>E-mail</span></div>
        <div class="col-8">
            <input type="text" disabled class="default-input" placeholder="введите email">
        </div>
    </div>
    <div class="row">
        <div class="col-4 disabled"><span>Vk</span></div>
        <div class="col-8">
            <input type="text" disabled class="default-input" placeholder="введите vk id">
        </div>
    </div>
    <br>
    <div class="row">
        <div class="col-4"><span>Роль</span></div>
        <div class="col-8">            
            <div class="form_radio_group role">
                <div class="form_radio_group-item">
                    <input id="arendodatel" type="radio" name="role" value="1" v-model="role">
                    <label for="arendodatel">Арендодатель</label>
                </div>
                <div class="form_radio_group-item">
                    <input id="user" type="radio" name="role" value="2" v-model="role">
                    <label for="user">Арендатор</label>
                </div>
            </div>
        </div>
        
    </div>
    <div class="row">
        <div class="col-4"><span>Пароль</span></div>
        <div class="col-8">
            <input type="password" class="default-input" placeholder="Введите пароль" v-model="password">
            <v-icon 
                class="icon invisible"
                id="password-icon-success"
                color="green"
            >
                mdi-check-outline
            </v-icon>
            <span class="span-error invisible" id="password-icon-error">
                <v-icon 
                    class="icon"
                    color="#F36316"
                >
                    mdi-close-outline
                </v-icon>
                пароль слишком простой
            </span>
        </div>
    </div>
    <div class="row">
        <div class="col-4"><span>Пароль еще раз</span></div>
        <div class="col-8">
            <input type="password" class="default-input" placeholder="Повторите пароль" v-model="passwordRep">
            <v-icon 
                class="icon invisible"
                id="passwordRep-icon-success"
                color="green"
            >
                mdi-check-outline
            </v-icon>
            <span class="span-error invisible" id="passwordRep-icon-error">
                <v-icon 
                    class="icon"
                    color="#F36316"
                >
                    mdi-close-outline
                </v-icon>
                пароли не совпадают
            </span>
        </div>
    </div>
    <br>
    <div class="row">
        <div class="col-4"><span>Паспорт*</span></div>
        <div class="col-8">
            <button class="default-btn">Заполнить</button>
        </div>
    </div>
    <br>
    <div class="row alert">
    </div>
    <div class="row">
        <div class="col-4">
        </div>
        <div class="col-8">
            <button class="default-btn long" @click="signup()">Завершить регистрацию</button>
        </div>
    </div>
</div>
</template>
<script>
import axios from 'axios';
import {mapActions} from 'vuex'
export default {
    data: () => ({
        dayItems: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
        monthItems: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        yearItems: [],

        name: '',
        lastname: '',
        fName: '',
        sex: '',
        dayBirth: '',
        monthBirth: '',
        yearBirth: '',
        password: '',
        passwordRep: '',
        telNumber: '',
        role: '',

        nameValid: false,
        lastnameValid: false,
        fNameValid: false,
        sexValid: true,
        dayBirthValid: false,
        monthBirthValid: false,
        yearBirthValid: false,
        passwordValid: false,
        passwordRepValid: false,
        telNumberValid: false,
        roleValid: false,

        alertText: "Отлично, регистрация прошла успешно!",
        alertType: "success",
        alerVisible: false,

        apiUrl: "http://127.0.0.1/api",

        self: this,
    }),
    created: function() {
        this.setYears();
    },
    watch: {
        name: function(value) {
            let iconSuccess = document.getElementById('name-icon-success')
            let iconError = document.getElementById('name-icon-error')
            if(value.length > 0) {
                iconSuccess.classList.remove('invisible');
                iconError.classList.add('invisible');
                this.nameValid = true;
            }else{
                iconSuccess.classList.add('invisible');
                iconError.classList.remove('invisible');    
                this.nameValid = false;
            }
        },

        lastname: function(value) {
            let iconSuccess = document.getElementById('lastname-icon-success')
            let iconError = document.getElementById('lastname-icon-error')
            if(value.length > 0) {
                iconSuccess.classList.remove('invisible');
                iconError.classList.add('invisible');
                this.lastnameValid = true;
            }else{
                iconSuccess.classList.add('invisible');
                iconError.classList.remove('invisible');  
                this.lastnameValid = false;  
            }
        },

        fName: function(value) {
            let iconSuccess = document.getElementById('fName-icon-success')
            let iconError = document.getElementById('fName-icon-error')
            if(value.length > 0) {
                iconSuccess.classList.remove('invisible');
                iconError.classList.add('invisible');
                this.fNameValid = true;
            }else{
                iconSuccess.classList.add('invisible');
                iconError.classList.remove('invisible');  
                this.fNameValid = false;  
            }
        },

        telNumber: function(value) {
            let iconSuccess = document.getElementById('telNumber-icon-success')
            let iconError = document.getElementById('telNumber-icon-error')

            const reTelephone = /\+7\(\d{3}\)\d{3}-\d{2}-\d{2}/;
            let valid = reTelephone.test(this.telNumber)

            if(value.length > 0 && valid) {
                iconSuccess.classList.remove('invisible');
                iconError.classList.add('invisible');
                this.telNumberValid = true;
            }else{
                iconSuccess.classList.add('invisible');
                iconError.classList.remove('invisible');  
                this.telNumberValid = false;  
            }
        },

        password: function(value) {
            let iconSuccess = document.getElementById('password-icon-success')
            let iconError = document.getElementById('password-icon-error')
            if(value.length > 0) {
                console.log(value);
                iconSuccess.classList.remove('invisible');
                iconError.classList.add('invisible');  
                this.passwordValid = true;          
            }
            else{
                iconSuccess.classList.add('invisible');
                iconError.classList.remove('invisible');  
                this.passwordValid = false;  
            }
        },

        passwordRep: function(value) {
            let iconSuccess = document.getElementById('passwordRep-icon-success')
            let iconError = document.getElementById('passwordRep-icon-error')
            if(value == this.password) {
                iconSuccess.classList.remove('invisible');
                iconError.classList.add('invisible');   
                this.passwordValid = true;     
            }
            else{
                iconSuccess.classList.add('invisible');
                iconError.classList.remove('invisible');    
                this.passwordValid = false;
            }
        },

        dayBirth: function(value) {
            let iconSuccess = document.getElementById('db-icon-success')
            let iconError = document.getElementById('db-icon-error')
            if(value != '' && this.yearBirth != '' && this.monthBirth != '') {
                iconSuccess.classList.remove('invisible');
                iconError.classList.add('invisible');  
                this.dayBirthValid = true;    
                this.monthBirthValid = true; 
                this.yearBirthValid = true;
            }
            else{
                iconSuccess.classList.add('invisible');
                iconError.classList.remove('invisible');   
                this.dayBirthValid = false; 
            }
        },

        monthBirth: function(value) {
            let iconSuccess = document.getElementById('db-icon-success')
            let iconError = document.getElementById('db-icon-error')
            if(value != '' && this.yearBirth != '' && this.dayBirth != '') {
                iconSuccess.classList.remove('invisible');
                iconError.classList.add('invisible');   
                this.dayBirthValid = true;    
                this.monthBirthValid = true; 
                this.yearBirthValid = true;
            }
            else{
                iconSuccess.classList.add('invisible');
                iconError.classList.remove('invisible');    
                this.monthBirthValid = false;
            }
        },

        yearBirth: function(value) {
            let iconSuccess = document.getElementById('db-icon-success')
            let iconError = document.getElementById('db-icon-error')
            if(value != '' && this.dayBirth != '' && this.monthBirth != '') {
                iconSuccess.classList.remove('invisible');
                iconError.classList.add('invisible');    
                this.dayBirthValid = true;    
                this.monthBirthValid = true; 
                this.yearBirthValid = true;
            }
            else{
                iconSuccess.classList.add('invisible');
                iconError.classList.remove('invisible');   
                this.yearBirthValid = false; 
            }
        },

        role: function(value) {
            if(value.length != '') {
                this.roleValid = true;          
            }
            else{ 
                this.roleValid= false;  
            }
        },

        sex: function(value) {
            if(value.length != '') {
                this.sexValid = true;          
            }
            else{
                this.sexValid = false;  
            }
        },
    },
    methods: {
        ...mapActions(["loginUser"]),
        validate: function(){
            if(this.nameValid && this.lastnameValid && this.fNameValid && this.sexValid
                && this.dayBirthValid && this.monthBirthValid && this.yearBirthValid
                && this.passwordValid && this.telNumberValid && this.roleValid && this.sexValid) {
                    return true
                }else{ 
                    return false
                }
        },
        setYears: function(){
            let nowYear = 2020;
            for(let i = 0; i < 100; i++) {
                this.yearItems[i] = nowYear--;
            }
        },
        signup: function(){
            setTimeout(() => this.alerVisible = false, 2500);
            if(!this.validate()){
                this.alertText = "Поля не заполнены, или заполнены неверно";
                this.alertType = "warning";
                this.alerVisible = true; 
                return false;
            }
            
            
            this.alertText = "Все поля заполнены верно, начинаем регистрацию";
            this.alertType = "success";
            this.alerVisible = true;
            
            let User = {
                name: this.name,
                lastname: this.lastname,
                sex: this.sex,
                dateOfbirth: this.dayBirth + "." + Number(this.monthItems.indexOf(this.monthBirth) + 1) + "." + this.yearBirth,
                password: this.password,
                telephoneNumber: this.telNumber.replace(/[-]|[(]|[)]/gi, ''),
                Role: this.role,
            }

            const self = this;
            const headers ={
                'Content-Type': 'application/x-www-form-urlencoded',
            } 
            axios.post(this.apiUrl + '/signup', 
            User,
            {
                headers: headers,
            })
            
            .then(function(response){
                console.log(response);
                setTimeout(() => {
                        self.alerVisible = false;
                        self.loginUser({
                            telephoneNumber: self.telNumber.replace(/[-]|[(]|[)]/gi, ''),
                            password: self.password,    
                        });
                    }, 2500);

                self.alerVisible = true;
                self.alertType = 'success';
                self.alertText = 'Регистрация прошла успешно';
            }).catch(function(error){
                console.log(error.response);
                self.alertType = 'error';
                setTimeout(() => self.visible = false, 2500);

                if(error.response.data.error.includes("Пользователь с таким номером телефона уже существует")){
                    self.alerVisible = true;
                    self.alertType = 'warning';
                    self.alertText = 'Пользователь с таким номером телефона уже существует';
                }else{
                    self.alerVisible = true;
                    self.alertType = 'warning';
                    self.alertText = 'Внутренняя ошибка сервера'; 
                }

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

</style>