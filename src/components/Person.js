import React from 'react'
export default function Person(props) {
    const { data, getLinks } = props;
    return (
        <div className="single-entity">
            <h1 className="single-entity__main-title">{data.name}</h1>
            <h2 className="single-entity__title">height: {data.height}</h2>
            <h2 className="single-entity__title">mass: {data.mass}</h2>
            <h2 className="single-entity__title">gender: {data.gender}</h2>
            <h2 className="single-entity__title">hair color: {data.hair_color}</h2>
            <h2 className="single-entity__title">skin color: {data.skin_color}</h2>
            <h2 className="single-entity__title">eye color: {data.eye_color}</h2>
            <h2 className="single-entity__title">birth year: {data.birth_year}</h2>
            <h2 className="single-entity__title">species</h2>
            <div className="single-entity__container">
                {
                    getLinks(data.species)
                }
            </div>
            <h2 className="single-entity__title">films</h2>
            <div className="single-entity__container">
                {
                    getLinks(data.films)
                }
            </div>
            {
                data.vehicles.length > 0 && <h2 className="single-entity__title">vehicles:</h2>
            }
            <div className="single-entity__container">
                {
                    getLinks(data.vehicles)
                }
            </div>
            {
                data.starships.length > 0 && <h2 className="single-entity__title">starships:</h2>
            }
            <div className="single-entity__container">
                {
                    getLinks(data.starships)
                }
            </div>
        </div>
    )
}
