import React, { Component } from 'react'
import { connect } from 'react-redux';
import { loadData } from './store/actions/dataActionCreator';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header'
import Loader from './components/Loader/Loader'
import EntityPageContainer from './components/EntityPage/EntityPageContainer';

import './App.css'

class App extends Component {


  componentDidMount() {
    if (JSON.parse(localStorage.getItem('swapi')) === null) {
      this.props.loadData();
    }
  }
  getId = (str) => {
    const array = str.split('/');
    return array[array.length - 2];
  }
  render() {
    const { isLoaded } = this.props.data;

    return (
      <div>
        <HashRouter>
          <Header />
          {
            !isLoaded && <Loader />
          }
          {
            isLoaded && (
              <Switch>
                <Route exact path='/' render={() => <EntityPageContainer
                  getId={this.getId}
                />} />
              </Switch>
            )
          }
        </HashRouter>
      </div>
    )
  }
}

export default connect(state => ({
  data: state.data,
}), {
  loadData
})(App);