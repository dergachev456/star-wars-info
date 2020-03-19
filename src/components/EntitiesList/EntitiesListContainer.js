import React, { Component } from 'react'
import { connect } from 'react-redux';
import EntitiesList from './EntitiesList';
import { setSelectedEntity } from '../../store/actions/mainActonCreator';

class EntitiesListContainer extends Component {
    render() {
        const { setSelectedEntity, data } = this.props;
        return (
            <EntitiesList
                setSelectedEntity={setSelectedEntity}
                entities={Object.keys(data)}
            />
        )
    }
}
export default connect(state => ({
    data: state.data,
}), { setSelectedEntity })(EntitiesListContainer);
