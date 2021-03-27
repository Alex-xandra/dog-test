import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        showLoader: false,
        favourites: []
    },
    mutations: {
        showLoader(state, show) {
            state.showLoader = show;
        },
        setFavourites(state, favourites) {
            state.favourites = favourites;
        },
        addFavourite(state, favourite) {
            state.favourites.push(favourite);
        },
        removeFavourite(state, favourite) {
            state.favourites = state.favourites.filter((a) => {
                return a !== favourite
            });
        }
    },
    actions: {},
    modules: {}
})
