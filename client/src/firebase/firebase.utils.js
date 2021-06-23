import firebase from "firebase/app"
import 'firebase/auth'
import "firebase/firestore"

var firebaseConfig = {
    apiKey: "AIzaSyCm0HPz0iCZuqJA9rDt7Vk2ZZU1Rd4Ek8I",
    authDomain: "crown-clothing-1f081.firebaseapp.com",
    projectId: "crown-clothing-1f081",
    storageBucket: "crown-clothing-1f081.appspot.com",
    messagingSenderId: "999343399482",
    appId: "1:999343399482:web:84cfd8ca34aa2ec408cb03",
    measurementId: "G-RXW965ZLLT"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()
export const firestore = firebase.firestore()

export const createUserProfile = async (userAuth , otherData) => {
    if(!userAuth){
        return 
    } else {
        console.log(otherData)
        const userRef = firestore.doc(`users/${userAuth.uid}`)
        const snapshot = await userRef.get()
        if(!snapshot.exists) {
            const { displayName , email } = userAuth
            const createdAt = new Date() ;

            try {
                await userRef.set(
                    {
                        displayName ,
                        email ,  
                        createdAt ,
                        ...otherData
                    }
                )
            } catch (error) {
                console.log("error creating user" , error.message)
            }
        }
        return userRef
    }
}

export const setCollectionsAndDocuments = async (collectionKey , objectsToAdd ) => {
    const collectionRef = firestore.collection(collectionKey)
    const batch = firestore.batch()

    objectsToAdd.forEach((obj) => {
        const docRef = collectionRef.doc()
        batch.set(docRef , obj)
    });

    return await batch.commit()
}

export const convertCollectionSnapshotToMap = (collections) => {
    const transformedCollections = collections.docs.map((doc) => {
        const { title , items } = doc.data() ;
        return {
            routeName : encodeURI(title.toLowerCase()),
            id : doc.id ,
            title ,
            items 
        }
    });

    return transformedCollections.reduce((accumulator , collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator
    } , {})
}

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged((userAuth) => {
            unsubscribe() 
            resolve(userAuth)
        } , reject)
    })
}

export const googleProvider = new firebase.auth.GoogleAuthProvider() ;
googleProvider.setCustomParameters({ prompt : "select_account"})
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)

export default firebase