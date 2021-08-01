import {
    createStore
} from "vuex";

import createPersistedState from "vuex-persistedstate";

import auth_store from './modules/auth_store';

export default createStore({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        auth_store,
    },
    plugins: [createPersistedState()],
});