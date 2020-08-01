import { LOAD_DATA } from '../constants';


export const loadData = () => async dispatch => {
    const entities = ['people', 'films', 'vehicles', 'planets', 'starships', 'species'];
    let people = [];
    let films = [];
    let vehicles = [];
    let planets = [];
    let starships = [];
    let species = [];
    for (let entity of entities) {
        let isNotLastPage = true;
        let pageNum = 1;
        do {
            let response = await fetch(`https://swapi.dev/api/${entity}/?page=${pageNum}`);
            let data = await response.json()
            let results = data.results
            switch (entity) {
                case 'films':
                    films = films.concat(results)
                    break;
                case 'people':
                    people = people.concat(results)
                    break;
                case 'vehicles':
                    vehicles = vehicles.concat(results)
                    break;
                case 'planets':
                    planets = planets.concat(results)
                    break;
                case 'starships':
                    starships = starships.concat(results)
                    break;
                case 'species':
                    species = species.concat(results)
                    break;
                default:
                    break;
            }
            if (data.next === null) {
                isNotLastPage = false;
            }
            pageNum++;

        } while (isNotLastPage)
    }
    dispatch({
        type: LOAD_DATA,
        payload: {
            people,
            films,
            vehicles,
            planets,
            starships,
            species,
        }
    })
};


