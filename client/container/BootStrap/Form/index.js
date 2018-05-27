import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import Input from './Input';

class FormInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      secondName: '',
      email: '',
      message: '',
    };
  }
  updateInputValues = e => this.setState({ [e.target.id]: e.target.value });
  render() {
    const {
      firstName,
      secondName,
      email,
      message,
    } = this.state;
    return (
      <form>
        <Input label="First Name" placeholder="First Name" name="firstName" type="text" onChange={this.updateInputValues} value={firstName} />
        <Input label="Second Name" placeholder="Second Name" name="secondName" type="text" onChange={this.updateInputValues} value={secondName} />
        <Input label="Message" placeholder="Message" name="message" type="text" onChange={this.updateInputValues} value={message} />
        <Input label="Email Address" placeholder="Email Address" name="email" type="email" onChange={this.updateInputValues} value={email} />
        {/*
Input[className. label. placeholder. name. type. onChange. helper. helperText. error. errorText. ]
        */}
      </form>
    );
  }
}

export default FormInput;
