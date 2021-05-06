export const state = () => ({
    user_id: 0,
})

export const getters = {
    getUserId: (state) => {
        return state.user_id;
    },
}

export const mutations = {
    setUserId(state, id) {
        state.user_id = id;
    },
}

