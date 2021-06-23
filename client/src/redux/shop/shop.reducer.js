

const INITIAL_STATE = {
    collections : null,
    isFetching : false ,
    errorMessage : undefined 
}

const shopReducer  = (state = INITIAL_STATE , action) => {
    switch (action.type) {
        case "SET_SHOP_DATA_START" : 
            return { 
                ...state ,
                isFetching : true
            }
        case "SET_SHOP_DATA_SUCCESS" :
            return {
                ...state ,
                isFetching : false ,
                collections :action.payload
            }
        case "SET_SHOP_DATA_FAILURE" :
            return {
                ...state ,
                isFetching : false ,
                error : action.error
            }
        default:
            return state;
    }
}

export default shopReducer 