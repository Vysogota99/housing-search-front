<template>
<v-overlay
    :value="overlay"
>
    <div class="filter-card">
        <div class="filter-card-header">
            <v-btn
                class="filter-card-btn-close mx-2"
                fab
                dark
                small
                color="#512DE4"
                @click="isActive()"
            >
                <v-icon>
                    mdi-minus
                </v-icon>
            </v-btn>
            <h2>Фильтры</h2>
        </div>
        <div class="filter-card-body">
            <div class="row">
                <div class="col-3 left-col">
                    <span>До метро</span>
                </div>
                <div class="col-9 right-col">
                    <div class="form_radio_group">
                        <div class="form_radio_group-item">
                            <input id="byFoot" type="radio" name="toMetro" checked value="time_to_metro_on_foot" v-model="ttmetro_type">
                            <label for="byFoot">Пешком</label>
                        </div>
                        <div class="form_radio_group-item way_to_metro">
                            <input id="byTransport" type="radio" name="toMetro" value="time_to_metro_by_transport" v-model="ttmetro_type">
                            <label for="byTransport">На транспорте</label>
                        </div>
                    </div>
                    <div class="text">
                        <span> менее </span>
                    </div>
                    <input type="text" class="default-input w78" placeholder="45" v-model="ttmetro_time">
                    <div class="text">
                        <span> минут</span>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-3 left-col">
                    <span>Свободно мест</span>
                </div>
                <div class="col-2 right-col">
                    <button class="default-btn-round" @click="free_places++">
                        <v-icon
                            color="#512DE4"
                        >
                            mdi-plus
                        </v-icon>
                    </button>
                    <div class="text">
                        <span>{{free_places}}</span>
                    </div>
                    <button class="default-btn-round" @click="free_places--">
                       <v-icon
                            color="#512DE4"
                        >
                            mdi-minus
                        </v-icon>
                    </button>
                </div>
                <div class="col-4 left-col">
                    <span>Односпальных кроватей</span>
                </div>
                <div class="col-2 right-col">
                    <button class="default-btn-round" @click="one_bed_place++">
                        <v-icon
                            color="#512DE4"
                        >
                            mdi-plus
                        </v-icon>
                    </button>
                    <div class="text">
                        <span >{{one_bed_place}}</span>
                    </div>
                    <button class="default-btn-round" @click="one_bed_place--">
                       <v-icon
                            color="#512DE4"
                        >
                            mdi-minus
                        </v-icon>
                    </button>
                </div>
            </div>

            <div class="row">
                <div class="col-3 left-col">
                    <span>Максимальное количество жильцов</span>
                </div>
                <div class="col-2 right-col">
                    <button class="default-btn-round" @click="max_num_residents++">
                        <v-icon
                            color="#512DE4"
                        >
                            mdi-plus
                        </v-icon>
                    </button>
                    <div class="text">
                        <span >{{max_num_residents}}</span>
                    </div>
                    <button class="default-btn-round" @click="max_num_residents--">
                       <v-icon
                            color="#512DE4"
                        >
                            mdi-minus
                        </v-icon>
                    </button>
                </div>
                <div class="col-4 left-col">
                    <span>Двуспальных кроватей</span>
                </div>
                <div class="col-2 right-col">
                    <button class="default-btn-round" @click="two_bed_place++">
                        <v-icon
                            color="#512DE4"
                        >
                            mdi-plus
                        </v-icon>
                    </button>
                    <div class="text">
                        <span>{{two_bed_place}}</span>
                    </div>
                    <button class="default-btn-round" @click="two_bed_place--">
                       <v-icon
                            color="#512DE4"
                        >
                            mdi-minus
                        </v-icon>
                    </button>
                </div>
            </div>

            <div class="row">
                <div class="col-3 left-col">
                    <span>Площадь</span>
                </div>
                <div class="col-9 right-col">
                    <input type="text" class="default-input w78" placeholder="15" v-model="area">
                    <div class="text">
                        <span> м <sup>2</sup></span>
                    </div>
                </div>
            </div>

            <br>
            
            <div class="row">
                <div class="col-3 left-col no-pading-hor">
                    <span>Удобства</span>
                </div>
                <div class="col-4 right-col no-pading-hor">
                    <div class="checkbox">
                        <input type="checkbox" id="internet" v-model="internet">
                        <label for="internet"><span>интернет</span></label>
                    </div>
                </div>
                <div class="col-5 right-col no-pading-hor">
                    <div class="checkbox">
                        <input type="checkbox" id="wifi" v-model="wifi">
                        <label for="wifi"><span>Wi-Fi</span></label>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-3 left-col no-pading-hor">
                </div>
                <div class="col-4 right-col no-pading-hor">
                    <div class="checkbox">
                        <input type="checkbox" id="windows" v-model="windows">
                        <label for="windows"><span>окна</span></label>
                    </div>
                </div>
                <div class="col-5 right-col no-pading-hor">
                    <div class="checkbox">
                        <input type="checkbox" id="tv" v-model="tv">
                        <label for="tv"><span>телевизор</span></label>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-3 left-col no-pading-hor">
                </div>
                <div class="col-4 right-col no-pading-hor">
                    <div class="checkbox">
                        <input type="checkbox" id="balcony" v-model="balcony">
                        <label for="balcony"><span>балкон</span></label>
                    </div>
                </div>
                <div class="col-5 right-col no-pading-hor">
                    <div class="checkbox">
                        <input type="checkbox" id="cond" v-model="cond">
                        <label for="cond"><span>кондиционер</span></label>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-3 left-col no-pading-bot">
                </div>
                <div class="col-4 right-col no-pading-bot">
                    <div class="checkbox">
                        <input type="checkbox" id="bathroom" v-model="bathroom">
                        <label for="bathroom"><span>ванная</span></label>
                    </div>
                </div>
                <div class="col-5 right-col no-pading-bot">
                    <div class="checkbox">
                        <input type="checkbox" id="refr" v-model="refr">
                        <label for="refr"><span>холодильник</span></label>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-3 left-col no-pading-hor">
                </div>
                <div class="col-4 right-col no-pading-hor">
                    <div class="checkbox">
                        <input type="checkbox" id="restroom" v-model="restroom">
                        <label for="restroom"><span>туалет</span></label>
                    </div>
                </div>
                <div class="col-5 right-col no-pading-hor">
                    <div class="checkbox">
                        <input type="checkbox" id="vac_cleaner" v-model="vac_cleaner">
                        <label for="vac_cleaner"><span>пылесос</span></label>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-3 left-col no-pading-hor">
                </div>
                <div class="col-4 right-col no-pading-hor">
                    <div class="checkbox">
                        <input type="checkbox" id="kitchen" v-model="kitchen">
                        <label for="kitchen"><span>кухня</span></label>
                    </div>
                </div>
                <div class="col-5 right-col no-pading-hor">
                    <div class="checkbox">
                        <input type="checkbox" id="micr_ovem" v-model="micr_ovem">
                        <label for="micr_ovem"><span>микроволновка</span></label>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-3 left-col no-pading-bot">
                </div>
                <div class="col-4 right-col no-pading-bot">
                    <input class="custom-radio" name="stove" type="radio" id="gas" value="1" v-model="stove">
                    <label for="gas"><span>газовая плита</span></label>
                </div>
                <div class="col-5 right-col no-pading-bot">
                    <div class="checkbox">
                        <input type="checkbox" id="washer" v-model="washer">
                        <label for="washer"><span>стиральная машина</span></label>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-3 left-col no-pading-hor">
                </div>
                <div class="col-4 right-col no-pading-hor">
                    <input class="custom-radio" name="stove" type="radio" id="electic" value="3" checked v-model="stove">
                    <label for="electic"><span>электрическая плита</span></label>
                </div>
                <div class="col-5 right-col no-pading-hor">
                    <div class="checkbox">
                        <input type="checkbox" id="dryer" v-model="dryer">
                        <label for="dryer"><span>сушильная машина</span></label>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-3 left-col no-pading-hor">
                </div>
                <div class="col-4 right-col no-pading-hor">
                    <input class="custom-radio" id="induct" type="radio" name="radio" value="2" checked v-model="stove"> 
                    <label for="induct"><span>индукционная плита</span></label>
                </div>
                <div class="col-5 right-col no-pading-hor">
                    <div class="checkbox">
                        <input type="checkbox" id="dish_wash" v-model="dish_wash">
                        <label for="dish_wash"><span>посудомоечная машина</span></label>
                    </div>
                </div>
            </div>



            <div class="row">
                <div class="col-3 left-col no-pading-bot">
                </div>
                <div class="col-4 right-col no-pading-bot">
                    <div class="checkbox">
                        <input type="checkbox" id="pass_elev" v-model="pass_elev">
                        <label for="pass_elev"><span>грузовой лифт</span></label>
                    </div>
                </div>
                <div class="col-5 right-col no-pading-bot">
                    <div class="checkbox">
                        <input type="checkbox" id="service_elev" v-model="service_elev">
                        <label for="service_elev"><span>пассажирский лифт</span></label>
                    </div>
                </div>
            </div>
            <br>

            <div class="row">
                <div class="col-3 left-col">
                    <span>До метро</span>
                </div>
                <div class="col-9 right-col">
                    <div class="form_radio_group">
                        <div class="form_radio_group-item">
                            <input id="ba" type="radio" name="repair" checked value="1" v-model="repair">
                            <label for="ba">Бабушкин</label>
                        </div>
                        <div class="form_radio_group-item">
                            <input id="euro" type="radio" name="repair" value="2" v-model="repair">
                            <label for="euro">Евроремонт</label>
                        </div>
                        <div class="form_radio_group-item way_to_metro">
                            <input id="design" type="radio" name="repair" value="3" v-model="repair">
                            <label for="design">Дизайнерский</label>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-3 left-col no-pading-bot">
                    <span>Этаж</span>
                </div>
                <div class="col-9 right-col no-pading-bot">
                    <input type="text" class="default-input w208" placeholder="2" v-model="floor">
                </div>
            </div>

            <div class="row">
                <div class="col-3 left-col  no-pading-bot">
                    <span>Этажей в дома</span>
                </div>
                <div class="col-9 right-col  no-pading-bot">
                    <input type="text" class="default-input w208" placeholder="5" v-model="total_floor">
                </div>
            </div>

            <br>

            <div class="row">
                <div class="col-3 left-col no-pading-bot">
                    <span>Правила</span>
                </div>
                <div class="col-3 right-col no-pading-bot">
                    <div class="checkbox">
                        <input type="checkbox" id="smoking" v-model="smoking">
                        <label for="smoking"><span>можно курить</span></label>
                    </div>
                </div>
                <div class="col-6 right-col no-pading-bot">
                    <div class="checkbox">
                        <input type="checkbox" id="animals" v-model="animals">
                        <label for="animals"><span>Можно с животными</span></label>
                    </div>
                </div>
            </div>
        </div>
        <hr>
        <div class="filter-footer">
            <button class="btn-no-bgc">Очистить все</button>
            <button class="default-btn mr0">Применить</button>
        </div>
    </div>
