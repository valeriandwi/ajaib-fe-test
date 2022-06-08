const initialState = {
    loading : false,
    data : [],
    error : null
}

export default function usersReducer(state = initialState, action){
    switch(action.type){
        case "GET_ALL_USER_DATA_STARTED" :
            return {
                ...state,
                loading : true,
                data : [],
                error : null
            }
        case "GET_ALL_USER_DATA_SUCCESS" :
            return {
                ...state,
                loading : false,
                data : action.payload,
                error : null
            }
        case "GET_ALL_USER_DATA_FAILURE" :
            return {
                ...state,
                loading : false,
                error : action.payload.error
            }
        default : return state
    }
}