import React, { Component } from 'react'
import { connect } from 'react-redux';

class CreateTodo extends Component {
  state = {
    item: ''
  };

  handleInputChange = event => {
    this.setState({
      item: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state);
  }

  render() {
    return(
      <div>
        Create Todo Component
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>Add Todo: </label>
            <input type='text' onChange={this.handleInputChange}/>
          </p>
          <input type='submit' />
        </form>
        {this.state.item}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return{
    addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
  }
}

export default connect(null, mapDispatchToProps)(CreateTodo);