</v-overlay>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex'
export default {
    data: function(){
        return{
        }
    },
    props: {
        isActive: {
            type: Function,
            required: true
        },
        overlay: {
            type: Boolean,
            required: true,
        }
    },
    methods: {
        ...mapMutations(
            [
                'setToFilterRooms',
                'deleteFromFilterRooms',
                'updateRoomTtmetroType',
                'updateRoomTtmetroTime',
                'updateInternet',
                'updateStove',
                'updateArea',
                'updateWindows',
                'updateWifi',
                'updateTv',
                'updateBalcony',
                'updateCond',
                'updateBathroom',
                'updateRefr',
                'updateRestroom',
                'updateVaccleaner',
                'updateKitchen',
                'updateMicrovem',
                'updateWasher',
                'updateDryer',
                'updateDishwash',
                'updatePasselev',
                'updateServiceelev',
                'updateSmoking',
                'updateAnimals',
                'updateFloor',
                'updateTotalfloor',
                'updateRepair',
                'updateFreeplaces',
                'updateMaxnumresidents',
                'updateOnebedplace',
                'updateTwobedplace',
            ])
    },
    computed: {
        ...mapGetters([
            'roomTtmetroType',
            'roomTtmetroTime',
            'getInternet',
            'getStove',
            'getArea',
            'getWindows',
            'getWifi',
            'getTv',
            'getBalcony',
            'getCond',
            'getBathroom',
            'getRefr',
            'getRestroom',
            'getVaccleaner',
            'getKitchen',
            'getMicrovem',
            'getWasher',
            'getDryer',
            'getDishwash',
            'getPasselev',
            'getServiceselev',
            'getSmoking',
            'getAnimals',
            'getFloor',
            'getTotalfloor',
            'getRepair',
            'getFreeplaces',
            'getMaxnumresidents',
            'getOnebedplace',
            'getTwobedplace',
        ]),

        ttmetro_time: {
            get() {
                return this.roomTtmetroTime;
            },
            set(value) {
                this.updateRoomTtmetroTime(value);
                if(value > 0 && value != '') {
                    const result = "<" + value;
                    this.setToFilterRooms({
                        key: '',
                        value: result,
                    })
                }else
                {
                    this.updateRoomTtmetroTime('');
                    this.deleteFromFilterRooms('ttmetro_type_time');
                }
            }
        },

        ttmetro_type: {
            get() {
                return this.roomTtmetroType;
            },
            set(value) {
                const time = this.roomTtmetroTime;
                this.updateRoomTtmetroType(value);
                if(value != '' && time > 0 && time != '') {
                    const result = time;
                    this.setToFilterRooms({
                        key: this.roomTtmetroType,
                        value: result,
                    })
                }else{
                    
                    this.deleteFromFilterRooms('ttmetro_type');
                }
            }
        },





        internet: {
            get() {
                return this.getInternet;
            },
            set(value) {
                this.updateInternet(value);
                if(value == true) {
                    const result = "=" + value;
                    this.setToFilterRooms({
                        key: 'internet',
                        value: result,
                    })
                }else{
                    this.deleteFromFilterRooms('internet');
                }
            },
        },

        stove: {
            get() {
                return this.getStove;
            },
            set(value) {
                this.updateStove(value);
                if(value != '') {
                    const result = "=" + value;
                    this.setToFilterRooms({
                        key: 'stove',
                        value: result,
                    })
                }else{
                    
                    this.deleteFromFilterRooms('stove');
                }
            }
        },
        
        area: {
            get() {
                return this.getArea;
            },
            set(value) {
                this.updateArea(value);
                if(value > 0 && value != '') {
                    const result = "<" + value;
                    this.setToFilterRooms({
                        key: 'area',
                        value: result,
                    })
                }else
                {
                    this.updateArea('');
                    this.deleteFromFilterRooms('area');
                }
            }
        },

        windows: {
            get() {
                return this.getWindows;
            },
            set(value) {
                this.updateWindows(value);
                if(value == true) {
                    const result = "=" + value;
                    this.setToFilterRooms({
                        key: 'windows',
                        value: result,
                    })
                }else{
                    this.deleteFromFilterRooms('windows');
                }
            },
        },

        wifi: {
            get() {
                return this.getWifi;
            },
            set(value) {
                this.updateWifi(value);
                if(value == true) {
                    const result = "=" + value;
                    this.setToFilterRooms({
                        key: 'wifi',
                        value: result,
                    })
                }else{
                    this.deleteFromFilterRooms('wifi');
                }
            },
        },

        tv: {
            get() {
                return this.getTv;
            },
            set(value) {
                this.updateTv(value);
                if(value == true) {
                    const result = "=" + value;
                    this.setToFilterRooms({
                        key: 'tv',
                        value: result,
                    })
                }else{
                    this.deleteFromFilterRooms('tv');
                }
            },
        },

        balcony: {
            get() {
                return this.getBalcony;
            },
            set(value) {
                this.updateBalcony(value);
                if(value == true) {
                    const result = "=" + value;
                    this.setToFilterRooms({
                        key: 'balcony',
                        value: result,
                    })
                }else{
                    this.deleteFromFilterRooms('balcony');
                }
            },
        },
        
        cond: {
            get() {
                return this.getCond;
            },
            set(value) {
                this.updateCond(value);
                if(value == true) {
                    const result = "=" + value;
                    this.setToFilterRooms({
                        key: 'cond',
                        value: result,
                    })
                }else{
                    this.deleteFromFilterRooms('cond');
                }
            },
        },

        bathroom: {
            get() {
                return this.getBathroom;
            },
            set(value) {
                this.updateBathroom(value);
                if(value == true) {
                    const result = "=" + value;
                    this.setToFilterRooms({
                        key: 'bathroom',
                        value: result,
                    })
                }else{
                    this.deleteFromFilterRooms('bathroom');
                }
            },
        },

        refr: {
            get() {
                return this.getRefr;
            },
            set(value) {
                this.updateRefr(value);
                if(value == true) {
                    const result = "=" + value;
                    this.setToFilterRooms({
                        key: 'refrigerator',
                        value: result,
                    })
                }else{
                    this.deleteFromFilterRooms('refrigerator');
                }
            },
        },

        restroom: {
            get() {
                return this.getRestroom;
            },
            set(value) {
                this.updateRestroom(value);
                if(value == true) {
                    const result = "=" + value;
                    this.setToFilterRooms({
                        key: 'restroom',
                        value: result,
                    })
                }else{
                    this.deleteFromFilterRooms('restroom');
                }
            },
        },

        vac_cleaner: {
            get() {
                return this.getVaccleaner;
            },
            set(value) {
                this.updateVaccleaner(value);
                if(value == true) {
                    const result = "=" + value;
                    this.setToFilterRooms({
                        key: 'vacuum_cleaner',
                        value: result,
                    })
                }else{
                    this.deleteFromFilterRooms('vacuum_cleaner');
                }
            },
        },
        kitchen: {
            get() {
                return this.getKitchen;
            },
            set(value) {
                this.updateKitchen(value);
                if(value == true) {
                    const result = "=" + value;
                    this.setToFilterRooms({
                        key: 'kitchen',
                        value: result,
                    })
                }else{
                    this.deleteFromFilterRooms('kitchen');
                }
            },
        },

        micr_ovem: {
            get() {
                return this.getMicrovem;
            },
            set(value) {
                this.updateMicrovem(value);
                if(value == true) {
                    const result = "=" + value;
                    this.setToFilterRooms({
                        key: 'microwave_oven',
                        value: result,
                    })
                }else{
                    this.deleteFromFilterRooms('microwave_oven');
                }
            },
        },

        washer: {
            get() {
                return this.getWasher;
            },
            set(value) {
                this.updateWasher(value);
                if(value == true) {
                    const result = "=" + value;
                    this.setToFilterRooms({
                        key: 'washer',
                        value: result,
                    })
                }else{
                    this.deleteFromFilterRooms('washer');
                }
            },
        },

        dryer: {
            get() {
                return this.getDryer;
            },
            set(value) {
                this.updateDryer(value);
                if(value == true) {
                    const result = "=" + value;
                    this.setToFilterRooms({
                        key: 'dryer',
                        value: result,
                    })
                }else{
                    this.deleteFromFilterRooms('dryer');
                }
            },
        },

        dish_wash: {
            get() {
                return this.getDishwash;
            },
            set(value) {
                this.updateDishwash(value);
                if(value == true) {
                    const result = "=" + value;
                    this.setToFilterRooms({
                        key: 'dishwasher',
                        value: result,
                    })
                }else{
                    this.deleteFromFilterRooms('dishwasher');
                }
            },
        },

        pass_elev: {
            get() {
                return this.getPasselev;
            },
            set(value) {
                this.updatePasselev(value);
                if(value == true) {
                    const result = "=" + value;
                    this.setToFilterRooms({
                        key: 'pass_elevator',
                        value: result,
                    })
                }else{
                    this.deleteFromFilterRooms('pass_elevator');
                }
            },
        },

        service_elev: {
            get() {
                return this.getServiceelev;
            },
            set(value) {
                this.updateServiceelev(value);
                if(value == true) {
                    const result = "=" + value;
                    this.setToFilterRooms({
                        key: 'service_elevator',
                        value: result,
                    })
                }else{
                    this.deleteFromFilterRooms('service_elevator');
                }
            },
        },
        
        smoking: {
            get() {
                return this.getSmoking;
            },
            set(value) {
                this.updateSmoking(value);
                if(value == true) {
                    const result = "=" + value;
                    this.setToFilterRooms({
                        key: 'smoking',
                        value: result,
                    })
                }else{
                    this.deleteFromFilterRooms('smoking');
                }
            },
        },
        animals: {
            get() {
                return this.getAnimals;
            },
            set(value) {
                this.updateAnimals(value);
                if(value == true) {
                    const result = "=" + value;
                    this.setToFilterRooms({
                        key: 'animals',
                        value: result,
                    })
                }else{
                    this.deleteFromFilterRooms('animals');
                }
            },
        },

        floor: {
            get() {
                return this.getFloor;
            },
            set(value) {
                this.updateFloor(value);
                if(value > 0 && value != '') {
                    const result = "<" + value;
                    this.setToFilterRooms({
                        key: 'floor',
                        value: result,
                    })
                }else
                {
                    this.updateFloor('');
                    this.deleteFromFilterRooms('floor');
                }
            }
        },

        total_floor: {
            get() {
                return this.getTotalfloor;
            },
            set(value) {
                this.updateTotalfloor(value);
                if(value > 0 && value != '') {
                    const result = "<" + value;
                    this.setToFilterRooms({
                        key: 'floor_total ',
                        value: result,
                    })
                }else
                {
                    this.updateTotalfloor('');
                    this.deleteFromFilterRooms('floor_total ');
                }
            }
        },

        repair: {
            get() {
                return this.getRepair;
            },
            set(value) {
                this.updateRepair(value);
                if(value != '') {
                    const result = "=" + value;
                    this.setToFilterRooms({
                        key: 'repair',
                        value: result,
                    })
                }else{
                    
                    this.deleteFromFilterRooms('repair');
                }
            }
        },

        free_places: {
            get() {
                return this.getFreeplaces;
            },
            set(value) {
                this.updateFreeplaces(value);
                if(value >= 1) {
                    const result = "=" + value;
                    this.setToFilterRooms({
                        key: 'free_places',
                        value: result,
                    })
                }else{
                    this.updateFreeplaces(0);
                    this.deleteFromFilterRooms('free_places');
                }
            }
        },

        max_num_residents: {
            get() {
                return this.getMaxnumresidents;
            },
            set(value) {
                this.updateMaxnumresidents(value);
                if(value >= 1) {
                    const result = "=" + value;
                    this.setToFilterRooms({
                        key: 'max_num_residents',
                        value: result,
                    })
                }else{
                    this.updateMaxnumresidents(0);
                    this.deleteFromFilterRooms('max_num_residents');
                }
            }
        },

        one_bed_place: {
            get() {
                return this.getOnebedplace;
            },
            set(value) {
                this.updateOnebedplace(value);
                if(value >= 1) {
                    const result = "=" + value;
                    this.setToFilterRooms({
                        key: 'one_bed_place',
                        value: result,
                    })
                }else{
                    this.updateOnebedplace(0);
                    this.deleteFromFilterRooms('one_bed_place');
                }
            }
        },

        two_bed_place: {
            get() {
                return this.getTwobedplace;
            },
            set(value) {
                this.updateTwobedplace(value);
                if(value >= 1) {
                    const result = "=" + value;
                    this.setToFilterRooms({
                        key: 'two_bed_place',
                        value: result,
                    })
                }else{
                    this.updateTwobedplace(0);
                    this.deleteFromFilterRooms('two_bed_place');
                }
            }
        },
    },
}
</script>

