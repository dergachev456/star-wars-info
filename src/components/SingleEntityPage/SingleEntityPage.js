import React, { Component } from 'react'
import './SingleEntityPage.css'
export default class SingleEntityPage extends Component {
    render() {
        const { fieldsToRender, getLinks, entity } = this.props;
        return (
            <div className="single-entity">
                {
                    Object.keys(fieldsToRender).map(field => {
                        if (field === 'name') {
                            return <h1 className="single-entity__main-title">{entity[fieldsToRender[field]]}</h1>
                        } else if (Array.isArray(entity[field])) {
                            return (
                                <>
                                    {
                                        entity[fieldsToRender[field]].length > 0 && <h2 className="single-entity__title">{`${field}:`}</h2>
                                    }
                                    <div className="single-entity__container">
                                        {
                                            getLinks(entity[fieldsToRender[field]])
                                        }
                                    </div>
                                </>
                            )
                        } else {
                            return <h2 className="single-entity__title">{`${field}: ${entity[fieldsToRender[field]]}`}</h2>
                        }
                    })
                }
            </div>
        )
    }
}
