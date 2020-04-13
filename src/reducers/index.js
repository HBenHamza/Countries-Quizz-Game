import { CHOOSE_CONTINENT, ITEMS_RECEIVED , ITEMS_REQUESTED } from '../constants/actionTypes'

const initialeState = {}
const reducer = (state = initialeState,action) => {
    switch(action.type){
        case CHOOSE_CONTINENT :
            return{...state,continent: action.continent}
        case ITEMS_REQUESTED:
            return { ...state, itemsRequested: true }
        case ITEMS_RECEIVED:
            return { ...state, itemsRequested: false, items: action.items }
        default: return state;
    }
}

export default reducer;


