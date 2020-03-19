import { LOAD_DATA,  } from '../constants';
import { load } from 'redux-localstorage-simple';

let DATA = load({ namespace: 'swapi' });

if (!DATA || !DATA.data ) {
    DATA = {
        data: {},
    }
}

export default function (state = DATA.data, action) {
    switch (action.type) {
        case LOAD_DATA:
            return {
                ...state,
                films: action.payload.films,
                people: action.payload.people,
                vehicles: action.payload.vehicles,
                starships: action.payload.starships,
                species: action.payload.species,
                planets: action.payload.planets,
            };
        default:
            return state;
    }
}