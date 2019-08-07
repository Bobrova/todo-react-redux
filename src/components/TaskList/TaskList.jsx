import React from 'react';
import PropTypes from 'prop-types';
import ItemTaskList from '../ItemTaskList';
import ListFooter from '../ListFooter';
import './style.css';

const TaskList = (props) => {
  const {
    isCheckedExists,
    countActiveItem,
    tab,
    filteredTodos,
    actions,
  } = props;

  const {
    deleteTodo,
    completeTodo,
    editTodo,
    clearCompleted,
    setVisibilityFilter,
  } = actions;

  const listItem = filteredTodos.map(item => (
    <li key={item.id} className="list-item">
      <ItemTaskList
        todolist={item}
        deleteTodo={deleteTodo}
        completeTodo={completeTodo}
        editTodo={editTodo}
      />
    </li>
  ));

  return (
    <ul className="main__task-list">
      {listItem}
      <ListFooter
        isCheckedExists={isCheckedExists}
        countActiveItem={countActiveItem}
        tab={tab}
        clearCompleted={clearCompleted}
        setVisibilityFilter={setVisibilityFilter}
      />
    </ul>
  );
};

TaskList.propTypes = {
  isCheckedExists: PropTypes.bool.isRequired,
  countActiveItem: PropTypes.number.isRequired,
  tab: PropTypes.string.isRequired,
  filteredTodos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      completed: PropTypes.bool,
    }),
  ).isRequired,
  actions: PropTypes.object.isRequired,
};

export default TaskList;
