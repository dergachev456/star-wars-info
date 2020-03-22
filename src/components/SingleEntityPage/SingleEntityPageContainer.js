import React, { Component } from 'react'
import { connect } from 'react-redux';
import SingleEntityPage from './SingleEntityPage'
import { getId, getEntity } from '../../functions'
import { Link } from 'react-router-dom'
import fieldsToDisplay from '../../fields_to_display'

class SingleEntityPageContainer extends Component {

    getLinks = (arr) => {
        const { data } = this.props;
        return arr.map(elem => {
            let entity = getEntity(elem);
            let id = getId(elem);
            let obj = data[entity].find(elem => getId(elem.url) === id);
            if (obj.title !== undefined) {
                return (
                    <Link className="single-entity__link" key={obj.url} to={`/${entity}/${id}`}>{obj.title}</Link>
                )
            } else {
                return (
                    <Link className="single-entity__link" key={obj.url} to={`/${entity}/${id}`}>{obj.name}</Link>
                )
            }
        })
    }
    render() {
        const { data } = this.props;
        const { entity, id } = this.props.match.params;
        const currentEntity = data[entity].find(elem => getId(elem.url) === id);
        return (
            <SingleEntityPage
                fieldsToRender={fieldsToDisplay[entity]}
                getLinks={this.getLinks}
                entity={currentEntity}
            />
        )
    }
}
export default connect(state => ({
    data: state.data,
}))(SingleEntityPageContainer);
