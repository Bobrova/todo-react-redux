import { createSelector } from 'reselect';
import * as tabs from '../constants/TodoFilters';

const getVisibilityFilter = (state) => state.todoFilters;
const getTodos = (state) => state.todos;

export const getVisibleTodos = createSelector(
  [getVisibilityFilter, getTodos],
  (todoFilters, todos) => {
    switch (todoFilters) {
      case tabs.SHOW_ALL:
        return todos;
      case tabs.SHOW_COMPLETED:
        return todos.filter(itemList => itemList.completed);
      case tabs.SHOW_ACTIVE:
        return todos.filter(itemList => !itemList.completed);
      default:
        break;
    }
  },
);

export const getcountActiveItem = createSelector(
  [getTodos],
  todos => {
    return (todos.filter(itemList => !itemList.completed)).length;
  },
);

export const isCheckedExists = createSelector(
  [getTodos],
  todos => {
    return (todos.filter(itemList => itemList.completed)).length !== 0;
  },
);

export const getCurrentId = createSelector(
  [getTodos],
  todos => {
    return todos.length !== 0 ? todos[todos.length - 1].id : 0;
  },
);
