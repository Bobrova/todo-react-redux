import { SET_VISIBILITY_FILTER } from '../constants/ActionTypes'
import { SHOW_ALL } from '../constants/TodoFilters'

const initialState =
  localStorage.getItem("todoApp-redux") &&
  JSON.parse(localStorage.getItem("todoApp-redux")).todos.length !== 0
    ? JSON.parse(localStorage.getItem("todoApp-redux")).todoFilters
    : SHOW_ALL;

export default function todoFilters(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}
