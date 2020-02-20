import React, { Component } from 'react'
import './Entity.css'
import { Link } from 'react-router-dom'

export default class Entity extends Component {
    state = {
        selectedEntity: '',
    }
    render() {
        const { selectedEntity, onChangeSearchText, searchText, getId, data, sortData } = this.props;
        const {  sortOrderToHeight } = this.props;

        return (
            <div className="entity">
                <div onClick={sortData} className="entity__title-container">
                    <h1 className="entity__title" >{selectedEntity}</h1>
                    {
                        sortOrderToHeight ? (<span className="entity__arrow">&#8595;</span>) : (<span className="entity__arrow">&#8593;</span>)
                    }
                </div>
                <input placeholder="search.." className="entity__input" value={searchText} onChange={onChangeSearchText} type="search" />
                <div className="entity__cards">
                    {
                        data && data.map(obj => {
                            return (
                                <div key={getId(obj.url)} className="entity__card">
                                    <Link className="entity__link" to={`/${selectedEntity}/${getId(obj.url)}`}>{obj.name || obj.title}</Link>
                                    <h2 className="entity__details">details &#8594;</h2>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
