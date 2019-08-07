import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from '../actions';
import TaskList from '../components/TaskList';
import * as tabs from '../constants/TodoFilters';

const getItemsTab = (tab, state) => {
  switch (tab) {
    case tabs.SHOW_ALL:
      return state.todos;
    case tabs.SHOW_COMPLETED:
      return state.todos.filter(itemList => !itemList.completed);
    case tabs.SHOW_ACTIVE:
      return state.todos.filter(itemList => itemList.completed);
    default:
      break;
  }
};

const mapStateToProps = state => ({
  todoList: state.todos,
  countActiveItem: (state.todos.filter(itemList => !itemList.completed)).length,
  isCheckedExists: (state.todos.filter(itemList => itemList.completed)).length !== 0,
  tab: state.todoFilters,
  filteredTodos: getItemsTab(state.todoFilters, state),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TaskList);
