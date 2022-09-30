import {initializeApp} from 'firebase/app'
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider ,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
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
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth,googleProvider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation={}
  ) => {
  if( !userAuth) return;
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
        email,createdAt,
        ...additionalInformation

      });
    } catch(error) {
      console.log("its error",error.message);
    }
  }
    
return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth,email,password);
} ;

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;

  return await signInWithEmailAndPassword(auth,email,password);
 } ;

 export const signOutUser = async () => await signOut(auth);


 export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);
  {/*trying if code is uploading on github*/} 