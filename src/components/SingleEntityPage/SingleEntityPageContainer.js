import React, { Component } from 'react'
import { connect } from 'react-redux';
import SingleEntityPage from './SingleEntityPage'
class SingleEntityPageContainer extends Component {
    render() {
        const { data, getId, getEntity } = this.props;
        const {entity, id} = this.props.match.params;
        return (
            <SingleEntityPage
                data={data}
                entity={entity}
                id={id}
                getId={getId}
                getEntity={getEntity}
            />
        )
    }
}

export default connect(state => ({
    data: state.data,
}))(SingleEntityPageContainer);
