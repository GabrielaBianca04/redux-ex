import { ADD_TO } from "./ActionTypes"

const initialstate={
    noOfFav:100
}

const companiesReducer=(state=initialstate,action) => {
    switch(action.type){
        case ADD_TO:return{
            ...state,
            noOfFav: state.noOfFav - 1
        }
        default: return state
    }
}

export default companiesReducer;