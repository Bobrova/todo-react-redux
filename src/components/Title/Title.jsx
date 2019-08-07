import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class Title extends Component {
  handleClick = () => {
    const { editItem, todolist } = this.props;
    editItem(todolist);
  }

  render() {
    const { todolist } = this.props;
    return (
      <span className="task-list_text" onDoubleClick={this.handleClick}>{todolist.title}</span>
    );
  }
}

Title.propTypes = {
  todolist: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    completed: PropTypes.bool,
  }).isRequired,
  editItem: PropTypes.func.isRequired,
};

export default Title;
