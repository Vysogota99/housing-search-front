<template>
<div class="container">
    <div class="row">
        <div class="col-4"><h1>Создание аккаунта</h1></div>
        <div class="col-8"></div>        
    </div>
    <br>
    <div class="row">
        <div class="col-4"><span>Имя</span></div>
        <div class="col-8">
            <input type="text" class="default-input" placeholder="введите имя">
        </div>
    </div>
    <div class="row">
        <div class="col-4"><span>Фамилия</span></div>
        <div class="col-8">
            <input type="text" class="default-input" placeholder="введите фамилию">
        </div>
    </div>
    <div class="row">
        <div class="col-4"><span>Отчество</span></div>
        <div class="col-8">
            <input type="text" class="default-input" placeholder="введите отчество">
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
                ></v-select>
            </div>
            <div class="inp-datebitrh">
                <v-select
                    class="default-input month"
                    :items="monthItems"
                    label="месяц"
                ></v-select>                
            </div>
            <div class="inp-datebitrh">
            <v-select
                class="default-input year"
                :items="yearItems"
                label="год"
            ></v-select>          
            </div>
            
        </div>
    </div>
    <div class="row">
        <div class="col-4"><span>Пол</span></div>
        <div class="col-8">            
            <div class="form_radio_group">
                <div class="form_radio_group-item">
                    <input id="male" type="radio" name="sex" checked>
                    <label for="male">Мужской</label>
                </div>
                <div class="form_radio_group-item">
                    <input id="female" type="radio" name="sex">
                    <label for="female">Женский</label>
                </div>
            </div>
        </div>
    </div>
    <br>
    <div class="row">
        <div class="col-4"><span>Телефон</span></div>
        <div class="col-8">
            <input type="tel" class="default-input" placeholder="+">
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
        <div class="col-4"><span>Паспорт*</span></div>
        <div class="col-8">
            <button class="default-btn">Заполнить</button>
        </div>
    </div>
    <div class="row">
        <div class="col-4">
        </div>
        <div class="col-8">
            <button class="default-btn long">Завершить регистрацию</button>
        </div>
    </div>
</div>
</template>
<script>
export default {
    data: () => ({
        dayItems: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
        monthItems: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        yearItems: [],
    }),
    created: function() {
        this.setYears();
        console.log(this.yearItems);
    },
    methods: {
        setYears: function(){
            let nowYear = 2020;
            for(let i = 0; i < 100; i++) {
                this.yearItems[i] = nowYear--;
            }
        }
    }
}
</script>

<style>
.container{
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
    border-radius: 99px;
    width: 294px;
    height: 46px;
    border: 2px solid #512DE4;
    padding: 8px 23px;
    color: #232323;
}
.default-btn{
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
	float: left;    
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

</style>