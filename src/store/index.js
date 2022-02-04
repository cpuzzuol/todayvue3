import { createStore } from 'vuex'

export default createStore({
  state: {
		apiUser: null,
		apiRoles: []
  },
  mutations: {
		setUser(state, apiUser) {
			state.apiUser = apiUser
		},
		setApiRoles(state, roles) {
			state.apiRoles = roles
		}
  },
  actions: {
  },
  modules: {
  }
})
