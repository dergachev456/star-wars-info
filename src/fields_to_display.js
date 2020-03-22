const fieldsToDisplay = {
    films: {
        name: 'title',
        director: 'director',
        producer: 'producer',
        episode: 'episode_id',
        date: 'release_date',
        characters: 'characters',
        planets: 'planets',
        vehicles: 'vehicles',
        starships: 'starships',
        species: 'species'
    },
    people: {
        name: 'name',
        height: 'height',
        mass: 'mass',
        gender: 'gender',
        'hair color': 'hair_color',
        'skin color': 'skin_color',
        'eye color': 'eye color',
        'birth year': 'birth year',
        films: 'films',
        vehicles: 'vehicles',
        starships: 'starships',
        species: 'species',
    },
    planets: {
        name: 'name',
        diameter: 'diameter',
        climate: 'climate',
        population: 'population',
        residents: 'residents',
        films: 'films'
    },
    species: {
        name: 'name',
        classification: 'classification',
        designation: 'designation',
        language: 'language',
        people: 'people',
        films: 'films'
    },
    starships: {
        name: 'name',
        model: 'model',
        manufacturer: 'manufacturer',
        length: 'length',
        passengers: 'passengers',
        'starship class': 'starship_class',
        pilots: 'pilots',
        films: 'films'
    },
    vehicles: {
        name: 'name',
        model: 'model',
        manufacturer: 'manufacturer',
        passengers: 'passengers',
        'max atmosphering speed': 'max_atmosphering_speed',
        consumables: 'consumables',
        pilots: 'pilots',
        films: 'films'
    }
}

export default fieldsToDisplay;