import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from '../actions';
import Main from '../components/Main';

const mapStateToProps = state => ({
  isOpen: state.todos.length !== 0,
  todolist: state.todos,
  currentId: state.todos.length !== 0 ? state.todos[state.todos.length - 1].id : 0,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
