import React from 'react'
import './EntitiesList.css'
export default function EntitiesList(props) {
    const { setSelectedEntity, entities } = props;
    return (
        <div className="entities-list">
            {
                entities.map((entity, index) => {
                    return (
                        <div
                            onClick={() => setSelectedEntity(entity)}
                            key={entity + index}
                            className="entities-list__entity"
                        >
                            <button className="entities-list__entity-title">{entity}</button>
                        </div>
                    )
                })
            }
        </div>
    )
}
