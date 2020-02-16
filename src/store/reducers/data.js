import { LOAD_DATA } from '../constants';
import { load } from 'redux-localstorage-simple';

let DATA = load({ namespace: 'redux-intro' });

if (!DATA || !DATA.data ) {
    DATA = {
        data: {},
    }
}

// const initialState = {};

export default function (state = DATA.data, action) {
    switch (action.type) {
        case LOAD_DATA:
            return {
                ...state,
                data: action.payload
                // films: action.payload.films,
                // people: action.payload.people,
                // vehicles: action.payload.vehicles,
                // starships: action.payload.starships,
                // species: action.payload.species,
                // planets: action.payload.planets
            };
        default:
            return state;
    }
}