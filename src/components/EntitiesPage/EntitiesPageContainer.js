import React, { Component } from 'react'
import EntitiesPage from './EntitiesPage'
import { connect } from 'react-redux';
import {sortBy, filterBy} from '../../functions.js'

class EntitiesPageContainer extends Component {
    render() {
        const {selectedEntity, searchText, sortOrderToHeight} = this.props.main;

        const data = this.props.data[selectedEntity];
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
            <EntitiesPage
                data={filteredData}
            />
        )
    }
}
export default connect(state => ({
    data: state.data,
    main: state.main
}))(EntitiesPageContainer);
