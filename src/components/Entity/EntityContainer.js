import React, { Component } from 'react'
import { connect } from 'react-redux';
import Entity from './Entity';
import { setSearchText, switchSortOrder } from '../../store/actions/mainActonCreator';
import { getId } from '../../functions.js'
class EntityContainer extends Component {
    render() {
        const { setSearchText, data, switchSortOrder } = this.props;
        const { searchText, selectedEntity, sortOrderToHeight } = this.props.main;

        return (
            <Entity
                data={data}
                getId={getId}
                selectedEntity={selectedEntity}
                switchSortOrder={switchSortOrder}
                sortOrderToHeight={sortOrderToHeight}
                setSearchText={setSearchText}
                searchText={searchText}
            />
        )
    }
}


export default connect(state => ({
    main: state.main,
}), { setSearchText, switchSortOrder })(EntityContainer);
