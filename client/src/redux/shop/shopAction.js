
const setShopDataStart = () =>({
    type : "SET_SHOP_DATA_START" 
})

export const setShopDataSuccess = (data) => ({
    type : "SET_SHOP_DATA_SUCCESS" ,
    payload: data
})

export const setShopDataFailure = (error) => ({
    type : "SET_SHOP_DATA_FAILURE" ,
    error
})

export default setShopDataStart;