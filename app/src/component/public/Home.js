import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Home extends Component {
  constructor (props) {
    super(props);
    this.state = {
      age: props.age
    }
  }

  onMarkOlder () {
    this.age += 3;
    this.setState({
      age: this.state.age + 3
    })
  }

  render() {
    return ( 
      <div>
        <p>
          your name is {this.props.name}
          your age is {this.state.age}
        </p>
        <ul>
          {this.props.user.hobbies.map((hobby, index) => <li key = {index}>{hobby}</li>)}
        </ul>
        {this.props.children}
        <div onClick = {() => {this.onMarkOlder()}}>make me older</div>
      </div>
    )
  }
}

Home.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  user: PropTypes.object.isRequired,
   children: PropTypes.element.isRequired
}

export default Home;