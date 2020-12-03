import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth'
import filter from './modules/filter'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        auth,
        filter,
    }
})