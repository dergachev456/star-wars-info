import React, { Component } from 'react'
import EntitiesPage from './EntitiesPage'
import { connect } from 'react-redux';

class EntityPageContainer extends Component {
    render() {
        const { data, getId, sortBy, filterBy } = this.props;
        return (
            <EntitiesPage
                data={data}
                getId={getId}
                sortBy={sortBy}
                filterBy={filterBy}
            />
        )
    }
}

export default connect(state => ({
    data: state.data,
}), {})(EntityPageContainer);
