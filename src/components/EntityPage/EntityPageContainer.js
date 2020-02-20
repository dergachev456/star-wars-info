import React, { Component } from 'react'
import EntityPage from './EntityPage'
import { connect } from 'react-redux';

class EntityPageContainer extends Component {
    render() {
        const { data, getId } = this.props;
        return (
            <EntityPage
                data={data}
                getId={getId}
            />
        )
    }
}

export default connect(state => ({
    data: state.data,
}), {})(EntityPageContainer);
