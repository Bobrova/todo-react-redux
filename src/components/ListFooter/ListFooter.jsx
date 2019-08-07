import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class ListFooter extends Component {
  state = {
    tab: 'All',
  }

  handleClickTab = (e) => {
    const { getTab } = this.props;
    const tab = e.target.innerHTML;
    getTab(tab);
    this.setState({
      tab,
    });
  }

  render() {
    const { tab } = this.state;
    const { deleteCompletedAll, countActiveItem, isCheckedExists } = this.props;
    const borderAll = (tab === 'All') ? 'activeBord' : '';
    const borderActive = (tab === 'Active') ? 'activeBord' : '';
    const borderCompleted = (tab === 'Completed') ? 'activeBord' : '';
    return (
      <li className="list-footer js-list-footer">
        <span className="footer-item item-select active-task">{countActiveItem === 1 ? `${countActiveItem} item left` : `${countActiveItem} items left`}</span>
        <div className="bookmarks-wrapper">
          <span className={`footer-item bookmarks ${borderAll}`} onClick={this.handleClickTab}>All</span>
          <span className={`footer-item bookmarks ${borderActive}`} onClick={this.handleClickTab}>Active</span>
          <span className={`footer-item bookmarks ${borderCompleted}`} onClick={this.handleClickTab}>Completed</span>
        </div>
        {isCheckedExists && <span className="footer-item delete-completed" onClick={deleteCompletedAll}>Clear completed</span>}
      </li>
    );
  }
}

ListFooter.propTypes = {
  deleteCompletedAll: PropTypes.func.isRequired,
  countActiveItem: PropTypes.number.isRequired,
  isCheckedExists: PropTypes.bool.isRequired,
  getTab: PropTypes.func.isRequired,
};

export default ListFooter;
