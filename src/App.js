import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { bindActionCreators } from 'redux';
import { clickAction } from './actions/index';
import { connect } from 'react-redux';



class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      text: ''
    }
  }

  render() {
    const { text } = this.state;
    const { msg, clickAction } = this.props;
    return (
      <div className="App">
        <button type="button" onClick={() => clickAction()}>Click to Dispatch</button>
        <h1>{ msg }</h1>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  console.log('Store app', store);
  return{
    msg: store.clickReducer.msg
  }
}
const mapDispatchToProps = (dispatch) => bindActionCreators({ clickAction }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App);
