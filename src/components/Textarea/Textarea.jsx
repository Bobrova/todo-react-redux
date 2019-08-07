import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class Textarea extends Component {
  handleKeyPress = (e) => {
    const { getText } = this.props;
    const ENTER_KEY_CODE = 13;
    const text = e.target.value;
    if (e.keyCode === ENTER_KEY_CODE) {
      e.preventDefault();
      if (text !== '' && /\S/.test(text)) {
        e.target.value = '';
        getText(text);
      }
    }
  }

  render() {
    return (
      <textarea
        wrap="off"
        className="main__input-area"
        placeholder="What needs to be done?"
        onKeyDown={this.handleKeyPress}
      />
    );
  }
}

Textarea.propTypes = {
  getText: PropTypes.func.isRequired,
};

export default Textarea;
