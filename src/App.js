import React, { Component } from 'react'
import { connect } from 'react-redux';
import { loadData } from './store/actions/dataActionCreator';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header'
import EntitiesPageContainer from './components/EntitiesPage/EntitiesPageContainer';
import LoadingHOC from './components/HOCs/LoadingHOC'
import ErrorPage from './components/ErrorPage/ErrorPage'
import './App.css'
import SingleEntityPageContainer from './components/SingleEntityPage/SingleEntityPageContainer';
class AppComponentUI extends Component {
  render() {
    return (
      <HashRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={EntitiesPageContainer} />
          <Route exact path='/:entity/:id' component={SingleEntityPageContainer} />
          <Route component={ErrorPage} />
        </Switch>
      </HashRouter>
    )
  }
}

const AppComponent = LoadingHOC('data')(AppComponentUI);

class App extends Component {
  componentDidMount() {
    if (JSON.parse(localStorage.getItem('swapi')) === null) {
      this.props.loadData();
    }
  }


  render() {
    return (
      <AppComponent data={this.props.data} />
    )
  }
}

export default connect(state => ({
  data: state.data,
}), {
  loadData
})(App);

