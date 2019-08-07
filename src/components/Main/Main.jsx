import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Textarea from '../Textarea';
import BtnSelectAll from '../BtnSelectAll';
import TaskList from '../../containers/TaskList';
import './style.css';

class Main extends Component {

  render () {
    const { 
      todolist,
      isOpen,
      currentId,
    } = this.props;

    const { 
      addTodo,
      completeAllTodos,
    } = this.props.actions;

    const countActiveItem = (todolist.filter(itemList => !itemList.completed)).length;
    return (
        <div className="main">
          <div className="main__header">
            {isOpen && <BtnSelectAll completeAllTodos={completeAllTodos} isAllChecked={countActiveItem === 0}/>}
            <Textarea 
              addTodo={addTodo}
              itemId={currentId}
            />
          </div>
          {isOpen && <TaskList/>}
        </div>
    );
  }
}

Main.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  currentId: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired,
};

export default Main;
