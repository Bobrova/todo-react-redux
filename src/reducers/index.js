import { combineReducers } from 'redux';

import todos from './ToDoList';
import todoFilters from './ToDoFilters';

export default combineReducers({
  todos,
  todoFilters,
});
