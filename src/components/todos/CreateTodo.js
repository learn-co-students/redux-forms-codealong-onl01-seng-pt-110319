import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreateTodo extends Component {
  constructor() {
    super()
    this.state = {
      text: '',
    }
    // state = {
    //   text: '',
    // }
  }  
  // } <- this above is for constructor take out when doing jus state = {}

  //this is class syntax/class method and the "this" doesnt have state in the class so do the following below
  // handleChange(event) {
  //     this.setState ({
  //       text: event.target.value
  //     })
  // }


  //this is an ex of class property assigning arrow function now it'll know what the "this" should reprsent. remember arrow function binds "this" to the particular instance of the comoonent it is defined in
  //this handleChange is now a function that takes in an event as an argument
  handleChange = event => {
    this.setState({
        text: event.target.value
    });
};

handleSubmit = event => {
  event.preventDefault();
  this.props.addTodo(this.state)
}


  render() {
    return(
      <div>
        {/* Create Todo Component */}
        <form onSubmit={ event => this.handleSubmit(event)}>
          <p>
            <label>add todo</label>
            {/* <input type="text" onChange={(event) => this.handleChange(event)}/> */}
            <input type="text" onChange={this.handleChange} value={this.state.text}/>
          </p>
            <input type="submit" />
        </form>
        {this.state.text}
        {/* {this.state.text} above isn't necessary for functionality, but we do this just to visually 
        confirm that we are properly changing the state. If we see our DOM change
         with every character we type in, we're in good shape. */}
      </div>
    )
  }

}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
  }
}

export default connect(
  null,
  mapDispatchToProps
  )(CreateTodo);
  // export default connect()(CreateTodo);  <-- alternate since null is the mapStateToProps wish we arent using. connect automatically returns dispatch as a prop to the component when wrapping with connect
  //actions are payloads of info. payload is just a naming convention for the property that holds the actual data in a redux action object.
  // ex :
  // const someAction = {
  //   type: "Test",
  //   payload: {user: "Test User", age: 25},
  // }