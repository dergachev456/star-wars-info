import React, { Component } from 'react'
import './EntitiesList.css'
export default class EntitiesList extends Component {
    state = {
        entities: [
            { name: 'films', id: 1 },
            { name: 'species', id: 2 },
            { name: 'planets', id: 3 },
            { name: 'vehicles', id: 4 },
            { name: 'starships', id: 5 },
            { name: 'people', id: 6 },
        ]
    }
    render() {
        const { entities } = this.state;
        const { setSelectedEntity } = this.props;
        return (
            <div className="entities-list">
                {
                    entities && entities.map(entity => {
                        return (
                            <div
                                onClick={() => setSelectedEntity(entity.name)}
                                key={entity.id}
                                className="entities-list__entity"
                            >
                                <button className="entities-list__entity-title">{entity.name}</button>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
