import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        points: {
            lightbringerPoints: 0,
            evaderPoints: 0,
            benevolentPoints: 0,
            unbrokenPoints: 0,
            combinedPoints: 0
        }
    }
});

//https://www.smashingmagazine.com/2020/01/data-components-vue-js/#emitting-custom-events-share-data-child-parent