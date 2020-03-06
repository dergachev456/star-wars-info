import React from 'react'

export default function Film(props) {
    const { data, getLinks } = props;
    return (
        <div className="single-entity">
            <h1 className="single-entity__main-title">{data.title}</h1>
            <h2 className="single-entity__title">director: {data.director}</h2>
            <h2 className="single-entity__title">producer: {data.producer}</h2>
            <h2 className="single-entity__title">date: {data.release_date}</h2>
            <h2 className="single-entity__title">episode: {data.episode_id}</h2>
            <h2 className="single-entity__title">characters:</h2>
            <div className="single-entity__container">
                {
                    getLinks(data.characters)
                }
            </div>
            <h2 className="single-entity__title">planets:</h2>
            <div className="single-entity__container">
                {
                    getLinks(data.planets)
                }
            </div>
            <h2 className="single-entity__title">vehicles:</h2>
            <div className="single-entity__container">
                {
                    getLinks(data.vehicles)
                }
            </div>
            <h2 className="single-entity__title">starships:</h2>
            <div className="single-entity__container">
                {
                    getLinks(data.starships)
                }
            </div>
            <h2 className="single-entity__title">species:</h2>
            <div className="single-entity__container">
                {
                    getLinks(data.species)
                }
            </div>
        </div>
    )
}
