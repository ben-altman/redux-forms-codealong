import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreateTodo extends Component {
  constructor(props) {
    super(props)
    this.state = {
       text: '',
    };
  }
  
  handleChange = (event) => {
    this.setState({
      text: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state)
  }

  // ALTERNATE: 
  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   this.props.dispatch({ type: "ADD_TODO", payload: this.state });
  // };

  render() {
    return(
      <div>
        Create Todo Component
        <form onSubmit={this.handleSubmit}>
          <p>
            <input 
              type='text' 
              placeholder='add todo' 
              onChange={this.handleChange} 
              value={this.state.text} 
            />
          </p>
          <input type='submit' />
        </form>
        {this.state.text}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (formData) => dispatch({ type: "ADD_TODO", payload: formData }),
  };
};

export default connect(null, mapDispatchToProps)(CreateTodo);

// ALTERNATE:
// export default connect()(CreateTodo);

