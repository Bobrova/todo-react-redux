import React from 'react';
import PropTypes from 'prop-types';
import Textarea from '../Textarea';
import BtnSelectAll from '../BtnSelectAll';
import TaskList from '../../containers/TaskList';
import './style.css';

const Main = (props) => {
  const {
    todolist,
    isOpen,
    currentId,
    actions,
  } = props;

  const {
    addTodo,
    completeAllTodos,
  } = actions;

  const countActiveItem = (todolist.filter(itemList => !itemList.completed)).length; // eslint-disable-line
  return (
    <div className="main">
      <div className="main__header">
        {isOpen && (
          <BtnSelectAll
            completeAllTodos={completeAllTodos}
            isAllChecked={countActiveItem === 0}
          />
        )}
        <Textarea addTodo={addTodo} itemId={currentId} />
      </div>
      {isOpen && <TaskList />}
    </div>
  );
};

Main.propTypes = {
  todolist: PropTypes.array.isRequired,
  isOpen: PropTypes.bool.isRequired,
  currentId: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired,
};

export default Main;
