// Coldreload causes module to be reloaded and state to be lost,
// arbitrary `process` attribute has been chosen to persist state
const todos = process.todomvc_store = process.todomvc_store || {}

export {
  todos,
}
