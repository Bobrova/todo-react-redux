import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from '../actions';
import TaskList from '../components/TaskList';
import { getVisibleTodos, getcountActiveItem, isCheckedExists } from '../selectors';

const mapStateToProps = state => ({
  todoList: state.todos,
  countActiveItem: getcountActiveItem(state),
  isCheckedExists: isCheckedExists(state),
  tab: state.todoFilters,
  filteredTodos: getVisibleTodos(state),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TaskList);
