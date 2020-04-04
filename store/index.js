export const state = () => ({
  listss: []
})

export const mutations = {
  adds (state, text) {
    state.listss.push({
      text,
      done: false
    })
  },
  toggles (state, todo) {
    todo.done = !todo.done
  }
}


