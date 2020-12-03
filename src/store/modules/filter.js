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
        }
    },
    state: {
        roomTtmetroType: '',
        roomTtmetroTime: '',
        internet: false,
        stove: '',
        filterRooms: new Map,
    },
    getters: {
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
        }
    },
}