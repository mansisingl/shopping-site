import {initializeApp} from 'firebase/app'
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'

import { getDoc, 
    setDoc, 
    getFirestore, 
    doc,
    collection,
    writeBatch,
    query,
    getDocs
} from 'firebase/firestore'




const firebaseConfig = {
    apiKey: "AIzaSyCqkjxr-jHdZJsFglpjvbWGgt6iSvUkaGM",
    authDomain: "capstone-last.firebaseapp.com",
    projectId: "capstone-last",
    storageBucket: "capstone-last.appspot.com",
    messagingSenderId: "663583698090",
    appId: "1:663583698090:web:ef923802e1b47770f974d3"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider();

  googleProvider.setCustomParameters({
    prompt: 'select_account'
  });

  export const auth = getAuth();
  export const googleSignInWithPopup = () => signInWithPopup(auth, googleProvider);
  export const googleSignInWithRedirect = () => signInWithRedirect(auth, googleProvider);

  export const db = getFirestore();

  export const createUserDocFromAuth = async (userAuth, additionalInfo={}) => {
    if(!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid)

    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInfo
            })
        } catch(error) {
            console.log('errorrrrr while creating the user', error.message)
        }
    }

    return userDocRef;
}


export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
    return createUserWithEmailAndPassword(auth, email, password)
}


export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
    return signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await signOut(auth);


export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);



export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);

    const batch = writeBatch(db);

    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    })

    await batch.commit();
    // console.log('done')
};

export const getCollectionAndDocuments = async () => {
    const collectionRef = collection(db, 'categoriess')
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        const {title, items} = docSnapshot.data();
        acc[title.toLowerCase()] = items;
        return acc;
    }, {})

    return categoryMap;
}