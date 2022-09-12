import {initializeApp} from 'firebase/app'
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider 
} from 'firebase/auth'
import{
getFirestore,
doc,
getDoc,
setDoc
}from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDMoywodb3STshz8wMbC4a3kK9GrlpnS9E",
  authDomain: "ecommerce-db-a5d09.firebaseapp.com",
  projectId: "ecommerce-db-a5d09",
  storageBucket: "ecommerce-db-a5d09.appspot.com",
  messagingSenderId: "721403023866",
  appId: "1:721403023866:web:43682be3c6d4316f6cd443"
};
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider();

  googleProvider.setCustomParameters({
    prompt: 'select_account'
  });

  export const auth = getAuth();
  export const googleSignInWithPopup = () => signInWithPopup(auth, googleProvider);
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth,googleProvider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef =doc(db, 'users', userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if(!userSnapshot.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try{
      await setDoc(userDocRef, {
        displayName,
        email,createdAt
      });
    } catch(error) {
      console.log("its error",error.message);
    }
  }
    

}




  {/*trying if code is uploading on github*/}