import React, { Component } from 'react';
import './App.css';
import { bindActionCreators } from 'redux';
import { clickAction } from './actions/index';
import { connect } from 'react-redux';
import Counter from './components/Counter';



export default class App extends Component {
  constructor(props){
    super(props)
  }

 

  render() {
    return(   
      <div className="App">
        <Counter />
      </div>
    );
  }
}
