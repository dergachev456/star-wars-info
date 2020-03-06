import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './SingleEntityPage.css'
import Film from '../Film';
import Person from '../Person';
import Planet from '../Planet';
import Species from '../Species';
import Vehicle from '../Vehicle';
import Starship from '../Starship';
export default class SingleEntityPage extends Component {
    getLinks = (arr) => {
        const { getId, getEntity, data } = this.props;
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
        const { entity, id, data, getId } = this.props;
        const currentEntity = data[entity].find(elem => getId(elem.url) === id);
        return (
            <>
                {
                    (entity === 'films') && currentEntity && <Film getLinks={this.getLinks} data={currentEntity} />

                }
                {
                    (entity === 'people') && currentEntity && <Person getLinks={this.getLinks} data={currentEntity} />
                }
                {
                    (entity === 'planets') && currentEntity && <Planet getLinks={this.getLinks} data={currentEntity} />
                }
                {
                    (entity === 'species') && currentEntity && <Species getLinks={this.getLinks} data={currentEntity} />
                }
                {
                    (entity === 'vehicles') && currentEntity && <Vehicle getLinks={this.getLinks} data={currentEntity} />
                }
                {
                    (entity === 'starships') && currentEntity && <Starship getLinks={this.getLinks} data={currentEntity} />
                }
            </>
        )
    }
}
