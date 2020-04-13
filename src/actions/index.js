import * as types from '../constants/actionTypes'

export const choose = text => {
    return {
        type: types.CHOOSE_CONTINENT,
        continent: text
    }
}

export const ExtractItemsAction = (region) => (dispatch) => {
    dispatch ({type: types.ITEMS_REQUESTED});
    const url = region !== "all" 
    ? `https://restcountries.eu/rest/v2/region/${region}?fields=flag;name`
    : `https://restcountries.eu/rest/v2/all?fields=flag;name`
    fetch(url, {
        method: "get"
    })
    .then(res => res.json())
    .then(data => {
        dispatch({type: types.ITEMS_RECEIVED, items: data});
    });
}


