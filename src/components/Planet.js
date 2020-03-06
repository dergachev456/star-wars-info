import React from 'react'
export default function Planet(props) {
    const { data, getLinks } = props;
    return (
        <div className="single-entity">
            <h1 className="single-entity__main-title">{data.name}</h1>
            <h2 className="single-entity__title">diameter: {data.diameter}</h2>
            <h2 className="single-entity__title">climate: {data.climate}</h2>
            <h2 className="single-entity__title">population: {data.population}</h2>
            {
                data.residents.length > 0 && <h2 className="single-entity__title">residents</h2>
            }
            <div className="single-entity__container">
                {
                    getLinks(data.residents)
                }
            </div>
            {
                data.films.length > 0 && <h2 className="single-entity__title">films</h2>
            }
            <div className="single-entity__container">
                {
                    getLinks(data.films)
                }
            </div>
        </div>
    )
}
