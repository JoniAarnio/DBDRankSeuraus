import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        points: {
            combinedpoints: 666
        }
    }
});

//https://www.smashingmagazine.com/2020/01/data-components-vue-js/#emitting-custom-events-share-data-child-parent