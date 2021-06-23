const INITIAL_STATE = {
    currentUser: null ,
    error : undefined ,
    isFetched : false
}

const userReducer = (state = INITIAL_STATE , action ) => {
    switch (action.type) {
        case "SIGN_IN_SUCCESS" :
        case "SIGN_UP_SUCCESS" :
            return {
                ...state ,
                currentUser : action.payload ,
                error : undefined,
                isFetched : true
            }
        case "SIGN_OUT_SUCCESS" : 
        case "NO_USER" :
            return {
                ...state ,
                currentUser : null ,
                error : null ,
                isFetched : true 
            }
        case "SIGN_IN_FAILURE" :
        case "SIGN_OUT_FAILURE" :
        case "SIGN_UP_FAILURE" :
            return {
                ...state ,
                error : action.payload ,
                isFetched : true
            }
        default:
            return state
    }
}

export default userReducer