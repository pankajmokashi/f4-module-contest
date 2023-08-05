import {SELECTED_POST} from '../actions/actionTypes';

let initialState = {
    userId: 1, 
    id: 1, 
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', 
    body: 'quia et suscipit\nsuscipit recusandae consequuntur …strum rerum est autem sunt rem eveniet architecto'
}

const selectedReducer = (state = initialState, action) => {
       switch(action.type){
              case SELECTED_POST:
                        return  action.payload
              default:
                    return state
       }
}

export default selectedReducer;