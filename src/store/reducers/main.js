import { SET_SELECTED_ENTITY, SET_SEARCH_TEXT, SWITCH_SORT_ORDER} from '../constants';

const initialState = {
    selectedEntity: 'films',
    searchText: '',
    sortOrderToHeight: true
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_SELECTED_ENTITY:
            return {
                ...state,
                selectedEntity: action.payload
            }
        case SET_SEARCH_TEXT:
            return {
                ...state,
                searchText: action.payload
            }
        case SWITCH_SORT_ORDER:
            return {
                ...state,
                sortOrderToHeight: !state.sortOrderToHeight
            }
        default:
            return state;
    }
}