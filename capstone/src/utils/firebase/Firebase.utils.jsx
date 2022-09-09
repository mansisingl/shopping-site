import {initializeApp} from 'firebase/app'
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider 
} from 'firebase/auth'

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
