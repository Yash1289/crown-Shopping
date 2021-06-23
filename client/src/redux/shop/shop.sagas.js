import { takeLatest , put , call , all} from "@redux-saga/core/effects";
import { firestore , convertCollectionSnapshotToMap } from "../../firebase/firebase.utils"
import { setShopDataSuccess , setShopDataFailure } from "./shopAction"

export function* setShopDataAsync() {
    try {
        const collectionRef = firestore.collection("collections")
        const snapshot = yield collectionRef.get()
        const collectionsMap = yield call(convertCollectionSnapshotToMap , snapshot)
        yield put(setShopDataSuccess(collectionsMap))
    } catch (error) {
        yield put(setShopDataFailure(error))
    }
} 

 function* setShopDataStart() {
    yield takeLatest("SET_SHOP_DATA_START" ,  
    setShopDataAsync
    )
}

export default function* shopSagas() {
    yield all([call(setShopDataStart)]);
}