import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    console.log("before: ", this.props.store.number);

    let {dispatch} = this.props;
    dispatch({type: 'STARTED_CHANGE'});

    this.timer = setInterval(() => console.log("after: ", this.props.store.number), 3000);
  }

  render () {
    return (
      <div className="App">
        redux-saga
      </div>
    );
  }
}

export default connect((store) => {
  return {
    store: store
  }
})(App);
