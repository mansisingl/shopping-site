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
    doc 
} from 'firebase/firestore'




const firebaseConfig = {
    apiKey: "AIzaSyBSs0jQqoQdXURc2JOTp73W1B_3Q4ctbzg",
    authDomain: "capstone-full-da99b.firebaseapp.com",
    projectId: "capstone-full-da99b",
    storageBucket: "capstone-full-da99b.appspot.com",
    messagingSenderId: "1236063184",
    appId: "1:1236063184:web:135d35fe956c58264a5fd5"
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

    console.log('userDocRef', userDocRef)

    const userSnapshot = await getDoc(userDocRef);
    console.log('usersnapshot', userSnapshot);
    console.log('usersnapshot', userSnapshot.exists());


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