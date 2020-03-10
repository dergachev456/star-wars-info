import React, { Component } from 'react'
import { connect } from 'react-redux';
import { loadData } from './store/actions/dataActionCreator';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header'
import Loader from './components/Loader/Loader'
import EntitiesPageContainer from './components/EntitiesPage/EntitiesPageContainer';

import './App.css'
import SingleEntityPageContainer from './components/SingleEntityPage/SingleEntityPageContainer';

class App extends Component {
  componentDidMount() {
    if (JSON.parse(localStorage.getItem('swapi')) === null) {
      this.props.loadData();
    }
  }

  render() {
    const { isLoaded } = this.props.data;
    return (
      <HashRouter>
        <Header />
        {
          !isLoaded && <Loader />
        }
        {
          isLoaded && (
            <Switch>
              <Route exact path='/' component={EntitiesPageContainer}/>
              <Route exact path='/:entity/:id' component={SingleEntityPageContainer} />
            </Switch>
          )
        }
      </HashRouter>
    )
  }
}

export default connect(state => ({
  data: state.data,
}), {
  loadData
})(App);

