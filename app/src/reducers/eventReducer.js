export function event(state = [], action) {
  switch (action.type) {
  case 'CREATE_EVENT':
    return {
      ...state,
      title:    action.title,
      subtitle: action.subtitle,
      body:     action.body
    }
  case 'UPDATE_EVENT':
    return {
      ...state,
      body: action.body
    }
  default:
    return state
  }
}