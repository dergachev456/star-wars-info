import React, { Component } from 'react'
import { connect } from 'react-redux';
import EntitiesList from './EntitiesList';
import { setSelectedEntity } from '../../store/actions/mainActonCreator';

class EntitiesListContainer extends Component {
    render() {
        const { setSelectedEntity } = this.props;
        return (
            <EntitiesList setSelectedEntity={setSelectedEntity} />
        )
    }
}
export default connect(null,{setSelectedEntity})(EntitiesListContainer);
