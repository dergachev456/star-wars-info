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
    changeOrder = () => {
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
        const { getId, sortBy, filterBy } = this.props;
        const data = this.switchSelectedEntity(selectedEntity, this.props.data)
        let sortedData;
        let filteredData;

        if (selectedEntity === 'films') {
            sortedData = sortBy(data, 'title', sortOrderToHeight)
            filteredData = filterBy(sortedData, 'title', searchText)
        } else {
            sortedData = sortBy(data, 'name', sortOrderToHeight)
            filteredData = filterBy(sortedData, 'name', searchText)
        } 
        return (
            <div>
                <EntitiesList
                    onChangeSelectedEntity={this.onChangeSelectedEntity}
                />
                <Entity
                    data={filteredData}
                    getId={getId}
                    selectedEntity={selectedEntity}
                    changeOrder={this.changeOrder}
                    sortOrderToHeight={sortOrderToHeight}
                    onChangeSearchText={this.onChangeSearchText}
                    searchText={searchText}
                />
            </div>
        )
    }
}
