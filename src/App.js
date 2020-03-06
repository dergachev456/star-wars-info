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

  getId = (url) => {
    const array = url.split('/');
    return array[array.length - 2];
  }

  getEntity = (url) => {
    const array = url.split('/');
    return array[array.length - 3];
  }

  sortBy = (arr, param, orderToHight) => {
    let obj = [...arr];
    if (orderToHight === false) {
      obj.sort((a, b) => a[param] < b[param] ? 1 : -1);
    } else {
      obj.sort((a, b) => a[param] > b[param] ? 1 : -1);
    }
    return obj;
  }

  filterBy = (arr, param, value) => {
    const result = arr.filter(elem => {
      return elem[param].toLowerCase().includes(value.toLowerCase())
    })
    return result;
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
                <Route exact path='/' render={() => <EntitiesPageContainer
                  getId={this.getId}
                  sortBy={this.sortBy}
                  filterBy={this.filterBy}
                />} />
                <Route exact path='/:entity/:id' render={(props) => <SingleEntityPageContainer
                  {...props}
                  getId={this.getId}
                  getEntity={this.getEntity}
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