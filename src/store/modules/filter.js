export default {
    actions: {

    },
    mutations: {
        setToFilterRooms(state, obj) {
            state.filterRooms.set(obj.key, obj.value);
            console.log(state.filterRooms);
        },
        deleteFromFilterRooms(state, key) {
            state.filterRooms.delete(key);
            console.log(state.filterRooms);
        },
        updateRoomTtmetroType(state, value) {
            state.roomTtmetroType = value;
        },
        updateRoomTtmetroTime(state, value) {
            state.roomTtmetroTime = value;
        },
        updateInternet(state, value) {
            state.internet = value;
        },
        updateStove(state, value) {
            state.stove = value;
        },
        updateArea(state, value) {
            state.area = value;
        },
        updateWindows(state, value) {
            state.windows = value;
        },
        updateWifi(state, value) {
            state.wifi = value;
        },
        updateTv(state, value) {
            state.tv = value;
        },
        updateBalcony(state, value) {
            state.balcony = value;
        },
        updateCond(state, value) {
            state.cond = value;
        },
        updateBathroom(state, value) {
            state.bathroom = value;
        },
        updateRefr(state, value) {
            state.refr = value;
        },
        updateRestroom(state, value) {
            state.restroom = value;
        },
        updateVaccleaner(state, value) {
            state.vac_cleaner = value;
        },
        updateKitchen(state, value) {
            state.kitchen = value;
        },
        updateMicrovem(state, value) {
            state.micr_ovem = value;
        },
        updateWasher(state, value) {
            state.washer = value;
        },
        updateDryer(state, value) {
            state.dryer = value;
        },
        updateDishwash(state, value) {
            state.dish_wash = value;
        },
        updatePasselev(state, value) {
            state.pass_elev = value;
        },
        updateServiceelev(state, value) {
            state.service_elev = value;
        },
        updateSmoking(state, value) {
            state.smoking = value;
        },
        updateAnimals(state, value) {
            state.animals = value;
        },
        updateFloor(state, value) {
            state.floor = value;
        },
        updateTotalfloor(state, value) {
            state.total_floor = value;
        },
        updateRepair(state, value) {
            state.repair = value;
        },
        updateFreeplaces(state, value) {
            state.free_places = value;
        },
        updateMaxnumresidents(state, value) {
            state.max_num_residents = value;
        },
        updateOnebedplace(state, value) {
            state.one_bed_place = value;
        },
        updateTwobedplace(state, value) {
            state.two_bed_place = value;
        },
        updateMinPrice(state, value) {
            state.min_price = value;
        },
        updateOrderBy(state, value) {
            state.order_by = value;
        },
        updateAddress(state, value) {
            this.address = value;
        }
    },
    state: {
        roomTtmetroType: '',
        roomTtmetroTime: '',
        internet: false,
        stove: '',
        area: '',
        windows: false,
        wifi: false,
        tv: false,
        balcony: false,
        cond: false,        
        bathroom: false,
        refr: false,
        restroom: false,
        vac_cleaner: false,
        kitchen: false,
        micr_ovem: false,
        washer: false,
        dryer: false,
        dish_wash: false,
        pass_elev: false,
        service_elev: false,
        smoking: false,
        animals: false, 
        floor: '',
        total_floor: '',
        repair: '',
        free_places: 0,
        max_num_residents: 0,
        one_bed_place: 0,
        two_bed_place: 0,
        ttmetro_type: '',
        min_price: 0,
        order_by: {
            id: 1,
            name:'время создания объявления - сначала новые',
            data: {
                target: 'desc',
                teg: 'created_at',
            }
        },
        address: '',

        filterRooms: new Map,
    },
    getters: {
        getMinPrice(state) {
            return state.min_price;
        },
        getOrderBy(state) {
            return state.order_by;
        },
        getAddress(state) {
            return state.address;
        },
        filterRooms(state) {
            return state.filterRooms;
        },
        roomTtmetroTime(state) {
            return state.roomTtmetroTime;
        },
        roomTtmetroType(state) {
            return state.roomTtmetroType;
        },
        getInternet(state) {
            return state.internet;
        },
        getStove(state) {
            return state.stove;
        },
        getArea(state) {
            return state.area;
        },
        getWindows(state) {
            return state.windows;
        },
        getWifi(state) {
            return state.wifi;
        },
        getTv(state) {
            return state.tv;
        },
        getBalcony(state) {
            return state.balcony;
        },
        getCond(state) {
            return state.cond;
        },
        getBathroom(state) {
            return state.bathroom;
        },
        getRefr(state) {
            return state.refr;
        },
        getRestroom(state) {
            return state.restroom;
        },
        getVaccleaner(state) {
            return state.vac_cleaner;
        },
        getKitchen(state) {
            return state.kitchen;
        },
        getMicrovem(state) {
            return state.micr_ovem;
        },
        getWasher(state) {
            return state.washer;
        },
        getDryer(state) {
            return state.dryer;
        },
        getDishwash(state) {
            return state.dish_wash;
        },
        getPasselev(state) {
            return state.pass_elev;
        },
        getServiceelev(state) {
            return state.service_elev;
        },
        getSmoking(state) {
            return state.smoking;
        },
        getAnimals(state) {
            return state.animals;
        },
        getFloor(state) {
            return state.floor;
        },
        getTotalfloor(state) {
            return state.total_floor;
        },
        getRepair(state) {
            return state.repair;
        },
        getFreeplaces(state) {
            return state.free_places;
        },
        getMaxnumresidents(state) {
            return state.max_num_residents;
        },
        getOnebedplace(state) {
            return state.one_bed_place;
        },
        getTwobedplace(state) {
            return state.two_bed_place;
        },
    }
}