<style>
.filter-card{
    overflow: auto;
    width: 1127px;
    max-height: 700px;
    background-color: #fff;
    border: 2px solid #512DE4;
    border-radius: 5px;
    padding: 30px;
}
.filter-footer{
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
}

.filter-card-header{
    text-align: center;
    margin-bottom: 30px
}
.filter-card-header h2{
    font-weight: 700;
    font-size: 36px;
    color: #232323;
}
.filter-card-btn-close{
    position: absolute;
    top: 40px;
    right: 36px;
}
.left-col{
    text-align: right;
}
.right-col{
    display: flex;
    flex-flow: row nowrap;
}
.right-col label{
    color: #232323;
}
.text{
    margin: 0 10px;
}
.filter-card-body span{
    color: #232323;
    font-weight: 400;
    font-size: 24px;
}
.way_to_metro label{
    width: 185px;
}
.w78{
    width: 78px;
}
.w208{
    width: 208px;
}
.mr0{
    margin-right: 0;
}
.default-btn-round{
    color: #512DE4;
    border: 2px solid #888888;
    background-color: #fff;
    border-radius: 99px;
    width: 46px;
    height: 46px;
    padding: 0px;
}
.checkbox input[type="checkbox"] {
    opacity: 0;
}

.checkbox label {
    position: relative;
    display: inline-block;
    
    /*16px width of fake checkbox + 6px distance between fake checkbox and text*/
    padding-left: 22px;
}

