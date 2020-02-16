import React, { Component } from 'react'
import { connect } from 'react-redux';
import { loadData } from './store/actions/dataActionCreator';

class App extends Component {

  componentDidMount() {
    this.props.loadData();
    
  }
  render() {
    return (
      <div>
        <h1>afafe</h1>
      </div>
    )
  }
}

export default connect(state => ({
  data: state.data,
}), {
  loadData
})(App);