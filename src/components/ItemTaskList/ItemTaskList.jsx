import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from '../Title';
import BtnDelete from '../BtnDelete';
import './style.css';

class ItemTaskList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      idEdit: 0,
      valueBeforeEdit: '',
    };
  }

  handleEditItem = (todolist) => {
    this.setState({
      idEdit: todolist.id,
      valueBeforeEdit: todolist.title,
    });
  }

  handleClickCheckbox = () => {
    const { checkedItem, todolist } = this.props;
    checkedItem(todolist.id);
  }

  handleKeyPress = (e) => {
    const { todolist, editItem } = this.props;
    const ENTER_KEY_CODE = 13;
    if (e.keyCode === ENTER_KEY_CODE) {
      e.preventDefault();
      const text = e.target.value.trim();
      if (text === '') return editItem(todolist, true);
      if (text !== '' && /\S/.test(text)) {
        e.target.value = '';
        const task = { id: todolist.id, title: text, completed: todolist.completed };
        editItem(task);
        this.setState({
          idEdit: 0,
        });
      }
    }
  }

  handleInputBlur = (e) => {
    const { todolist, editItem } = this.props;
    const text = e.target.value.trim();
    if (text === '') return editItem(todolist, true);
    e.target.value = '';
    const task = { id: todolist.id, title: text, completed: todolist.completed };
    editItem(task);
    this.setState({
      idEdit: 0,
    });
  }

  handleInputChange = (e) => {
    this.setState({ valueBeforeEdit: e.target.value });
  }

  render() {
    const { idEdit, valueBeforeEdit } = this.state;
    const { todolist, deleteItem } = this.props;
    const { completed } = todolist;
    const isEdit = (todolist.id === idEdit);

    return (
      <React.Fragment>
        {isEdit ? (
          <input
            type="text"
            autoFocus
            className="text-editing"
            value={valueBeforeEdit}
            onChange={this.handleInputChange}
            onKeyDown={this.handleKeyPress}
            onBlur={this.handleInputBlur}
          />
        ) : (
          <div className="listItemWrapper">
            <input
              type="checkbox"
              id={todolist.id}
              checked={completed}
              className="list-checkbox"
              onChange={this.handleClickCheckbox}
            />
            <label htmlFor={todolist.id}/>
            <Title todolist={todolist} editItem={this.handleEditItem} />
            <BtnDelete onClickDelete={deleteItem} id={todolist.id} />
          </div>
        )}
      </React.Fragment>
    );
  }
}

ItemTaskList.propTypes = {
  todolist: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    completed: PropTypes.bool,
  }).isRequired,
  deleteItem: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
  checkedItem: PropTypes.func.isRequired,
};

export default ItemTaskList;