.checkbox label::before,
.checkbox label::after {
    position: absolute;
    content: "";
    
    /*Needed for the line-height to take effect*/
    display: inline-block;
}

/*Outer box of the fake checkbox*/
.checkbox label::before{
    height: 24px;
    width: 24px;
    
    border: 2px solid #512DE4;
    border-radius: 5px;
    left: -10px;
    
    /*(24px line-height - 16px height of fake checkbox) / 2 - 1px for the border
     *to vertically center it.
     */
    top: 7px;
}

/*Checkmark of the fake checkbox*/
.checkbox label::after {
    height: 7px;
    width: 14px;
    border-left: 4px solid #512DE4;
    border-bottom: 4px solid #512DE4;
    
    transform: rotate(-45deg);
    
    left: -4px;
    top: 14px;
}

/*Hide the checkmark by default*/
.checkbox input[type="checkbox"] + label::after {
    content: none;
}

/*Unhide on the checked state*/
.checkbox input[type="checkbox"]:checked + label::after {
    content: "";
}
.no-pading-hor{
    padding-bottom: 0;
    padding-top: 0;
}
.no-pading-bot{
    padding-bottom: 0;
}
.btn-no-bgc{
    color: #232323;
    font-size: 24px;
    font-weight: 400;
    border-bottom: 3px solid #858585;
    padding-bottom: 0px;
}

