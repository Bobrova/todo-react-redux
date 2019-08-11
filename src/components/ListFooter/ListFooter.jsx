import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class ListFooter extends Component {
  handleClickTab = (e) => {
    const { setVisibilityFilter } = this.props;
    const tab = e.target.innerHTML;
    setVisibilityFilter(tab);
  }

  render() {
    const {
      tab,
      clearCompleted,
      countActiveItem,
      isCheckedExists,
    } = this.props;

    const borderAll = (tab === 'All') ? 'activeBord' : '';
    const borderActive = (tab === 'Active') ? 'activeBord' : '';
    const borderCompleted = (tab === 'Completed') ? 'activeBord' : '';
    return (
      <li className="list-footer">
        <span className="footer-item item-select active-task">{countActiveItem === 1 ? `${countActiveItem} item left` : `${countActiveItem} items left`}</span>
        <div className="bookmarks-wrapper">
          <span className={`footer-item bookmarks ${borderAll}`} onClick={this.handleClickTab}>All</span>
          <span className={`footer-item bookmarks ${borderActive}`} onClick={this.handleClickTab}>Active</span>
          <span className={`footer-item bookmarks ${borderCompleted}`} onClick={this.handleClickTab}>Completed</span>
        </div>
        {isCheckedExists && <span className="footer-item delete-completed" onClick={clearCompleted}>Clear completed</span>}
      </li>
    );
  }
}

ListFooter.propTypes = {
  tab: PropTypes.string.isRequired,
  clearCompleted: PropTypes.func.isRequired,
  countActiveItem: PropTypes.number.isRequired,
  isCheckedExists: PropTypes.bool.isRequired,
  setVisibilityFilter: PropTypes.func.isRequired,
};

export default ListFooter;
