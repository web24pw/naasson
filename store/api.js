import axios from 'axios'
import projectsJson from './projects.json'

const defaultState = {
  pokemon: {},
  projects: []
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
  projects: state => state.projects
}


/*
Mutations
*/
export const mutations = {
  update_pokemon: (state, pokemon) => {
    state.pokemon = pokemon
  },
  update_projects: (state, projects) => {
    console.log(projects)
    state.projects = projects

    console.log(state.projects)
  }
}


/*
Actions
*/

export const actions = {
  callProjects: ({commit}, params) => {
    //console.log('I make the call here', params)
    commit('update_projects', projectsJson)
    //axios.get('http://pokeapi.salestock.net/api/v2/pokemon/' + id).then(response => commit('update_projects', response.data))
  }
}