.custom-radio {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }
  /* для элемента label связанного с .custom-radio */
  .custom-radio+label {
    display: inline-flex;
    align-items: center;
    user-select: none;
  }
  /* создание в label псевдоэлемента  before со следующими стилями */
  .custom-radio+label::before {
    content: '';
    display: inline-block;
    width: 1em;
    height: 1em;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid #adb5bd;
    border-radius: 50%;
    margin-right: 0.5em;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
  }
  /* стили при наведении курсора на радио */
  .custom-radio:not(:disabled):not(:checked)+label:hover::before {
    border-color: #b3d7ff;
  }
  /* стили для активной радиокнопки (при нажатии на неё) */
  .custom-radio:not(:disabled):active+label::before {
    background-color: #b3d7ff;
    border-color: #b3d7ff;
  }
  /* стили для радиокнопки, находящейся в фокусе */
  .custom-radio:focus+label::before {
    box-shadow: 0 0 0 0.2rem #512DE4;
  }
  /* стили для радиокнопки, находящейся в фокусе и не находящейся в состоянии checked */
  .custom-radio:focus:not(:checked)+label::before {
    border-color: #80bdff;
  }
  /* стили для радиокнопки, находящейся в состоянии checked */
  .custom-radio:checked+label::before {
    border-color: #512DE4;
    background-color: #512DE4;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
  }
  /* стили для радиокнопки, находящейся в состоянии disabled */
  .custom-radio:disabled+label::before {
    background-color: #e9ecef;
  }
</style>