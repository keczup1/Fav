import Vue from "vue";
import Vuex from "vuex";
import templates from './templates'
Vue.use(Vuex);
/*
* If not building with SSR mode, you can
* directly export the Store instantiation
*/
export default new Vuex.Store({
    modules: {
        templates
    }
});
