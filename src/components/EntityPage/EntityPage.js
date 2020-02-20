import React, { Component } from 'react'
import EntitiesList from '../EntitiesList/EntitiesList'
import Entity from '../Entity/Entity';

export default class EntityPage extends Component {
    state = {
        selectedEntity: 'films',
        sortOrderToHeight: true,
        searchText: '',
    }
    onChangeSelectedEntity = value => {
        this.setState({ selectedEntity: value });
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
    sortData = () => {
        this.setState(prevState => ({ sortOrderToHeight: !prevState.sortOrderToHeight }))
    }
    switchSelectedEntity = (value, src) => {
        const { films, vehicles, planets, people, starships, species } = src;
        switch (value) {
            case 'films':
                return films
            case 'vehicles':
                return vehicles
            case 'planets':
                return planets
            case 'people':
                return people
            case 'starships':
                return starships
            case 'species':
                return species
            default:
                return films
        }
    }
    onChangeSearchText = (e) => {
        this.setState({ searchText: e.target.value });
    }
    render() {
        const { selectedEntity, sortOrderToHeight, searchText } = this.state;
        const { getId } = this.props;
        let data = this.switchSelectedEntity(selectedEntity, this.props.data)
        let sortedData;

        if (selectedEntity === 'films') {
            sortedData  = this.sortBy(data, 'title', sortOrderToHeight)
        } else {
            sortedData  = this.sortBy(data, 'name', sortOrderToHeight)
        }
        return (
            <div>
                <EntitiesList
                    onChangeSelectedEntity={this.onChangeSelectedEntity}
                />
                <Entity
                    data={sortedData}
                    getId={getId}
                    selectedEntity={selectedEntity}
                    sortData={this.sortData}
                    sortOrderToHeight={sortOrderToHeight}
                    onChangeSearchText={this.onChangeSearchText}
                    searchText={searchText}
                />
            </div>
        )
    }
}
