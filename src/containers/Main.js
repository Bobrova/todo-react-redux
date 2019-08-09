import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from '../actions';
import Main from '../components/Main';
import { getCurrentId } from '../selectors';

const mapStateToProps = state => ({
  isOpen: state.todos.length !== 0,
  todolist: state.todos,
  currentId: getCurrentId(state),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
