import React from 'react'
export default function Vehicle(props) {
    const { data, getLinks } = props;
    return (
        <div className="single-entity">
            <h1 className="single-entity__main-title">{data.name}</h1>
            <h2 className="single-entity__title">model: {data.model}</h2>
            <h2 className="single-entity__title">manufacturer: {data.manufacturer}</h2>
            <h2 className="single-entity__title">passengers: {data.passengers}</h2>
            <h2 className="single-entity__title">max atmosphering speed: {data.max_atmosphering_speed}</h2>
            <h2 className="single-entity__title">consumables: {data.consumables}</h2>
            {
                data.pilots.length > 0 && <h2 className="single-entity__title">pilots</h2>
            }
            <div className="single-entity__container">
                {
                    getLinks(data.pilots)
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
