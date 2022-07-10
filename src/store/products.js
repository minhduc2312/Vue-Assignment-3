import products from "@/data/products.js";

const state = {
    products: [],
};


const getters = {
    getProducts(state) {
        return state.products;
    }
};

const mutations = {
    setProducts(state, payload) {
        state.products = [...payload]
    }
};

const actions = {
    async fetchData({ commit }) {
        commit('setProducts', products);
    }
};
export default {
    state,
    mutations,
    getters,
    actions,
    namespaced: true,
};
