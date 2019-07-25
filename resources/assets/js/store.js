import Vue from 'vue';
import Vuex from 'vuex';
import storeMember from '@/modules/user/store';
import { userInfo } from 'os';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        storeMember,
    },
});
