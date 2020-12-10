<template>
    <div class="container">
        <div class="row top">
            <div>
                <button class="btn-back"> 
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-bar-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5zM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5z"/>
                    </svg>
                </button>
            </div>
            <div class="title1">Описание жилья</div>
            <div class="id">ID</div>
            <div class="ocintrovka">
                <button class="eye1 first"> 
                    <v-icon size="25" color="red">mdi-eye-off-outline</v-icon>
                </button>
                <button class="eye2 second">
                    <v-icon size="25" color="orange">mdi-email-outline</v-icon>
                </button>
                <button class="eye3 thrid">
                    <v-icon size="25" color="#512DE4">mdi-heart-outline</v-icon>
                </button>
                </div>
                </div>
                <div class="row middle">
                    <div class="adress-descr">Москва, САО, р-н Головинский, Кронштадтский бул., 6к3</div>
                    <div class="state-main">Занято</div>
                </div>
                <div class="row bot">
                    <div class="time-descr">Метро Юго-западная, 5 минут пешком</div>
                    <div class="places">5/8</div>
                </div>
                
                    <div class="row row-cols-auto">
                        <div class="col1">
                
                        </div>
                        <div class="col2">
                            <div class="block1">
                                <v-img src="https://cdnprs.wisconsin.dev/wp-content/uploads/2016/07/hawaii-howard-hughes-poolside.jpg" height="254" width="329"></v-img>
                            </div>
                            <div class="block2"></div>
                        </div>
                        <div class="col3">
                            <div class="block3"></div>
                            <div class="block4"></div>
                        </div>
                    </div>
          </div>
    
    
</template>

<script>

</script>

<style>
    .col3{
        padding: 0px;
        margin-left: 9px;
    }
    .col2{
        padding: 0px;
        margin-left: 10px;
    }
    .block1{
        width: 329px;
        height: 254px;
        left: 810px;
        top: 295px;
        overflow: hidden;
        background-size: cover;
    }
    .block2 {
        width: 329px;
        height: 254px;
        left: 810px;
        top: 295px;
        background: url("https://imgs.6sqft.com/wp-content/uploads/2018/05/10091557/23-East-22nd-Street-tom-brady-19.jpg") no-repeat;
        background-size: cover;
        margin-top:10px;
        
    }
    .block3 {
        height: 254px;
        width: 329px;
        left: 1148px;
        top: 295px;
        border-radius: 0px 15px 0px 0px;
        background: url("https://ic.pics.livejournal.com/mospenthouse/72296074/13585/13585_original.jpg") no-repeat;
        background-size: cover;
    }
    .block4 {
        height: 254px;
        width: 329px;
        left: 1148px;
        top: 559px;
        
        margin-top:10px;
        border-radius: 0px 0px 15px 0px;
        background: url("https://ural-meridian.ru/wp-content/uploads/2019/08/penthaus-s-bassejnom.jpg") no-repeat;
        background-size: cover;
    }
    .row-cols-auto{
    margin-left:123px;
    margin-top:37px;
    }
    .col1{  
        height: 518px;
        width: 677px;
        left: 123px;
        top: 295px;
        border-radius: 15px 0px 0px 15px;
        background: url("https://artofliving.sothebyshomes.com/wp-content/uploads/2016/11/0482DC09-EA6C-063E-589B-B0978895C6F8-1.jpg") no-repeat;
        background-size: cover;
        background-position: center;
    }
    
    .time-descr{
    font-family: sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
    margin-left:230px;
    
    text-align: start;
    }
    .places{
        font-weight: 700;
        color:#512DE4;
        font-size: 48px;
        align-items: center;
        line-height: 56px;
        margin-left:800px;
    }
    .bot{
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
        margin-top: 11px;
        align-items: center;

    }
    .ocintrovka{
        text-align: center;
    }
    .state-main{
        font-family: sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 21px;
        color: #000000;
        text-align: end;
        margin-left:26px;
        margin-top: 7px;
    }
    .top {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    margin-top: 0px;
    align-items: center;
    }
    .middle {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    margin-top: 0px;
    }
    .adress-descr {
        font-family: sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        color: #000000;
        height: 28px;
        width: 1108px;
        margin-left:230px;
        text-align: start;
    }
    .id{
        width: 23px;
        height: 28px;
        left: 605px;
        top: 146px;
        margin-left: 15px;
        font-family: sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        text-decoration-line: underline;
        color: rgba(81, 45, 228, 1);
    }
    .eye1 {
        background: #FFFFFF;
        border: 2px solid #B2B2B2;
        box-sizing: border-box;
        height: 50px;
        width: 50px;
        border-radius: 50px;
        margin-left: 589px;
        margin-bottom: 0px;
        margin-top:0px;
    }
  .eye2 {
        background: #FFFFFF;
        border: 2px solid #B2B2B2;
        box-sizing: border-box;
        height: 50px;
        width: 50px;
        border-radius: 50px;
        margin-left: 10px;
        margin-bottom: 0px;
    }
  .eye3 {
        background: #FFFFFF;
        border: 2px solid #B2B2B2;
        box-sizing: border-box;
        border-radius: 50px;
        height: 50px;
        width: 50px;
        margin-left: 10px;
        margin-bottom: 0px;
    }
    .title1 {
        font-style: normal;
        font-family: sans-serif;
        font-weight: 700;
        font-size: 48px;    
        color: black;
        margin-left: 15px;
    }
    .btn-back {
        height: 50px;
        width: 50px;
        border-radius: 50px;
        background: rgba(255, 255, 255, 1);
        border-style: solid;
        border-color:rgba(136, 136, 136, 1);
        margin-left: 162px;    
    }
    .bi {   
        height: 32px;
        width: 32px;
        border-radius: 0px;
        color: rgba(81, 45, 228, 1);
    }

</style>