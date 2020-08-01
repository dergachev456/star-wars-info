import React, { Component } from 'react'
import { connect } from 'react-redux';
import SingleEntityPage from './SingleEntityPage'
import { getId, getEntity } from '../../functions'
import { Link } from 'react-router-dom'
import fieldsToDisplay from '../../fields_to_display'
import ErrorPage from '../ErrorPage/ErrorPage';

class SingleEntityPageContainer extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    componentDidUpdate() {
        window.scrollTo(0, 0);
    }
    getLinks = (arr) => {
        const { data } = this.props;
        return arr.map(elem => {
            let entity = getEntity(elem);
            let id = getId(elem);
            let obj = data[entity].find(elem => getId(elem.url) === id);
            if (obj.title !== undefined) {
                return (
                    <Link className="single-entity__link" key={obj.url + Math.random()} to={`/${entity}/${id}`}>{obj.title}</Link>
                )
            } else {
                return (
                    <Link className="single-entity__link" key={obj.url + Math.random()} to={`/${entity}/${id}`}>{obj.name}</Link>
                )
            }
        })
    }
    render() {
        const { data } = this.props;
        const { entity, id } = this.props.match.params;
        let currentEntity = null;
        if (data[entity] !== undefined) {
            currentEntity = data[entity].find(elem => getId(elem.url) === id);
        }
        return (
            <>
                {
                    currentEntity && <SingleEntityPage
                        fieldsToRender={fieldsToDisplay[entity]}
                        getLinks={this.getLinks}
                        entity={data[entity].find(elem => getId(elem.url) === id)}
                    />
                }
                {
                    ((currentEntity === undefined) || (currentEntity === null)) && <ErrorPage />
                }
            </>
        )
    }
}
export default connect(state => ({
    data: state.data,
}))(SingleEntityPageContainer);
