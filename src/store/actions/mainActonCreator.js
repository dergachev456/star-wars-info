import { SET_SELECTED_ENTITY, SET_SEARCH_TEXT, SWITCH_SORT_ORDER} from '../constants';

export const setSelectedEntity = (entity) => ({
    type: SET_SELECTED_ENTITY,
    payload: entity
});

export const setSearchText = ( value ) => ({
    type: SET_SEARCH_TEXT,
    payload: value
})

export const switchSortOrder = () => ({
    type: SWITCH_SORT_ORDER,
})