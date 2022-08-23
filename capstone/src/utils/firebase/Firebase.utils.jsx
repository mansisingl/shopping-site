import {initializeApp} from 'firebase/app'
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider 
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

  export const db = getFirestore();

  export const createUserDocFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)

    console.log('userDocRef', userDocRef)

    const userSnapshot = await getDoc(userDocRef);
    console.log('usersnapshot', userSnapshot);
    console.log('usersnapshot', userSnapshot.exists());
}
