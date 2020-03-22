import React from 'react'
import './SingleEntityPage.css'
const SingleEntityPage = ({ fieldsToRender, getLinks, entity }) => {
    return (
        <div className="single-entity">
            {
                Object.keys(fieldsToRender).map(field => {
                    if (field === 'name') {
                        return <h1 key={Math.random()} className="single-entity__main-title">{entity[fieldsToRender[field]]}</h1>
                    } else if (Array.isArray(entity[field])) {
                        return (
                            <div key={Math.random()}>
                                {
                                    entity[fieldsToRender[field]].length > 0 && <h2 key={Math.random()} className="single-entity__title">{`${field}:`}</h2>
                                }
                                <div key={Math.random()} className="single-entity__container">
                                    {
                                        getLinks(entity[fieldsToRender[field]])
                                    }
                                </div>
                            </div>
                        )
                    } else {
                        return <h2 key={Math.random()} className="single-entity__title">{`${field}: ${entity[fieldsToRender[field]]}`}</h2>
                    }
                })
            }
        </div>
    )
}

export default SingleEntityPage;