const defaultState = {
  machin: 'truc'
}

const inBrowser = typeof window !== 'undefined'
// if in browser, use pre-fetched state injected by SSR
let stateData
if (inBrowser && window.__INITIAL_STATE__) {
  stateData = window.__INITIAL_STATE__.page
} else {
  stateData = defaultState
}

export const state = () => (stateData)


/*
Geters
*/
export const getters = {
  bidule: state => state.machin
}


/*
Mutations
*/
export const mutations = {

}


/*
Actions
*/
export const actions = {
  callPokemonFromAppLogic: ({dispatch}, id) => {
    dispatch('callThePokemon', id, {root: true})
  },
  callProjectsFromAppLogic: ({dispatch}, params) => {
    dispatch('api/callProjects', params, {root: true})
  }
}
