<template>
    <div class="container-fluid">
        <div class="container">
            <div class="row">
                <div class="col-3"></div>
                <div class="col-6 pb-0 address">
                    <h5>Адрес</h5>
                </div>
                <div class="col-3"></div>
            </div>
            <div class="row">
                <div class="col-3"></div>
                <div class="col-6">
                    <input   v-model='Address' @input="SearchAddress()" type="text" class="form-control" id="formGroupExampleInput" placeholder="Введите адрес">
                </div>
                <div class="col-3"></div>
            </div>    
        </div>
        <div id="map" style="width:1362px; height:500px; position:relative;"></div>
        <hr>
        <div class="info_container">
            <div style='flex-direction: row;' class="about_object">
                <div class="about_object_col1">
                    <h5>Об объекте</h5>
                    
                    <div class="about_object_pos">
                        <h10>Количество комнат</h10>

                        <svg @click="RoomCountDec()" class="pm_mark left" width="30" height="30" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="30" height="30" transform="translate(-2 -2)" fill="white"/>
                                <path d="M16 22V24H30V22H16Z" fill="url(#paint0_linear)"/>
                            <defs>
                                <linearGradient id="paint0_linear" x1="27.4872" y1="24" x2="27.2966" y2="21.4617" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.621164" stop-color="#512DE4"/>
                                    <stop offset="1" stop-color="#7130C4"/>
                                </linearGradient>
                            </defs>
                        </svg>
                        <span>{{RoomCount}}</span>
                        <svg @click="RoomCountInc()" class="pm_mark right" width="30" height="30" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="30" height="30" transform="translate(-2 -2)" fill="white"/>
                                <path d="M24 24V30H22V24H16V22H22V16H24V22H30V24H24Z" fill="url(#paint0_linear)"/>
                            <defs>
                                <linearGradient id="paint0_linear" x1="27.4872" y1="16" x2="20.1282" y2="30" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.621164" stop-color="#512DE4"/>
                                    <stop offset="1" stop-color="#7130C4"/>
                                </linearGradient>
                            </defs>
                        </svg>

                        <svg class="q_mark" width="18px" height="18px" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.0014 28C6.27216 27.9915 0.00848817 21.7285 0 14V13.72C0.153919 6.02636 6.48907 -0.100836 14.1844 0.0012575C21.8796 0.103351 28.05 6.39646 27.9997 14.0915C27.9494 21.7865 21.6974 27.9985 14.0014 28ZM13.979 25.2H14.0014C20.1854 25.1938 25.1944 20.1778 25.1913 13.9944C25.1882 7.81102 20.1742 2.80003 13.9902 2.80003C7.80618 2.80003 2.79217 7.81102 2.78908 13.9944C2.78599 20.1778 7.79498 25.1938 13.979 25.2ZM15.4015 22.4H12.6013V19.6H15.4015V22.4ZM15.4015 18.2H12.6013C12.557 16.3767 13.5059 14.6731 15.0795 13.7508C16.0036 13.0424 16.8017 12.432 16.8017 11.2C16.8017 9.65362 15.5479 8.40002 14.0014 8.40002C12.4548 8.40002 11.2011 9.65362 11.2011 11.2H8.40084V11.074C8.42335 9.07333 9.51161 7.23663 11.2557 6.25578C12.9998 5.27493 15.1347 5.29894 16.8562 6.31878C18.5778 7.33861 19.6245 9.19933 19.602 11.2C19.5017 12.7106 18.6914 14.0844 17.4177 14.903C16.2664 15.6257 15.5202 16.846 15.4015 18.2Z" fill="url(#paint0_linear)"/>
                            <defs>
                                <linearGradient id="paint0_linear" x1="22.9744" y1="9.05708e-07" x2="8.25641" y2="28" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.621164" stop-color="#512DE4"/>
                                    <stop offset="1" stop-color="#7130C4"/>
                                </linearGradient>
                            </defs>
                        </svg>

                    </div>
                    
                    <div class="about_object_pos">
                        <h10>Площадь</h10>
                        <input v-model='area' type="text" class="about_object_input" placeholder="Введите площадь" style="">
                        <h10 class="meter">м2</h10>
                        
                    </div>

                    <div class="about_object_pos renovation">
                        <h10>Ремонт</h10>
                        <div class="btn-group renovation_btn" role="group" aria-label="Basic example">
                            <button @click="repair_1(); Activate1()" v-bind:class="{active:isActive1}" type="button"  class="left_btn1 ">Косметический</button>
                            <button  @click="repair_2(); Activate2()" v-bind:class="{active:isActive2}" type="button" class="middle_btn1">Евро</button>
                            <button  @click="repair_3(); Activate3()" v-bind:class="{active:isActive3}" type="button" class="middle_btn1">Дизайнерский</button>
                            <button  @click="repair_4(); Activate4()" v-bind:class="{active:isActive4}" type="button" class="right_btn1">Без ремонта</button>
                        </div>
                        
                        
                    </div>

                    <div class="about_object_pos">
                        <h10>Этаж</h10>
                        <input v-model='floor' type="text" class="about_object_input" placeholder="Введите номер этажа">
                        
                    </div>

                    <div class="about_object_pos">
                        <h10>Этажей в доме</h10>
                        <input v-model='floor_total' type="text" class="about_object_input" style="width:195px;" placeholder="Введите кол-во этажей">
                        
                    </div>
                </div>
                <div style='display:flex; flex-direction: column; margin-left:auto; margin-right:75px;' class="about_object_col2">
                    <div class="form-check form-check-inline" style="margin-top:100px; margin-right:204px;">
                        <input v-model='passenger_elevator' class="form-check-input" style="width: 18px; height: 18px;" type="checkbox" id="inlineCheckbox1" value="option1">
                        <label class="form-check-label" for="inlineCheckbox1">Пассажирский лифт</label>
                    </div>
                    <div class="form-check form-check-inline" style="margin-top:20px; margin-right:247px;">
                        <input v-model='serve_elevator' class="form-check-input" style="width: 18px; height: 18px;" type="checkbox" id="inlineCheckbox2" value="option1">
                        <label class="form-check-label" for="inlineCheckbox2">Грузовой лифт</label>
                    </div>
                    <div class="form-check form-check-inline" style="margin-top:20px; margin-right:284px;">
                        <input class="form-check-input" style="width: 18px; height: 18px;" type="checkbox" id="inlineCheckbox3" value="option1">
                        <label class="form-check-label" for="inlineCheckbox2">Парковка</label>
                    </div>
                    <div class="form-check form-check-inline" style="margin-top:20px; margin-right:217px">
                        <input class="form-check-input" style="width: 18px; height: 18px;" type="checkbox" id="inlineCheckbox4" value="option1">
                        <label class="form-check-label" for="inlineCheckbox2">Платная парковка</label>
                    </div>
                </div>
            </div>
            <hr>
            <div class="facilities">
                <h5>Удобства</h5>
                <div class="kitchen_fac">
                    <div class="kitchen_fac_col1">
                        <div style="margin-left: 18px;" class="kitchen_fac_option">
                            <input v-model='bathroom' class="form-check-input" style="width: 18px; height: 18px;" type="checkbox" id="inlineCheckbox5" value="option1">
                            <label class="form-check-label" for="inlineCheckbox5">Ванная</label>
                        </div>
                        <div style="margin-left: 18px;" class="kitchen_fac_option">
                            <input class="form-check-input" style="width: 18px; height: 18px;" type="checkbox" id="inlineCheckbox6" value="option1">
                            <label class="form-check-label" for="inlineCheckbox6">Туалет</label>
                        </div>

                        <div style="margin-left: 18px;" class="kitchen_fac_option">
                            <input v-model='kitchen' class="form-check-input" style="width: 18px; height: 18px;" type="checkbox" id="inlineCheckbox7" value="option1">
                            <label class="form-check-label" for="inlineCheckbox7">Кухня</label>
                        </div>

                        <div style="margin-left: 18px;" class="kitchen_fac_option">
                            <input v-model='refrigerator' class="form-check-input" style="width: 18px; height: 18px;" type="checkbox" id="inlineCheckbox8" value="option1">
                            <label class="form-check-label" for="inlineCheckbox8">Холодильник</label>
                        </div>

                        <div style="margin-left: 18px;" class="kitchen_fac_option">
                            <input v-model='vacuum_cleaner' class="form-check-input" style="width: 18px; height: 18px;" type="checkbox" id="inlineCheckbox9" value="option1">
                            <label class="form-check-label" for="inlineCheckbox9">Пылесос</label>
                        </div>

                        <div style="margin-left: 18px;" class="kitchen_fac_option">
                            <input  class="form-check-input" style="width: 18px; height: 18px;" type="checkbox" id="inlineCheckbox10" value="option1">
                            <label class="form-check-label" for="inlineCheckbox10">Микроволновка</label>
                        </div>
                    </div>

                    <div class="kitchen_fac_col2">
                        <div style="margin-left: 18px;" class="kitchen_fac_option">
                            <input v-model='stove_1' class="form-check-input" style="width: 18px; height: 18px;" type="checkbox" id="inlineCheckbox11" value="option1">
                            <label class="form-check-label" for="inlineCheckbox11">Газовая плита</label>
                        </div>
                        <div style="margin-left: 18px;" class="kitchen_fac_option">
                            <input v-model='stove_2' class="form-check-input" style="width: 18px; height: 18px;" type="checkbox" id="inlineCheckbox12" value="option1">
                            <label class="form-check-label" for="inlineCheckbox12">Электрическая плита</label>
                        </div>

                        <div style="margin-left: 18px;" class="kitchen_fac_option">
                            <input v-model='stove_3' class="form-check-input" style="width: 18px; height: 18px;" type="checkbox" id="inlineCheckbox13" value="option1">
                            <label class="form-check-label" for="inlineCheckbox13">Индукционная плита</label>
                        </div>

                        <div style="margin-left: 18px;" class="kitchen_fac_option">
                            <input class="form-check-input" style="width: 18px; height: 18px;" type="checkbox" id="inlineCheckbox14" value="option1">
                            <label class="form-check-label" for="inlineCheckbox14">Стиральная машина</label>
                        </div>

                        <div style="margin-left: 18px;" class="kitchen_fac_option">
                            <input v-model='dryer' class="form-check-input" style="width: 18px; height: 18px;" type="checkbox" id="inlineCheckbox15" value="option1">
                            <label class="form-check-label" for="inlineCheckbox15">Сушильная машина</label>
                        </div>

                        <div style="margin-left: 18px;" class="kitchen_fac_option">
                            <input v-model='dishwasher' class="form-check-input" style="width: 18px; height: 18px;" type="checkbox" id="inlineCheckbox16" value="option1">
                            <label class="form-check-label" for="inlineCheckbox16">Посудомоечная машина</label>
                        </div>
                    </div>

                    <div class="kitchen_fac_col3">
                        <div style="margin-left: 18px;" class="kitchen_fac_option">
                            <input v-model='internet' class="form-check-input" style="width: 18px; height: 18px;" type="checkbox" id="inlineCheckbox17" value="option1">
                            <label class="form-check-label" for="inlineCheckbox17">Интернет</label>
                        </div>
                        <div style="margin-left: 18px;" class="kitchen_fac_option">
                            <input class="form-check-input" style="width: 18px; height: 18px;" type="checkbox" id="inlineCheckbox18" value="option1">
                            <label class="form-check-label" for="inlineCheckbox18">Wi-Fi</label>
                        </div>


                        <div style="margin-left: 18px;" class="kitchen_fac_option">
                            <input v-model='heating_1' class="form-check-input" style="width: 18px; height: 18px;" type="checkbox" id="inlineCheckbox19" value="option1">
                            <label class="form-check-label" for="inlineCheckbox19">Центральное отопление</label>
                        </div>

                        <div style="margin-left: 18px;" class="kitchen_fac_option">
                            <input v-model='heating_2' class="form-check-input" style="width: 18px; height: 18px;" type="checkbox" id="inlineCheckbox20" value="option1">
                            <label class="form-check-label" for="inlineCheckbox20">Отдельное отопление</label>
                        </div>

                        
                    </div>
        

                </div>
                
                
            </div>
            <hr>
            <div class="flat_rules">
                <h5>Правила</h5>
                <div class="flat_rules_columns">
                    <div class="flat_rules_col1">
                        <div style="margin-left: 18px;" class="kitchen_fac_option">
                            <input v-model='smoking' class="form-check-input default" style="width: 18px; height: 18px;" type="checkbox" id="inlineCheckbox21" value="option1">
                            <label class="form-check-label" for="inlineCheckbox21">Можно курить</label>
                        </div>
                        <div style="margin-left: 18px;" class="kitchen_fac_option">
                            <input class="form-check-input" style="width: 18px; height: 18px;" type="checkbox" id="inlineCheckbox22" value="option1">
                            <label class="form-check-label" for="inlineCheckbox22">Можно с детьми</label>
                        </div>
                        <div style="margin-left: 18px;" class="kitchen_fac_option">
                            <input v-model='animals' class="form-check-input" style="width: 18px; height: 18px;" type="checkbox" id="inlineCheckbox23" value="option1">
                            <label class="form-check-label" for="inlineCheckbox23">Можно с животными</label>
                        </div>
                    </div>
                    <!-- <div class="flat_rules_col2">
                        <h10>Пол</h10>
                        <div class="btn-group-sm flat_rules_btn" style="height: 31px;" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-default left_btn">Мужской</button>
                            <button type="button" class="btn btn-default middle_btn">Женский</button>
                            <button type="button" class="btn btn-default right_btn">Не важно</button>
                        </div>
                    </div> -->
                </div>
            </div>
            <hr>
            <div class="create_room">
                <h5>Отредактируйте комнаты</h5>
                <br/>
                <!---------------------------------- Квартира 1 --------------------->
                <div v-if="RoomCount>0" class="create_room_form" style="margin-bottom: 20px;">
                    <h4 style="margin: 10px;">Комната 1
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.1018 20C0.793953 19.9995 0.500482 19.8696 0.292992 19.6421C0.081675 19.4165 -0.0233291 19.1114 0.0043654 18.8035L0.273238 15.8462L12.694 3.42635L16.5757 7.30796L4.15817 19.7267L1.20167 19.9956C1.16765 19.9989 1.13363 20 1.1018 20ZM17.3505 6.53185L13.4699 2.65025L15.7976 0.321952C16.0034 0.115822 16.2828 0 16.574 0C16.8653 0 17.1446 0.115822 17.3505 0.321952L19.6781 2.65025C19.8842 2.85615 20 3.13555 20 3.4269C20 3.71825 19.8842 3.99765 19.6781 4.20355L17.3516 6.53076L17.3505 6.53185Z" fill="url(#paint0_linear)"/>
                        <defs>
                        <linearGradient id="paint0_linear" x1="16.4103" y1="6.46934e-07" x2="5.89744" y2="20" gradientUnits="userSpaceOnUse">
                        <stop offset="0.621164" stop-color="#512DE4"/>
                        <stop offset="1" stop-color="#7130C4"/>
                        </linearGradient>
                        </defs>
                        </svg>
                    </h4>
                    <div class="create_room_form_columns">
                        <div class="create_room_form_col1">
                            <div style="width: 200px; height: 150px;border: 2px solid #7130C4; border-radius: 20px;margin-left: 5px;margin-top: 5px;">

                                <div style='display:flex; flex-direction:row;' class="pictureInputRow">
                                    <picture-input 
                                        style = 'width 100px; height 100px; border: 2px solid #7130C4; border-radius: 15px 0px 0px 0px;' 
                                        ref="pictureInput"
                                        width="220" 
                                        height="170" 
                                        margin="1" 
                                        accept="image/jpeg,image/png" 
                                        size="3"
                                        radius="5"
                                        button-class="btn3"
                                        :hideChangeButton="true"
                                        :custom-strings="{
                                            upload: '<h1>Bummer!</h1>',
                                            drag: 'Перетащите фотографию или нажмите для обзора',
                                            change: '',
                                        }"
                                        @change="RoomOneonChange1">
                                    </picture-input>
                                     <picture-input 
                                        style = 'width 100px; height 100px; border: 2px solid #7130C4; border-radius: 0px 15px 0px 0px'
                                        ref="pictureInput"
                                        width="220" 
                                        height="170" 
                                        margin="1" 
                                        accept="image/jpeg,image/png" 
                                        size="3"
                                        radius="5"
                                        button-class="btn3"
                                        :hideChangeButton="true"
                                        :custom-strings="{
                                            upload: '<h1>Bummer!</h1>',
                                            drag: 'Перетащите фотографию или нажмите для обзора',
                                            change: '',
                                        }"
                                        @change="RoomOneonChange2">
                                    </picture-input>
                                </div>
                                <div style='display:flex; flex-direction:row;' class="pictureInputRow">
                                    <picture-input 
                                        style = 'width 100px; height 100px; border: 2px solid #7130C4; border-radius: 0px 0px 0px 18px'
                                        ref="pictureInput"
                                        width="220" 
                                        height="170" 
                                        margin="1" 
                                        accept="image/jpeg,image/png" 
                                        size="3"
                                        radius="6"
                                        button-class="btn3"
                                        :hideChangeButton="true"
                                        :custom-strings="{
                                            drag: 'Перетащите фотографию или нажмите для обзора',
                                        }"
                                        @change="RoomOneonChange3">
                                    </picture-input>
                                     <picture-input 
                                        ref="pictureInput"
                                        style = 'width 100px; height 50px; border: 2px solid #7130C4; border-radius: 0px 0px 18px 0px'
                                        width="220" 
                                        height="170" 
                                        margin="1" 
                                        accept="image/jpeg,image/png" 
                                        size="3"
                                        radius="6"
                                        button-class="btn3"
                                        :hideChangeButton="true"
                                        :custom-strings="{
                                            upload: '<h1>Bummer!</h1>',
                                            drag: 'Перетащите фотографию или нажмите для обзора',
                                            change: '',
                                        }"
                                        @change="RoomOneonChange4">
                                    </picture-input>
                                </div>
                                
                            </div>
                            <div style="margin-left: 26px;margin-top: 5px;" class="create_room_form_option">
                                    <input  @change='Room_One.num_of_windows = !Room_One.num_of_windows' class="form-check-input" style="width: 18px; height: 18px;" type="checkbox" id="inlineCheckbox24" value="option1">
                                    <label class="form-check-label" style="padding-top: 6px;" for="inlineCheckbox24">Окна</label>
                            </div>
                            <div style="margin-left: 26px;margin-top: 5px;" class="create_room_form_option">
                                    <input  @change='Room_One.tv = !Room_One.tv' class="form-check-input" style="width: 18px; height: 18px;" type="checkbox" id="inlineCheckbox25" value="option1">
                                    <label class="form-check-label" style="padding-top: 6px;" for="inlineCheckbox25">Телевизор</label>
                            </div>
                            <div style="margin-left: 26px;margin-top: 5px;" class="create_room_form_option">
                                    <input  @change='Room_One.balcony = !Room_One.balcony' class="form-check-input" style="width: 18px; height: 18px;" type="checkbox" id="inlineCheckbox26" value="option1">
                                    <label class="form-check-label" style="padding-top: 6px;" for="inlineCheckbox26">Балкон</label>
                            </div>
                            <div style="margin-left: 26px; margin-top: 5px; margin-bottom: 10px;" class="create_room_form_option">
                                    <input class="form-check-input" style="width: 18px; height: 18px;" type="checkbox" id="inlineCheckbox27" value="option1">
                                    <label class="form-check-label" style="padding-top: 6px;" for="inlineCheckbox27">Кондиционер</label>
                            </div>
                        </div>
                        <div class="create_room_form_col2">
                            <p style="text-align: end; padding-top: 3px; font-weight: bold;">Максимальное количество жильцов</p>
                            <p style="text-align: end;">Односпальных кроватей</p>
                            <p style="text-align: end;"> Двуспальных кроватей</p>
                            <p style="text-align: end;">Столов</p>
                            <p style="text-align: end;">Стульев</p>
                            <p style="text-align: end;">Площадь</p>

                        </div>
                        <div class="create_room_form_col3" style="">
                            <div class="create_room_form_option" style="">
                                <svg @click="MaxLiversDec()" class="pm_mark left" width="30" height="30" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="30" height="30" transform="translate(-2 -2)" fill="white"/>
                                        <path d="M16 22V24H30V22H16Z" fill="url(#paint0_linear)"/>
                                    <defs>
                                        <linearGradient id="paint0_linear" x1="27.4872" y1="24" x2="27.2966" y2="21.4617" gradientUnits="userSpaceOnUse">
                                            <stop offset="0.621164" stop-color="#512DE4"/>
                                            <stop offset="1" stop-color="#7130C4"/>
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <span>{{Room_One.MaxLivers}}</span>
                                <svg @click="MaxLiversInc()" class="pm_mark right" width="30" height="30" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="30" height="30" transform="translate(-2 -2)" fill="white"/>
                                        <path d="M24 24V30H22V24H16V22H22V16H24V22H30V24H24Z" fill="url(#paint0_linear)"/>
                                    <defs>
                                        <linearGradient id="paint0_linear" x1="27.4872" y1="16" x2="20.1282" y2="30" gradientUnits="userSpaceOnUse">
                                            <stop offset="0.621164" stop-color="#512DE4"/>
                                            <stop offset="1" stop-color="#7130C4"/>
                                        </linearGradient>
                                    </defs>
                                </svg>

                                <svg class="q_mark" width="18px" height="18px" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.0014 28C6.27216 27.9915 0.00848817 21.7285 0 14V13.72C0.153919 6.02636 6.48907 -0.100836 14.1844 0.0012575C21.8796 0.103351 28.05 6.39646 27.9997 14.0915C27.9494 21.7865 21.6974 27.9985 14.0014 28ZM13.979 25.2H14.0014C20.1854 25.1938 25.1944 20.1778 25.1913 13.9944C25.1882 7.81102 20.1742 2.80003 13.9902 2.80003C7.80618 2.80003 2.79217 7.81102 2.78908 13.9944C2.78599 20.1778 7.79498 25.1938 13.979 25.2ZM15.4015 22.4H12.6013V19.6H15.4015V22.4ZM15.4015 18.2H12.6013C12.557 16.3767 13.5059 14.6731 15.0795 13.7508C16.0036 13.0424 16.8017 12.432 16.8017 11.2C16.8017 9.65362 15.5479 8.40002 14.0014 8.40002C12.4548 8.40002 11.2011 9.65362 11.2011 11.2H8.40084V11.074C8.42335 9.07333 9.51161 7.23663 11.2557 6.25578C12.9998 5.27493 15.1347 5.29894 16.8562 6.31878C18.5778 7.33861 19.6245 9.19933 19.602 11.2C19.5017 12.7106 18.6914 14.0844 17.4177 14.903C16.2664 15.6257 15.5202 16.846 15.4015 18.2Z" fill="url(#paint0_linear)"/>
                                    <defs>
                                        <linearGradient id="paint0_linear" x1="22.9744" y1="9.05708e-07" x2="8.25641" y2="28" gradientUnits="userSpaceOnUse">
                                            <stop offset="0.621164" stop-color="#512DE4"/>
                                            <stop offset="1" stop-color="#7130C4"/>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <div class="create_room_form_option">
                                <svg @click="OneMenBedDec()" class="pm_mark left" width="30" height="30" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="30" height="30" transform="translate(-2 -2)" fill="white"/>
                                        <path d="M16 22V24H30V22H16Z" fill="url(#paint0_linear)"/>
                                    <defs>
                                        <linearGradient id="paint0_linear" x1="27.4872" y1="24" x2="27.2966" y2="21.4617" gradientUnits="userSpaceOnUse">
                                            <stop offset="0.621164" stop-color="#512DE4"/>
                                            <stop offset="1" stop-color="#7130C4"/>
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <span>{{Room_One.OneMenBed}}</span>
                                <svg @click="OneMenBedInc()" class="pm_mark right" width="30" height="30" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="30" height="30" transform="translate(-2 -2)" fill="white"/>
                                        <path d="M24 24V30H22V24H16V22H22V16H24V22H30V24H24Z" fill="url(#paint0_linear)"/>
                                    <defs>
                                        <linearGradient id="paint0_linear" x1="27.4872" y1="16" x2="20.1282" y2="30" gradientUnits="userSpaceOnUse">
                                            <stop offset="0.621164" stop-color="#512DE4"/>
                                            <stop offset="1" stop-color="#7130C4"/>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                             <div class="create_room_form_option">
                                <svg @click="TwoMenBedDec()" class="pm_mark left" width="30" height="30" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="30" height="30" transform="translate(-2 -2)" fill="white"/>
                                        <path d="M16 22V24H30V22H16Z" fill="url(#paint0_linear)"/>
                                    <defs>
                                        <linearGradient id="paint0_linear" x1="27.4872" y1="24" x2="27.2966" y2="21.4617" gradientUnits="userSpaceOnUse">
                                            <stop offset="0.621164" stop-color="#512DE4"/>
                                            <stop offset="1" stop-color="#7130C4"/>
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <span>{{Room_One.TwoMenBed}}</span>
                                <svg @click="TwoMenBedInc()" class="pm_mark right" width="30" height="30" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="30" height="30" transform="translate(-2 -2)" fill="white"/>
                                        <path d="M24 24V30H22V24H16V22H22V16H24V22H30V24H24Z" fill="url(#paint0_linear)"/>
                                    <defs>
                                        <linearGradient id="paint0_linear" x1="27.4872" y1="16" x2="20.1282" y2="30" gradientUnits="userSpaceOnUse">
                                            <stop offset="0.621164" stop-color="#512DE4"/>
                                            <stop offset="1" stop-color="#7130C4"/>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                             <div class="create_room_form_option">
                                <svg @click="TableCountDec()" class="pm_mark left" width="30" height="30" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="30" height="30" transform="translate(-2 -2)" fill="white"/>
                                        <path d="M16 22V24H30V22H16Z" fill="url(#paint0_linear)"/>
                                    <defs>
                                        <linearGradient id="paint0_linear" x1="27.4872" y1="24" x2="27.2966" y2="21.4617" gradientUnits="userSpaceOnUse">
                                            <stop offset="0.621164" stop-color="#512DE4"/>
                                            <stop offset="1" stop-color="#7130C4"/>
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <span>{{Room_One.TableCount}}</span>
                                <svg @click="TableCountInc()" class="pm_mark right" width="30" height="30" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="30" height="30" transform="translate(-2 -2)" fill="white"/>
                                        <path d="M24 24V30H22V24H16V22H22V16H24V22H30V24H24Z" fill="url(#paint0_linear)"/>
                                    <defs>
                                        <linearGradient id="paint0_linear" x1="27.4872" y1="16" x2="20.1282" y2="30" gradientUnits="userSpaceOnUse">
                                            <stop offset="0.621164" stop-color="#512DE4"/>
                                            <stop offset="1" stop-color="#7130C4"/>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                             <div class="create_room_form_option" style="">
                                <svg @click="ChairCountDec()" class="pm_mark left" width="30" height="30" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="30" height="30" transform="translate(-2 -2)" fill="white"/>
                                        <path d="M16 22V24H30V22H16Z" fill="url(#paint0_linear)"/>
                                    <defs>
                                        <linearGradient id="paint0_linear" x1="27.4872" y1="24" x2="27.2966" y2="21.4617" gradientUnits="userSpaceOnUse">
                                            <stop offset="0.621164" stop-color="#512DE4"/>
                                            <stop offset="1" stop-color="#7130C4"/>
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <span>{{Room_One.ChairCount}}</span>
                                <svg @click="ChairCountInc()" class="pm_mark right" width="30" height="30" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="30" height="30" transform="translate(-2 -2)" fill="white"/>
                                        <path d="M24 24V30H22V24H16V22H22V16H24V22H30V24H24Z" fill="url(#paint0_linear)"/>
                                    <defs>
                                        <linearGradient id="paint0_linear" x1="27.4872" y1="16" x2="20.1282" y2="30" gradientUnits="userSpaceOnUse">
                                            <stop offset="0.621164" stop-color="#512DE4"/>
                                            <stop offset="1" stop-color="#7130C4"/>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <div class="create_room_form_option">
                                <input v-model='area_1' @input="RoomOneArea()" type="text" class="about_object_input" placeholder="15" style="width: 90px;">
                                <h10 class="meter">м2</h10>
                            </div>

                        </div>
                    </div>
                    

                </div>
                <!------------------------------------------------------- Конец комнаты 1 ------------------------------------------>
                <!------------------------------------------------------- Начало комнаты 2 ------------------------------------------>
                <div v-if="RoomCount>1" class="create_room_form" style="margin-bottom: 20px;">
                    <h4 style="margin: 10px;">Комната 2
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.1018 20C0.793953 19.9995 0.500482 19.8696 0.292992 19.6421C0.081675 19.4165 -0.0233291 19.1114 0.0043654 18.8035L0.273238 15.8462L12.694 3.42635L16.5757 7.30796L4.15817 19.7267L1.20167 19.9956C1.16765 19.9989 1.13363 20 1.1018 20ZM17.3505 6.53185L13.4699 2.65025L15.7976 0.321952C16.0034 0.115822 16.2828 0 16.574 0C16.8653 0 17.1446 0.115822 17.3505 0.321952L19.6781 2.65025C19.8842 2.85615 20 3.13555 20 3.4269C20 3.71825 19.8842 3.99765 19.6781 4.20355L17.3516 6.53076L17.3505 6.53185Z" fill="url(#paint0_linear)"/>
                        <defs>
                        <linearGradient id="paint0_linear" x1="16.4103" y1="6.46934e-07" x2="5.89744" y2="20" gradientUnits="userSpaceOnUse">
                        <stop offset="0.621164" stop-color="#512DE4"/>
                        <stop offset="1" stop-color="#7130C4"/>
                        </linearGradient>
                        </defs>
                        </svg>
                    </h4>
                    <div class="create_room_form_columns">
                        <div class="create_room_form_col1">
                            <div style="width: 200px; height: 150px;border: 2px solid #7130C4; border-radius: 20px;margin-left: 5px;margin-top: 5px;">

                                <div style='display:flex; flex-direction:row;' class="pictureInputRow">
                                    <picture-input 
                                        style = 'width 100px; height 100px; border: 2px solid #7130C4; border-radius: 15px 0px 0px 0px;' 
                                        ref="pictureInput"
                                        width="220" 
                                        height="170" 
                                        margin="1" 
                                        accept="image/jpeg,image/png" 
                                        size="3"
                                        radius="5"
                                        button-class="btn3"
                                        :hideChangeButton="true"
                                        :custom-strings="{
                                            upload: '<h1>Bummer!</h1>',
                                            drag: 'Перетащите фотографию или нажмите для обзора',
                                            change: '',
                                        }"
                                        @change="RoomTwoonChange1">
                                    </picture-input>
                                     <picture-input 
                                        style = 'width 100px; height 100px; border: 2px solid #7130C4; border-radius: 0px 15px 0px 0px'
                                        ref="pictureInput"
                                        width="220" 
                                        height="170" 
                                        margin="1" 
                                        accept="image/jpeg,image/png" 
                                        size="3"
                                        radius="5"
                                        button-class="btn3"
                                        :hideChangeButton="true"
                                        :custom-strings="{
                                            upload: '<h1>Bummer!</h1>',
                                            drag: 'Перетащите фотографию или нажмите для обзора',
                                            change: '',
                                        }"
                                        @change="RoomTwoonChange2">
                                    </picture-input>
                                </div>
                                <div style='display:flex; flex-direction:row;' class="pictureInputRow">
                                    <picture-input 
                                        style = 'width 100px; height 100px; border: 2px solid #7130C4; border-radius: 0px 0px 0px 18px'
                                        ref="pictureInput"
                                        width="220" 
                                        height="170" 
                                        margin="1" 
                                        accept="image/jpeg,image/png" 
                                        size="3"
                                        radius="6"
                                        button-class="btn3"
                                        :hideChangeButton="true"
                                        :custom-strings="{
                                            drag: 'Перетащите фотографию или нажмите для обзора',
                                        }"
                                        @change="RoomTwoonChange3">
                                    </picture-input>
                                     <picture-input 
                                        ref="pictureInput"
                                        style = 'width 100px; height 50px; border: 2px solid #7130C4; border-radius: 0px 0px 18px 0px'
                                        width="220" 
                                        height="170" 
                                        margin="1" 
                                        accept="image/jpeg,image/png" 
                                        size="3"
                                        radius="6"
                                        button-class="btn3"
                                        :hideChangeButton="true"
                                        :custom-strings="{
                                            upload: '<h1>Bummer!</h1>',
                                            drag: 'Перетащите фотографию или нажмите для обзора',
                                            change: '',
                                        }"
                                        @change="RoomTwoonChange4">
                                    </picture-input>
                                </div>
                                
                                


                            </div>
                            <div style="margin-left: 26px;margin-top: 5px;" class="create_room_form_option">
                                    <input  @change='Room_Two.num_of_windows = !Room_Two.num_of_windows' class="form-check-input" style="width: 18px; height: 18px;" type="checkbox" id="inlineCheckbox28" value="option1">
                                    <label class="form-check-label" style="padding-top: 6px;" for="inlineCheckbox28">Окна</label>
                            </div>
                            <div style="margin-left: 26px;margin-top: 5px;" class="create_room_form_option">
                                    <input @change='Room_Two.tv = !Room_Two.tv' class="form-check-input" style="width: 18px; height: 18px;" type="checkbox" id="inlineCheckbox29" value="option1">
                                    <label class="form-check-label" style="padding-top: 6px;" for="inlineCheckbox29">Телевизор</label>
                            </div>
                            <div style="margin-left: 26px;margin-top: 5px;" class="create_room_form_option">
                                    <input @change='Room_Two.balcony = !Room_Two.balcony' class="form-check-input" style="width: 18px; height: 18px;" type="checkbox" id="inlineCheckbox30" value="option1">
                                    <label class="form-check-label" style="padding-top: 6px;" for="inlineCheckbox30">Балкон</label>
                            </div>
                            <div style="margin-left: 26px; margin-top: 5px; margin-bottom: 10px;" class="create_room_form_option">
                                    <input class="form-check-input" style="width: 18px; height: 18px;" type="checkbox" id="inlineCheckbox31" value="option1">
                                    <label class="form-check-label" style="padding-top: 6px;" for="inlineCheckbox31">Кондиционер</label>
                            </div>
                        </div>
                        <div class="create_room_form_col2">
                            <p style="text-align: end; padding-top: 3px; font-weight: bold;">Максимальное количество жильцов</p>
                            <p style="text-align: end;">Односпальных кроватей</p>
                            <p style="text-align: end;"> Двуспальных кроватей</p>
                            <p style="text-align: end;">Столов</p>
                            <p style="text-align: end;">Стульев</p>
                            <p style="text-align: end;">Площадь</p>

                        </div>
                        <div class="create_room_form_col3" style="">
                            <div class="create_room_form_option" style="">
                                <svg @click="TwoMaxLiversDec()" class="pm_mark left" width="30" height="30" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="30" height="30" transform="translate(-2 -2)" fill="white"/>
                                        <path d="M16 22V24H30V22H16Z" fill="url(#paint0_linear)"/>
                                    <defs>
                                        <linearGradient id="paint0_linear" x1="27.4872" y1="24" x2="27.2966" y2="21.4617" gradientUnits="userSpaceOnUse">
                                            <stop offset="0.621164" stop-color="#512DE4"/>
                                            <stop offset="1" stop-color="#7130C4"/>
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <span>{{Room_Two.MaxLivers}}</span>
                                <svg @click="TwoMaxLiversInc()" class="pm_mark right" width="30" height="30" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="30" height="30" transform="translate(-2 -2)" fill="white"/>
                                        <path d="M24 24V30H22V24H16V22H22V16H24V22H30V24H24Z" fill="url(#paint0_linear)"/>
                                    <defs>
                                        <linearGradient id="paint0_linear" x1="27.4872" y1="16" x2="20.1282" y2="30" gradientUnits="userSpaceOnUse">
                                            <stop offset="0.621164" stop-color="#512DE4"/>
                                            <stop offset="1" stop-color="#7130C4"/>
                                        </linearGradient>
                                    </defs>
                                </svg>

                                <svg class="q_mark" width="18px" height="18px" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.0014 28C6.27216 27.9915 0.00848817 21.7285 0 14V13.72C0.153919 6.02636 6.48907 -0.100836 14.1844 0.0012575C21.8796 0.103351 28.05 6.39646 27.9997 14.0915C27.9494 21.7865 21.6974 27.9985 14.0014 28ZM13.979 25.2H14.0014C20.1854 25.1938 25.1944 20.1778 25.1913 13.9944C25.1882 7.81102 20.1742 2.80003 13.9902 2.80003C7.80618 2.80003 2.79217 7.81102 2.78908 13.9944C2.78599 20.1778 7.79498 25.1938 13.979 25.2ZM15.4015 22.4H12.6013V19.6H15.4015V22.4ZM15.4015 18.2H12.6013C12.557 16.3767 13.5059 14.6731 15.0795 13.7508C16.0036 13.0424 16.8017 12.432 16.8017 11.2C16.8017 9.65362 15.5479 8.40002 14.0014 8.40002C12.4548 8.40002 11.2011 9.65362 11.2011 11.2H8.40084V11.074C8.42335 9.07333 9.51161 7.23663 11.2557 6.25578C12.9998 5.27493 15.1347 5.29894 16.8562 6.31878C18.5778 7.33861 19.6245 9.19933 19.602 11.2C19.5017 12.7106 18.6914 14.0844 17.4177 14.903C16.2664 15.6257 15.5202 16.846 15.4015 18.2Z" fill="url(#paint0_linear)"/>
                                    <defs>
                                        <linearGradient id="paint0_linear" x1="22.9744" y1="9.05708e-07" x2="8.25641" y2="28" gradientUnits="userSpaceOnUse">
                                            <stop offset="0.621164" stop-color="#512DE4"/>
                                            <stop offset="1" stop-color="#7130C4"/>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <div class="create_room_form_option">
                                <svg @click="TwoOneMenBedDec()" class="pm_mark left" width="30" height="30" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="30" height="30" transform="translate(-2 -2)" fill="white"/>
                                        <path d="M16 22V24H30V22H16Z" fill="url(#paint0_linear)"/>
                                    <defs>
                                        <linearGradient id="paint0_linear" x1="27.4872" y1="24" x2="27.2966" y2="21.4617" gradientUnits="userSpaceOnUse">
                                            <stop offset="0.621164" stop-color="#512DE4"/>
                                            <stop offset="1" stop-color="#7130C4"/>
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <span>{{Room_Two.OneMenBed}}</span>
                                <svg @click="TwoOneMenBedInc()" class="pm_mark right" width="30" height="30" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="30" height="30" transform="translate(-2 -2)" fill="white"/>
                                        <path d="M24 24V30H22V24H16V22H22V16H24V22H30V24H24Z" fill="url(#paint0_linear)"/>
                                    <defs>
                                        <linearGradient id="paint0_linear" x1="27.4872" y1="16" x2="20.1282" y2="30" gradientUnits="userSpaceOnUse">
                                            <stop offset="0.621164" stop-color="#512DE4"/>
                                            <stop offset="1" stop-color="#7130C4"/>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                             <div class="create_room_form_option">
                                <svg @click="TwoTwoMenBedDec()" class="pm_mark left" width="30" height="30" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="30" height="30" transform="translate(-2 -2)" fill="white"/>
                                        <path d="M16 22V24H30V22H16Z" fill="url(#paint0_linear)"/>
                                    <defs>
                                        <linearGradient id="paint0_linear" x1="27.4872" y1="24" x2="27.2966" y2="21.4617" gradientUnits="userSpaceOnUse">
                                            <stop offset="0.621164" stop-color="#512DE4"/>
                                            <stop offset="1" stop-color="#7130C4"/>
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <span>{{Room_Two.TwoMenBed}}</span>
                                <svg @click="TwoTwoMenBedInc()" class="pm_mark right" width="30" height="30" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="30" height="30" transform="translate(-2 -2)" fill="white"/>
                                        <path d="M24 24V30H22V24H16V22H22V16H24V22H30V24H24Z" fill="url(#paint0_linear)"/>
                                    <defs>
                                        <linearGradient id="paint0_linear" x1="27.4872" y1="16" x2="20.1282" y2="30" gradientUnits="userSpaceOnUse">
                                            <stop offset="0.621164" stop-color="#512DE4"/>
                                            <stop offset="1" stop-color="#7130C4"/>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                             <div class="create_room_form_option">
                                <svg @click="TwoTableCountDec()" class="pm_mark left" width="30" height="30" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="30" height="30" transform="translate(-2 -2)" fill="white"/>
                                        <path d="M16 22V24H30V22H16Z" fill="url(#paint0_linear)"/>
                                    <defs>
                                        <linearGradient id="paint0_linear" x1="27.4872" y1="24" x2="27.2966" y2="21.4617" gradientUnits="userSpaceOnUse">
                                            <stop offset="0.621164" stop-color="#512DE4"/>
                                            <stop offset="1" stop-color="#7130C4"/>
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <span>{{Room_Two.TableCount}}</span>
                                <svg @click="TwoTableCountInc()" class="pm_mark right" width="30" height="30" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="30" height="30" transform="translate(-2 -2)" fill="white"/>
                                        <path d="M24 24V30H22V24H16V22H22V16H24V22H30V24H24Z" fill="url(#paint0_linear)"/>
                                    <defs>
                                        <linearGradient id="paint0_linear" x1="27.4872" y1="16" x2="20.1282" y2="30" gradientUnits="userSpaceOnUse">
                                            <stop offset="0.621164" stop-color="#512DE4"/>
                                            <stop offset="1" stop-color="#7130C4"/>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                             <div class="create_room_form_option" style="">
                                <svg @click="TwoChairCountDec()" class="pm_mark left" width="30" height="30" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="30" height="30" transform="translate(-2 -2)" fill="white"/>
                                        <path d="M16 22V24H30V22H16Z" fill="url(#paint0_linear)"/>
                                    <defs>
                                        <linearGradient id="paint0_linear" x1="27.4872" y1="24" x2="27.2966" y2="21.4617" gradientUnits="userSpaceOnUse">
                                            <stop offset="0.621164" stop-color="#512DE4"/>
                                            <stop offset="1" stop-color="#7130C4"/>
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <span>{{Room_Two.ChairCount}}</span>
                                <svg @click="TwoChairCountInc()" class="pm_mark right" width="30" height="30" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="30" height="30" transform="translate(-2 -2)" fill="white"/>
                                        <path d="M24 24V30H22V24H16V22H22V16H24V22H30V24H24Z" fill="url(#paint0_linear)"/>
                                    <defs>
                                        <linearGradient id="paint0_linear" x1="27.4872" y1="16" x2="20.1282" y2="30" gradientUnits="userSpaceOnUse">
                                            <stop offset="0.621164" stop-color="#512DE4"/>
                                            <stop offset="1" stop-color="#7130C4"/>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <div class="create_room_form_option">
                                <input v-model='area_2' @input="RoomTwoArea()" type="text" class="about_object_input" placeholder="15" style="width: 90px;">
                                <h10 class="meter">м2</h10>
                            </div>

                        </div>
                    </div>
                    

                </div>
                <!------------------------------------------------------- Конец комнаты 2 ------------------------------------------>
                <!------------------------------------------------------- Начало комнаты 3 ------------------------------------------>
                <div v-if="RoomCount>2" class="create_room_form" style="margin-bottom: 20px;">
                    <h4 style="margin: 10px;">Комната 3
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.1018 20C0.793953 19.9995 0.500482 19.8696 0.292992 19.6421C0.081675 19.4165 -0.0233291 19.1114 0.0043654 18.8035L0.273238 15.8462L12.694 3.42635L16.5757 7.30796L4.15817 19.7267L1.20167 19.9956C1.16765 19.9989 1.13363 20 1.1018 20ZM17.3505 6.53185L13.4699 2.65025L15.7976 0.321952C16.0034 0.115822 16.2828 0 16.574 0C16.8653 0 17.1446 0.115822 17.3505 0.321952L19.6781 2.65025C19.8842 2.85615 20 3.13555 20 3.4269C20 3.71825 19.8842 3.99765 19.6781 4.20355L17.3516 6.53076L17.3505 6.53185Z" fill="url(#paint0_linear)"/>
                        <defs>
                        <linearGradient id="paint0_linear" x1="16.4103" y1="6.46934e-07" x2="5.89744" y2="20" gradientUnits="userSpaceOnUse">
                        <stop offset="0.621164" stop-color="#512DE4"/>
                        <stop offset="1" stop-color="#7130C4"/>
                        </linearGradient>
                        </defs>
                        </svg>
                    </h4>
                    <div class="create_room_form_columns">
                        <div class="create_room_form_col1">
                            <div class='pictureInput' style=" width: 200px; height: 150px;border: 2px solid #7130C4; border-radius: 20px;margin-left: 5px;margin-top: 5px;">
                                <div style='display:flex; flex-direction:row;' class="pictureInputRow">
                                    <picture-input 
                                        style = 'width 100px; height 100px; border: 2px solid #7130C4; border-radius: 15px 0px 0px 0px;' 
                                        ref="pictureInput"
                                        width="220" 
                                        height="170" 
                                        margin="1" 
                                        accept="image/jpeg,image/png" 
                                        size="3"
                                        radius="5"
                                        button-class="btn3"
                                        :hideChangeButton="true"
                                        :custom-strings="{
                                            upload: '<h1>Bummer!</h1>',
                                            drag: 'Перетащите фотографию или нажмите для обзора',
                                            change: '',
                                        }"
                                        @change="RoomThreeonChange1">
                                    </picture-input>
                                     <picture-input 
                                        style = 'width 100px; height 100px; border: 2px solid #7130C4; border-radius: 0px 15px 0px 0px'
                                        ref="pictureInput"
                                        width="220" 
                                        height="170" 
                                        margin="1" 
                                        accept="image/jpeg,image/png" 
                                        size="3"
                                        radius="5"
                                        button-class="btn3"
                                        :hideChangeButton="true"
                                        :custom-strings="{
                                            upload: '<h1>Bummer!</h1>',
                                            drag: 'Перетащите фотографию или нажмите для обзора',
                                            change: '',
                                        }"
                                        @change="RoomThreeonChange2">
                                    </picture-input>
                                </div>
                                <div style='display:flex; flex-direction:row;' class="pictureInputRow">
                                    <picture-input 
                                        style = 'width 100px; height 100px; border: 2px solid #7130C4; border-radius: 0px 0px 0px 18px'
                                        ref="pictureInput"
                                        width="220" 
                                        height="170" 
                                        margin="1" 
                                        accept="image/jpeg,image/png" 
                                        size="3"
                                        radius="6"
                                        button-class="btn3"
                                        :hideChangeButton="true"
                                        :custom-strings="{
                                            drag: 'Перетащите фотографию или нажмите для обзора',
                                        }"
                                        @change="RoomThreeonChange3">
                                    </picture-input>
                                     <picture-input 
                                        ref="pictureInput"
                                        style = 'width 100px; height 50px; border: 2px solid #7130C4; border-radius: 0px 0px 18px 0px'
                                        width="220" 
                                        height="170" 
                                        margin="1" 
                                        accept="image/jpeg,image/png" 
                                        size="3"
                                        radius="6"
                                        button-class="btn3"
                                        :hideChangeButton="true"
                                        :custom-strings="{
                                            upload: '<h1>Bummer!</h1>',
                                            drag: 'Перетащите фотографию или нажмите для обзора',
                                            change: '',
                                        }"
                                        @change="RoomThreeonChange4">
                                    </picture-input>
                                </div>
                                


                            </div>
                            <div style="margin-left: 26px;margin-top: 5px;" class="create_room_form_option">
                                    <input  @change='Room_Three.num_of_windows = !Room_Three.num_of_windows' class="form-check-input" style="width: 18px; height: 18px;" type="checkbox" id="inlineCheckbox32" value="option1">
                                    <label class="form-check-label" style="padding-top: 6px;" for="inlineCheckbox32">Окна</label>
                            </div>
                            <div style="margin-left: 26px;margin-top: 5px;" class="create_room_form_option">
                                    <input  @change='Room_Three.tv = !Room_Three.tv' class="form-check-input" style="width: 18px; height: 18px;" type="checkbox" id="inlineCheckbox33" value="option1">
                                    <label class="form-check-label" style="padding-top: 6px;" for="inlineCheckbox33">Телевизор</label>
                            </div>
                            <div style="margin-left: 26px;margin-top: 5px;" class="create_room_form_option">
                                    <input  @change='Room_Three.balcony = !Room_Three.balcony' class="form-check-input" style="width: 18px; height: 18px;" type="checkbox" id="inlineCheckbox34" value="option1">
                                    <label class="form-check-label" style="padding-top: 6px;" for="inlineCheckbox34">Балкон</label>
                            </div>
                            <div style="margin-left: 26px; margin-top: 5px; margin-bottom: 10px;" class="create_room_form_option">
                                    <input class="form-check-input" style="width: 18px; height: 18px;" type="checkbox" id="inlineCheckbox35" value="option1">
                                    <label class="form-check-label" style="padding-top: 6px;" for="inlineCheckbox35">Кондиционер</label>
                            </div>
                        </div>
                        <div class="create_room_form_col2">
                            <p style="text-align: end; padding-top: 3px; font-weight: bold;">Максимальное количество жильцов</p>
                            <p style="text-align: end;">Односпальных кроватей</p>
                            <p style="text-align: end;"> Двуспальных кроватей</p>
                            <p style="text-align: end;">Столов</p>
                            <p style="text-align: end;">Стульев</p>
                            <p style="text-align: end;">Площадь</p>

                        </div>
                        <div class="create_room_form_col3" style="">
                            <div class="create_room_form_option" style="">
                                <svg @click="ThreeMaxLiversDec()" class="pm_mark left" width="30" height="30" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="30" height="30" transform="translate(-2 -2)" fill="white"/>
                                        <path d="M16 22V24H30V22H16Z" fill="url(#paint0_linear)"/>
                                    <defs>
                                        <linearGradient id="paint0_linear" x1="27.4872" y1="24" x2="27.2966" y2="21.4617" gradientUnits="userSpaceOnUse">
                                            <stop offset="0.621164" stop-color="#512DE4"/>
                                            <stop offset="1" stop-color="#7130C4"/>
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <span>{{Room_Three.MaxLivers}}</span>
                                <svg @click="ThreeMaxLiversInc()" class="pm_mark right" width="30" height="30" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="30" height="30" transform="translate(-2 -2)" fill="white"/>
                                        <path d="M24 24V30H22V24H16V22H22V16H24V22H30V24H24Z" fill="url(#paint0_linear)"/>
                                    <defs>
                                        <linearGradient id="paint0_linear" x1="27.4872" y1="16" x2="20.1282" y2="30" gradientUnits="userSpaceOnUse">
                                            <stop offset="0.621164" stop-color="#512DE4"/>
                                            <stop offset="1" stop-color="#7130C4"/>
                                        </linearGradient>
                                    </defs>
                                </svg>

                                <svg class="q_mark" width="18px" height="18px" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.0014 28C6.27216 27.9915 0.00848817 21.7285 0 14V13.72C0.153919 6.02636 6.48907 -0.100836 14.1844 0.0012575C21.8796 0.103351 28.05 6.39646 27.9997 14.0915C27.9494 21.7865 21.6974 27.9985 14.0014 28ZM13.979 25.2H14.0014C20.1854 25.1938 25.1944 20.1778 25.1913 13.9944C25.1882 7.81102 20.1742 2.80003 13.9902 2.80003C7.80618 2.80003 2.79217 7.81102 2.78908 13.9944C2.78599 20.1778 7.79498 25.1938 13.979 25.2ZM15.4015 22.4H12.6013V19.6H15.4015V22.4ZM15.4015 18.2H12.6013C12.557 16.3767 13.5059 14.6731 15.0795 13.7508C16.0036 13.0424 16.8017 12.432 16.8017 11.2C16.8017 9.65362 15.5479 8.40002 14.0014 8.40002C12.4548 8.40002 11.2011 9.65362 11.2011 11.2H8.40084V11.074C8.42335 9.07333 9.51161 7.23663 11.2557 6.25578C12.9998 5.27493 15.1347 5.29894 16.8562 6.31878C18.5778 7.33861 19.6245 9.19933 19.602 11.2C19.5017 12.7106 18.6914 14.0844 17.4177 14.903C16.2664 15.6257 15.5202 16.846 15.4015 18.2Z" fill="url(#paint0_linear)"/>
                                    <defs>
                                        <linearGradient id="paint0_linear" x1="22.9744" y1="9.05708e-07" x2="8.25641" y2="28" gradientUnits="userSpaceOnUse">
                                            <stop offset="0.621164" stop-color="#512DE4"/>
                                            <stop offset="1" stop-color="#7130C4"/>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <div class="create_room_form_option">
                                <svg @click="ThreeOneMenBedDec()" class="pm_mark left" width="30" height="30" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="30" height="30" transform="translate(-2 -2)" fill="white"/>
                                        <path d="M16 22V24H30V22H16Z" fill="url(#paint0_linear)"/>
                                    <defs>
                                        <linearGradient id="paint0_linear" x1="27.4872" y1="24" x2="27.2966" y2="21.4617" gradientUnits="userSpaceOnUse">
                                            <stop offset="0.621164" stop-color="#512DE4"/>
                                            <stop offset="1" stop-color="#7130C4"/>
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <span>{{Room_Three.OneMenBed}}</span>
                                <svg @click="ThreeOneMenBedInc()" class="pm_mark right" width="30" height="30" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="30" height="30" transform="translate(-2 -2)" fill="white"/>
                                        <path d="M24 24V30H22V24H16V22H22V16H24V22H30V24H24Z" fill="url(#paint0_linear)"/>
                                    <defs>
                                        <linearGradient id="paint0_linear" x1="27.4872" y1="16" x2="20.1282" y2="30" gradientUnits="userSpaceOnUse">
                                            <stop offset="0.621164" stop-color="#512DE4"/>
                                            <stop offset="1" stop-color="#7130C4"/>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                             <div class="create_room_form_option">
                                <svg @click="ThreeTwoMenBedDec()" class="pm_mark left" width="30" height="30" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="30" height="30" transform="translate(-2 -2)" fill="white"/>
                                        <path d="M16 22V24H30V22H16Z" fill="url(#paint0_linear)"/>
                                    <defs>
                                        <linearGradient id="paint0_linear" x1="27.4872" y1="24" x2="27.2966" y2="21.4617" gradientUnits="userSpaceOnUse">
                                            <stop offset="0.621164" stop-color="#512DE4"/>
                                            <stop offset="1" stop-color="#7130C4"/>
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <span>{{Room_Three.TwoMenBed}}</span>
                                <svg @click="ThreeTwoMenBedInc()" class="pm_mark right" width="30" height="30" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="30" height="30" transform="translate(-2 -2)" fill="white"/>
                                        <path d="M24 24V30H22V24H16V22H22V16H24V22H30V24H24Z" fill="url(#paint0_linear)"/>
                                    <defs>
                                        <linearGradient id="paint0_linear" x1="27.4872" y1="16" x2="20.1282" y2="30" gradientUnits="userSpaceOnUse">
                                            <stop offset="0.621164" stop-color="#512DE4"/>
                                            <stop offset="1" stop-color="#7130C4"/>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                             <div class="create_room_form_option">
                                <svg @click="ThreeTableCountDec()" class="pm_mark left" width="30" height="30" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="30" height="30" transform="translate(-2 -2)" fill="white"/>
                                        <path d="M16 22V24H30V22H16Z" fill="url(#paint0_linear)"/>
                                    <defs>
                                        <linearGradient id="paint0_linear" x1="27.4872" y1="24" x2="27.2966" y2="21.4617" gradientUnits="userSpaceOnUse">
                                            <stop offset="0.621164" stop-color="#512DE4"/>
                                            <stop offset="1" stop-color="#7130C4"/>
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <span>{{Room_Three.TableCount}}</span>
                                <svg @click="ThreeTableCountInc()" class="pm_mark right" width="30" height="30" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="30" height="30" transform="translate(-2 -2)" fill="white"/>
                                        <path d="M24 24V30H22V24H16V22H22V16H24V22H30V24H24Z" fill="url(#paint0_linear)"/>
                                    <defs>
                                        <linearGradient id="paint0_linear" x1="27.4872" y1="16" x2="20.1282" y2="30" gradientUnits="userSpaceOnUse">
                                            <stop offset="0.621164" stop-color="#512DE4"/>
                                            <stop offset="1" stop-color="#7130C4"/>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                             <div class="create_room_form_option" style="">
                                <svg @click="ThreeChairCountDec()" class="pm_mark left" width="30" height="30" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="30" height="30" transform="translate(-2 -2)" fill="white"/>
                                        <path d="M16 22V24H30V22H16Z" fill="url(#paint0_linear)"/>
                                    <defs>
                                        <linearGradient id="paint0_linear" x1="27.4872" y1="24" x2="27.2966" y2="21.4617" gradientUnits="userSpaceOnUse">
                                            <stop offset="0.621164" stop-color="#512DE4"/>
                                            <stop offset="1" stop-color="#7130C4"/>
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <span>{{Room_Three.ChairCount}}</span>
                                <svg @click="ThreeChairCountInc()" class="pm_mark right" width="30" height="30" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="30" height="30" transform="translate(-2 -2)" fill="white"/>
                                        <path d="M24 24V30H22V24H16V22H22V16H24V22H30V24H24Z" fill="url(#paint0_linear)"/>
                                    <defs>
                                        <linearGradient id="paint0_linear" x1="27.4872" y1="16" x2="20.1282" y2="30" gradientUnits="userSpaceOnUse">
                                            <stop offset="0.621164" stop-color="#512DE4"/>
                                            <stop offset="1" stop-color="#7130C4"/>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <div class="create_room_form_option">
                                <input v-model='area_3' @input="RoomThreeArea()" type="text" class="about_object_input" placeholder="15" style="width: 90px;">
                                <h10 class="meter">м2</h10>
                            </div>

                        </div>
                    </div>
                    

                </div>
                <!------------------------------------------------------- Конец комнаты 3 ------------------------------------------>
            </div>

            <div class="text-center">
                <v-btn
                :disabled="dialog"
                :loading="dialog"
                class="white--text subBtn"
                style="margin-top:20px; margin-bottom:40px;"
                color="#7130C4"
                @click="dialog = true; SubmitFlatInfo(); RedirectTo();"
                >
                Завершить редактирование
                </v-btn>
                <v-dialog
                content-class
                v-model="dialog"
                hide-overlay
                persistent
                width="800"
                color="#7130C4"
                
                >
                    <v-card
                        color="#7130C4"
                        dark
                       height="50"
                    >
                        <v-card-text>
                        Отлично! Перенаправляем на главную страницу......
                        <v-progress-linear
                            indeterminate
                            color="white"
                            class="mb-0"
                        ></v-progress-linear>
                        </v-card-text>
                    </v-card>
                </v-dialog>
            </div>
        </div>
        
    </div>
</template>

<style>
    .v-dialog__content {
    align-items: flex-start;
    margin-top: 100px;
    color:white;
    font-size: 20px;
    justify-content: center;
    }
    .submitButtonBlock {
        width: 50%;
        margin: 0 auto;
        text-align:center;
        margin-top: 20px;
        margin-bottom: 30px;
    }
    .submitButton {
        border: 1px solid black;
        border-radius: 40px;
        border-color: #7130C4;
        border-width: 2px;
        width: 330px;
        height: 40px;
        color: black;
        background-color: white;
        
    }
    input {
        text-align: center;
    }
    .form-control {
        border-radius: 20px;
        border-color: #7130C4;
        border-width: 2px;
    }
    .form-check-inline_center {
        margin-left:auto;
    }
    .form-check-inline, .form-check-inline_right {
        margin-left: auto;
        margin-right: 250px;
    }
   .form-check-input:active{
       background-color: blueviolet;
   }
    

    h5 {
        font-size: 25px;
    }
    h {
        color: black;
    }
    span {
        color: black;
    }
    .pm_mark {
        border: .1px solid#7130C4;
        border-radius: 99px;
    }
    .left {
        margin-left: 10px;
        margin-right: 10px;
    }
    .right {
        margin-left: 10px;
        margin-right: 10px;
    }
    input {outline:none;}
    .ymap-container {
    height: 600px;
    }

    .red {
    color: red;
    }

    #map {
        margin-left: 250px;
        margin-right: 250px;
    }
    hr {
        width: 1362px;
        margin-left: 250px;
    }
    .about_object, .create_room {
        margin-left: 250px;
        display: flex;
        flex-direction: column;
    }
    .create_room {
        margin-right: 250px;
    }
    .create_room_form {
        width: 50%;
        border: 2px solid #7130C3;
        border-radius: 15px;
        margin-left: 25%;
        margin-right: 25%;
    }
    .create_room_form_option {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 10px;
        text-align: right;
    }
    .facilities {
        margin-left: 250px;
        display: flex;
        flex-direction: column;
    }
    .flat_rules {
        margin-left: 250px;
    }
    .about_object_input {
        border: 1px solid #7130C4;
        border-radius: 20px;
        margin-left: 10px;
    }
    .meter {
        margin-left: 5px;
        color: black;
    }
    .flat_rules_columns{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .create_room_form_columns{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
    }
    .create_room_form_col1 {
        margin-left: 5px;;
    }
    .create_room_form_col2 {
        margin-left: auto;
        margin-bottom: 10px;
    }
    .create_room_form_col3 {
        margin-left: auto;
        margin-right: 10px;
    }
    .kitchen_fac {
        display: flex;
        flex-direction: row;
    }
    .kitchen_fac_col2 {
        margin-left: auto;
    }
    .kitchen_fac_col3{
        margin-left: auto;
        margin-right: 250px;
        justify-content: end;
    }
    .flat_rules_col2 {
        display: flex;
        flex-direction: row; 
        margin-right: 250px;
        align-items: center;
    }
    .kitchen_fac_option {
        margin-top: 20px;
    }
    .about_object_pos {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 20px;
    }
    .flat_photos {
        margin-left: 250px;
    }
    .renovation_btn, .flat_rules_btn{
        margin-left: 10px;
    }
    .middle_btn {
        border-radius: 0px;
        border-left: 1px solid #7130C4;
    }
    .right_btn {
        border-radius: 0px 20px 20px 0px;
        border-left: 1px solid #7130C4;

    }
    .left_btn {
        border-radius: 20px 0px 0px 20px;
    }
    .btn-group-sm {
        border: 1px solid #7130C4;
        border-radius: 20px;
    }
    .btn {
        color: black;
    }
    .subBtn {
        background: linear-gradient(207.73deg, #512DE4 58.15%, #7130C4 89.84%);
        font-weight: normal;
        border-radius: 99px;
    }

    .submitButton:focus {
        outline: none;
        box-shadow: none;
    }
    .submitButton:hover {
        color: white;
        background-color: #7130C4;
        transition: 0.3s ease;
        
    }
    .left_btn1{
        transition: 0.3 ease;
        font-weight: normal;
        font-size: x-small;
        border: 1px solid #7130C4;
        border-radius: 20px 0px 0px 20px;
        color: black;
        background-color: white;
        height:30px;width:100px;
        margin-right: 0px;
    }
    .right_btn1{
        transition: 0.3 ease;
        font-weight: normal;
        font-size: x-small;
        border: 1px solid #7130C4;
        border-radius: 0px 20px 20px 0px;
        color: black;
        background-color: white;
        height:30px;width:100px;
        margin-right: 0px;
    }

    .middle_btn1{
        transition: 0.3 ease;
        font-weight: normal;
        font-size: small;
        border: 1px solid #7130C4;
        color: black;
        background-color: white;
        height:30px;width:100px;
        margin-right: 0px;
    }

    .left_btn1:hover, .middle_btn1:hover, .right_btn1:hover {
        color: white;
        background: linear-gradient(207.73deg, #512DE4 58.15%, #7130C4 89.84%);
        transition: 0.3s ease;
        
    }
    .active{
        color: white;
        background-color: #7130C4;
    }
    button:active, button:focus {
        outline: none;
    }
    button::-moz-focus-inner {
        border: 0;
    }
    ::-webkit-input-placeholder {
        text-align:center;
        font-size: 15px;
    }

    :-moz-placeholder { /* Firefox 18- */
        text-align:center;  
    }

    ::-moz-placeholder {  /* Firefox 19+ */
        text-align:center;  
    }

    :-ms-input-placeholder {  
        text-align:center; 
    }
    input::-webkit-input-placeholder       {opacity: 1; transition: opacity 0.3s ease;}
    input::-moz-placeholder                {opacity: 1; transition: opacity 0.3s ease;}
    input:-moz-placeholder                 {opacity: 1; transition: opacity 0.3s ease;}
    input:-ms-input-placeholder            {opacity: 1; transition: opacity 0.3s ease;}
    input:focus::-webkit-input-placeholder {opacity: 0; transition: opacity 0.3s ease;}
    input:focus::-moz-placeholder          {opacity: 0; transition: opacity 0.3s ease;}
    input:focus:-moz-placeholder           {opacity: 0; transition: opacity 0.3s ease;}
    input:focus:-ms-input-placeholder      {opacity: 0; transition: opacity 0.3s ease;}

    svg{
        cursor: pointer;
    }
    .pm_mark:hover{
        border: 2px solid #7130C4;
    }
</style>

<script >
import PictureInput from 'vue-picture-input';
import axios from 'axios';
import {mapGetters} from 'vuex'
export default {
    mounted() {
        this.ymaps.ready(this.createMap());
    },
    components: {
        PictureInput
    },
    computed: {
      ...mapGetters([
          'getAccessToken',
      ])
    },
    data:() => ({
        isActive1: false,
        isActive2: false,
        isActive3: false,
        isActive4: false,
        ymaps: window.ymaps,                              
        clusterer: null,
        map: null, 
        controls: ['zoomControl'], 
        center: [55.753083,37.587614],
        Placemark: [],
        zoom: 11,
        Address: '',
        X_cord:'',
        Y_cord:'',
        ttmetro_food:15,
        ttmetro_transport: 15,
        metro: '',
        floor: '',
        floor_total: '',
        area: 0,
        area_1: 0,
        area_2: 0,
        area_3: 0,
        repair: 1,
        passenger_elevator: false,
        serve_elevator: false,
        kitchen: false,
        bathroom: false,
        refrigerator: false,
        dishwasher: false,
        stove_1: false,
        stove_2: false,
        stove_3: false,
        dryer: false,
        vacuum_cleaner: false,
        internet: false,
        heating_1: false,
        heating_2: false,
        animals: false,
        smoking: false,
        RoomCount: 1,
        Room_One: {

            MaxLivers: 1,
            OneMenBed: 0,
            TwoMenBed: 0,
            TableCount: 0,
            ChairCount: 0,
            num_of_windows: false,
            balcony: false,
            tv: false,
            furniture: false,
            area: '',
            image1:'',
            image2:'',
            image3:'',
            image4:'',

        },
        Room_Two: {

            MaxLivers: 1,
            OneMenBed: 0,
            TwoMenBed: 0,
            TableCount: 0,
            ChairCount: 0,
            num_of_windows: '',
            balcony: false,
            tv: false,
            furniture: false,
            area: '',
            image1:'',
            image2:'',
            image3:'',
            image4:'',

        },
        Room_Three: {

            MaxLivers: 1,
            OneMenBed: 0,
            TwoMenBed: 0,
            TableCount: 0,
            ChairCount: 0,
            num_of_windows: '',
            balcony: false,
            tv: false,
            furniture: false,
            area: '',
            image1:'',
            image2:'',
            image3:'',
            image4:'',

        },
    }),
    
    methods: {
        Activate1() {
            this.isActive1 = true;
            this.isActive2 = false;
            this.isActive3 = false;
            this.isActive4 = false;
        },
        Activate2() {
            this.isActive1 = false;
            this.isActive2 = true;
            this.isActive3 = false;
            this.isActive4 = false;
        },
        Activate3() {
            this.isActive1 = false;
            this.isActive2 = false;
            this.isActive3 = true;
            this.isActive4 = false;
        },
        Activate4() {
            this.isActive1 = false;
            this.isActive2 = false;
            this.isActive3 = false;
            this.isActive4 = true;
        },
        repair_1() {
            this.repair = 1;
            console.log(this.repair);
        },
        repair_2() {
            this.repair = 2;
            console.log(this.repair);
        },
        repair_3() {
            this.repair = 3;
            console.log(this.repair);
        },
        repair_4() {
            this.repair = 4;
            console.log(this.repair);
        },
        RoomOneonChange1 (image) {
            console.log('Новая картинка выбрана!')
            if (image) {
                console.log('Картинка загружена!')
                this.Room_One.image1 = image
            } else {
                console.log('Ошибка в API!')
            }
        },
        RoomOneonChange2 (image) {
            console.log('Новая картинка выбрана!')
            if (image) {
                console.log('Картинка загружена!')
                this.Room_One.image2 = image
            } else {
                console.log('Ошибка в API!')
            }
        },
        RoomOneonChange3 (image) {
            console.log('Новая картинка выбрана!')
            if (image) {
                console.log('Картинка загружена!')
                this.Room_One.image3 = image
            } else {
                console.log('Ошибка в API!')
            }
        },
        RoomOneonChange4 (image) {
            console.log('Новая картинка выбрана!')
            if (image) {
                console.log('Картинка загружена!')
                this.Room_One.image4 = image
            } else {
                console.log('Ошибка в API!')
            }
        },
         RoomTwoonChange1 (image) {
            console.log('Новая картинка выбрана!')
            if (image) {
                console.log('Картинка загружена!')
                this.Room_Two.image1 = image
            } else {
                console.log('Ошибка в API!')
            }
        },
        RoomTwoonChange2 (image) {
            console.log('Новая картинка выбрана!')
            if (image) {
                console.log('Картинка загружена!')
                this.Room_Two.image2 = image
            } else {
                console.log('Ошибка в API!')
            }
        },
        RoomTwoonChange3 (image) {
            console.log('Новая картинка выбрана!')
            if (image) {
                console.log('Картинка загружена!')
                this.Room_Two.image3 = image
            } else {
                console.log('Ошибка в API!')
            }
        },
        RoomTwoonChange4 (image) {
            console.log('Новая картинка выбрана!')
            if (image) {
                console.log('Картинка загружена!')
                this.Room_Two.image4 = image
            } else {
                console.log('Ошибка в API!')
            }
        },
        RoomThreeonChange1 (image) {
            console.log('Новая картинка выбрана!')
            if (image) {
                console.log('Картинка загружена!')
                this.Room_Three.image1 = image
            } else {
                console.log('Ошибка в API!')
            }
        },
        RoomThreeonChange2 (image) {
            console.log('Новая картинка выбрана!')
            if (image) {
                console.log('Картинка загружена!')
                this.Room_Three.image2 = image
            } else {
                console.log('Ошибка в API!')
            }
        },
        RoomThreeonChange3 (image) {
            console.log('Новая картинка выбрана!')
            if (image) {
                console.log('Картинка загружена!')
                this.Room_Three.image3 = image
            } else {
                console.log('Ошибка в API!')
            }
        },
        RoomThreeonChange4 (image) {
            console.log('Новая картинка выбрана!')
            if (image) {
                console.log('Картинка загружена!')
                this.Room_Three.image4 = image
            } else {
                console.log('Ошибка в API!')
            }
        },
        createMap(){
            setTimeout(() => { 
                this.map = new this.ymaps.Map("map", {center: this.center, zoom: this.zoom, controls: this.controls});
                this.clusterer = new this.ymaps.Clusterer({clusterDisableClickZoom: true});
                this.clusterer = new this.ymaps.Clusterer({clusterDisableClickZoom: true});
            }, 1000)

        },
        RedirectTo(){
            setTimeout(()=>(location.replace("http://185.251.91.134/lot/template")),5000);
        },
        async SearchAddress(){
            this.map.geoObjects.removeAll();
            // console.log(response.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos
            
            await axios
                .get('https://geocode-maps.yandex.ru/1.x/?format=json&apikey=e67f2305-ce3f-4aca-8c5f-b4be982e17d2&geocode='+this.Address)
                .then(response => {
                    let Coords = JSON.stringify(response.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos);
                    this.X_cord = Coords.slice(11,20);
                    this.Y_cord = Coords.slice(1,10);
                    this.center = [Number(this.X_cord),Number(this.Y_cord)];
                    this.Placemark = [];
                    this.Placemark = new this.ymaps.Placemark(this.center);
                    this.map.geoObjects.add(this.Placemark);
                    this.map.setCenter(this.center);
                    this.map.setZoom(17);
                })
                .catch(function (error) {
                    console.log(error);
                    throw error;
                });
           
        },
        SetStove() {
            if (this.stove_1 == true) {
                this.stove = 1;
            } else if (this.stove_2==true) {
                this.stove = 2;
            } else if (this.stove_3==true) {
                this.stove = 3;
            }
        },
        SetHeating(){
            if (this.heating_1 == true) {
                this.heating = 1;
            } else if (this.heating_2==true) {
                this.heating = 2;
            } else if (this.heating_3==true) {
                this.heating = 3;
            }
        },
        SetBathroom() {
            if(this.bathroom == true) {
                this.bathroom = 1;
            }else if (this.bathroom == false) {
                this.bathroom = 0;
            }
        },
        SubmitFlatInfo () {
            this.SetStove();
            this.SetHeating();
            this.SetBathroom();
            let flat = {
                    rooms: [],
                    address: this.Address,
                    coordinates: {
                    lat: parseFloat(this.X_cord),
                    lon: parseFloat(this.Y_cord)
                    },
                    ttmetro_food: parseInt(this.ttmetro_food),
                    ttmetro_transport: parseInt(this.ttmetro_transport),
                    metro: "Проспект Вернадского",
                    floor: parseInt(this.floor),
                    floor_total: parseInt(this.floor_total),
                    area: parseInt(this.area),
                    repair: parseInt(this.repair),
                    passenger_elevator: this.passenger_elevator,
                    serve_elevator: this.serve_elevator,
                    kitchen: this.kitchen,
                    bathroom: 1,
                    refrigerator: this.refrigerator,
                    dishwasher: this.dishwasher,
                    stove: parseInt(this.stove),
                    dryer: this.dryer,
                    vacuum_cleaner: this.vacuum_cleaner,
                    internet: this.internet,
                    heating: parseInt(this.heating),
                    animals: this.animals,
                    smoking: this.smoking,
                    image: this.image
                };
            if (this.RoomCount === 1) {
                let room = {
                    living_place: [
                    {
                    num_of_berth: parseInt(this.Room_One.OneMenBed + this.Room_One.TwoMenBed)
                    }
                    ],
                    max_residents: parseInt(this.Room_One.MaxLivers),
                    num_of_windows: this.Room_One.num_of_windows,
                    balcony: this.Room_One.balcony,
                    num_of_tables: parseInt(this.Room_One.TableCount),
                    num_of_chairs: parseInt(this.Room_One.ChairCount),
                    tv: this.Room_One.tv,
                    furniture: true,
                    area: parseInt(this.Room_One.area)
                };
                flat.rooms.push(room);
                console.log(flat);
            }else if (this.RoomCount === 2) {
                let room_1 = {
                    living_place: [
                    {
                    num_of_berth: this.Room_One.OneMenBed + this.Room_One.TwoMenBed
                    }
                    ],
                    max_residents: this.Room_One.MaxLivers,
                    num_of_windows: this.Room_One.num_of_windows,
                    balcony: this.Room_One.balcony,
                    num_of_tables: this.Room_One.TableCount,
                    num_of_chairs: this.Room_One.ChairCount,
                    tv: this.Room_One.tv,
                    furniture: true,
                    area: parseInt(this.Room_One.area)
                };
                let room_2 = {
                    living_place: [
                    {
                    num_of_berth: this.Room_Two.OneMenBed + this.Room_Two.TwoMenBed
                    }
                    ],
                    max_residents: this.Room_Two.MaxLivers,
                    num_of_windows: this.Room_Two.num_of_windows,
                    balcony: this.Room_Two.balcony,
                    num_of_tables: this.Room_Two.TableCount,
                    num_of_chairs: this.Room_Two.ChairCount,
                    tv: this.Room_Two.tv,
                    furniture: true,
                    area: parseInt(this.Room_Two.area)
                };
                flat.rooms.push(room_1);
                flat.rooms.push(room_2);
                console.log(flat);
            }else if (this.RoomCount === 3) {
                let room_1 = {
                    living_place: [
                    {
                    num_of_berth: this.Room_One.OneMenBed + this.Room_One.TwoMenBed
                    }
                    ],
                    max_residents: this.Room_One.MaxLivers,
                    num_of_windows: this.Room_One.num_of_windows,
                    balcony: this.Room_One.balcony,
                    num_of_tables: this.Room_One.TableCount,
                    num_of_chairs: this.Room_One.ChairCount,
                    tv: this.Room_One.tv,
                    furniture: true,
                    area: parseInt(this.Room_One.area)
                };
                let room_2 = {
                    living_place: [
                    {
                    num_of_berth: this.Room_Two.OneMenBed + this.Room_Two.TwoMenBed
                    }
                    ],
                    max_residents: this.Room_Two.MaxLivers,
                    num_of_windows: this.Room_Two.num_of_windows,
                    balcony: this.Room_Two.balcony,
                    num_of_tables: this.Room_Two.TableCount,
                    num_of_chairs: this.Room_Two.ChairCount,
                    tv: this.Room_Two.tv,
                    furniture: true,
                    area: parseInt(this.Room_Two.area)
                };
                let room_3 = {
                    living_place: [
                    {
                    num_of_berth: this.Room_Three.OneMenBed + this.Room_Three.TwoMenBed
                    }
                    ],
                    max_residents: this.Room_Three.MaxLivers,
                    num_of_windows: this.Room_Three.num_of_windows,
                    balcony: this.Room_Three.balcony,
                    num_of_tables: this.Room_Three.TableCount,
                    num_of_chairs: this.Room_Three.ChairCount,
                    tv: this.Room_Three.tv,
                    furniture: true,
                    area: parseInt(this.Room_Three.area)
                };
                flat.rooms.push(room_1);
                flat.rooms.push(room_2);
                flat.rooms.push(room_3);
                console.log(flat);
            }
            let flt_jsn = JSON.stringify(flat);
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.getAccessToken;
            axios.post('http://185.251.91.134/api/lot', 
                flt_jsn,
            )

            .then((response) => {
                console.log(response);
                console.log('Данные отправлены успешно!')

            })

            .catch((error) => {
                console.log(error.response.data.message);
                this.error_check = true;
                this.error_message = error.response.data.message;
                
            });
            
        },
        RoomCountInc() {
                if (this.RoomCount<3) {
                    this.RoomCount++;
                }
        },
        RoomCountDec() {
                if (this.RoomCount>1) {
                    this.RoomCount--;
                }
        },
        // Методы комнаты 1
            RoomOneArea() {
                this.Room_One.area = this.area_1
                console.log(this.Room_One.area);
            },
            MaxLiversInc() {
                if (this.Room_One.MaxLivers<6) {
                    this.Room_One.MaxLivers++;
                }
            },
            MaxLiversDec() {
                if (this.Room_One.MaxLivers>1) {
                    this.Room_One.MaxLivers--;
                }
            },
            OneMenBedInc() {
                if (this.Room_One.OneMenBed<6) {
                    this.Room_One.OneMenBed++;
                }
            },
            OneMenBedDec() {
                if (this.Room_One.OneMenBed>0) {
                    this.Room_One.OneMenBed--;
                }
            },
            TwoMenBedInc() {
                if (this.Room_One.TwoMenBed<6) {
                    this.Room_One.TwoMenBed++;
                }
            },
            TwoMenBedDec() {
                if (this.Room_One.TwoMenBed>0) {
                    this.Room_One.TwoMenBed--;
                }
            },
            TableCountInc() {
                if (this.Room_One.TableCount<6) {
                    this.Room_One.TableCount++;
                }
            },
            TableCountDec() {
                if (this.Room_One.TableCount>0) {
                    this.Room_One.TableCount--;
                }
            },
            ChairCountInc() {
                if (this.Room_One.ChairCount<15) {
                    this.Room_One.ChairCount++;
                }
            },
            ChairCountDec() {
                if (this.Room_One.ChairCount>0) {
                    this.Room_One.ChairCount--;
                }
            },
        // Методы комнаты 2
            RoomTwoArea() {
                this.Room_Two.area = this.area_2
                console.log(this.Room_Two.area);
            },
            TwoMaxLiversInc() {
                if (this.Room_Two.MaxLivers<6) {
                    this.Room_Two.MaxLivers++;
                }
            },
            TwoMaxLiversDec() {
                if (this.Room_Two.MaxLivers>1) {
                    this.Room_Two.MaxLivers--;
                }
            },
            TwoOneMenBedInc() {
                if (this.Room_Two.OneMenBed<6) {
                    this.Room_Two.OneMenBed++;
                }
            },
            TwoOneMenBedDec() {
                if (this.Room_Two.OneMenBed>0) {
                    this.Room_Two.OneMenBed--;
                }
            },
            TwoTwoMenBedInc() {
                if (this.Room_Two.TwoMenBed<6) {
                    this.Room_Two.TwoMenBed++;
                }
            },
            TwoTwoMenBedDec() {
                if (this.Room_Two.TwoMenBed>0) {
                    this.Room_Two.TwoMenBed--;
                }
            },
            TwoTableCountInc() {
                if (this.Room_Two.TableCount<6) {
                    this.Room_Two.TableCount++;
                }
            },
            TwoTableCountDec() {
                if (this.Room_Two.TableCount>0) {
                    this.Room_Two.TableCount--;
                }
            },
            TwoChairCountInc() {
                if (this.Room_Two.ChairCount<15) {
                    this.Room_Two.ChairCount++;
                }
            },
            TwoChairCountDec() {
                if (this.Room_Two.ChairCount>0) {
                    this.Room_Two.ChairCount--;
                }
            },
        // Методы комнаты 3
            RoomThreeArea() {
                this.Room_Three.area = this.area_3
                console.log(this.Room_Three.area);
            },
            ThreeMaxLiversInc() {
                if (this.Room_Three.MaxLivers<6) {
                    this.Room_Three.MaxLivers++;
                }
            },
            ThreeMaxLiversDec() {
                if (this.Room_Three.MaxLivers>1) {
                    this.Room_Three.MaxLivers--;
                }
            },
            ThreeOneMenBedInc() {
                if (this.Room_Three.OneMenBed<6) {
                    this.Room_Three.OneMenBed++;
                }
            },
            ThreeOneMenBedDec() {
                if (this.Room_Three.OneMenBed>0) {
                    this.Room_Three.OneMenBed--;
                }
            },
            ThreeTwoMenBedInc() {
                if (this.Room_Three.TwoMenBed<6) {
                    this.Room_Three.TwoMenBed++;
                }
            },
            ThreeTwoMenBedDec() {
                if (this.Room_Three.TwoMenBed>0) {
                    this.Room_Three.TwoMenBed--;
                }
            },
            ThreeTableCountInc() {
                if (this.Room_Three.TableCount<6) {
                    this.Room_Three.TableCount++;
                }
            },
            ThreeTableCountDec() {
                if (this.Room_Three.TableCount>0) {
                    this.Room_Three.TableCount--;
                }
            },
            ThreeChairCountInc() {
                if (this.Room_Three.ChairCount<15) {
                    this.Room_Three.ChairCount++;
                }
            },
            ThreeChairCountDec() {
                if (this.Room_Three.ChairCount>0) {
                    this.Room_Three.ChairCount--;
                }
            },
        
    
    }
}
</script>