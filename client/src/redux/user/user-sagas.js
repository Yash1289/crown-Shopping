import  { takeLatest , put, call , all} from "redux-saga/effects" ;
import { signInSuccess , signInFailure , signOutSuccess , signOutFailure, signUpFailure, signUpSuccess , noUser } from "./userAction";
import { googleProvider, auth , createUserProfile , getCurrentUser } from "../../firebase/firebase.utils";
import { clearCart } from "../cart/cartAction";

export function* getSnapshotFromUserAuth(userAuth , otherData = null ) {
    try { 
        console.log(otherData)
        const userRef = yield call(createUserProfile, userAuth , otherData)
        const snapshot = yield userRef.get()
        if(!!otherData){
            yield put(signUpSuccess({
                id: snapshot.id,
                ...snapshot.data()
            }))
        }else {
            yield put(signInSuccess({
                id: snapshot.id,
                ...snapshot.data()
            }))
        }  
    } catch (error) {
        yield put(signInFailure({
            error
        }))
    }
}

export function* signInWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider)
        yield getSnapshotFromUserAuth(user)
    } catch (error) {
        yield put(signInFailure(error))
    } 
}

export function* signInWithEmail({ payload : { email , password }}) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email , password)
        yield getSnapshotFromUserAuth(user)
    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield call(getCurrentUser)
        if(!userAuth) {
            yield put(noUser())
            return 
        }
        yield getSnapshotFromUserAuth(userAuth)
    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function*  onEmailSignInStart() {
    yield takeLatest("EMAIL_SIGN_IN_START" ,
    signInWithEmail
    )
}
 
export function* onGoogleSignInStart() {
    yield takeLatest("GOOGLE_SIGN_IN_START",
        signInWithGoogle
    )
}

export function* onCheckUserSession() {
    yield takeLatest("CHECK_USER_SESSION" ,
        isUserAuthenticated
    ) 
}

export function* signOutAsync() {
    try {
        yield auth.signOut()
        yield put(signOutSuccess())
        yield put(clearCart())
    } catch (error) {
        yield put(signOutFailure())
    }
}

export function* onSignOutStart() {
    yield takeLatest("SIGN_OUT_START" ,
        signOutAsync
    )
}

export function* signUpAsync({ payload: { email, password, displayName } }) {
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(email, password)
        yield getSnapshotFromUserAuth(user, { displayName } )
    } catch (error) {
        yield put(signUpFailure(error))   
    }
}

export function* onSignUpStart() {
    yield takeLatest("SIGN_UP_START" ,
        signUpAsync
    )
}

export function* userSagas() {
    yield all([ call(onGoogleSignInStart) , call(onEmailSignInStart) , call(onCheckUserSession) , call(onSignOutStart) , call(onSignUpStart)])
}