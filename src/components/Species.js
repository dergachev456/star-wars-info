import React from 'react'
export default function Species(props) {
    const { data, getLinks } = props;
    return (
        <div className="single-entity">
            <h1 className="single-entity__main-title">{data.name}</h1>
            <h2 className="single-entity__title">classification: {data.classification}</h2>
            <h2 className="single-entity__title">designation: {data.designation}</h2>
            <h2 className="single-entity__title">language: {data.language}</h2>
            {
                data.people.length > 0 && <h2 className="single-entity__title">people</h2>
            }
            <div className="single-entity__container">
                {
                    getLinks(data.people)
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
