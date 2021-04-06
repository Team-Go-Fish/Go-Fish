import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

class FriendEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: {}
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(key, event) {
    if (this.state.checked === true) {
      this.setState({checked: false});
    } else {
      this.setState({checked: true})
    }
  }

  render() {
    return (
      <Form>
        <div key={'default-checkbox'} className="mb-3">
          <Form.Check
            type='checkbox'
            key={this.props.user.firstName}
            onChange = {this.handleChange.bind(this)}
            label={<span>{this.props.user.firstName} {this.props.user.lastName}</span>}
          />
        </div>
      </Form>
    )
  }
};

export default FriendEntry;