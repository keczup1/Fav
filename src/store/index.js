import Vue from "vue";
import Vuex from "vuex";
import myStore from './myStore'
import current from './current'
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        myStore,
        current
    }
});
