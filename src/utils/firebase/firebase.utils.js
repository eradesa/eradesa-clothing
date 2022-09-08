import { initializeApp  } from 'firebase/app';
import { 
    getAuth, 
    //signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
} from 'firebase/auth'
import { 
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAhLPk1hU4sk5TiDvEyw8qfXmU0sSUn9bw",
    authDomain: "crwn-clothing-db-e756f.firebaseapp.com",
    projectId: "crwn-clothing-db-e756f",
    storageBucket: "crwn-clothing-db-e756f.appspot.com",
    messagingSenderId: "1068348960386",
    appId: "1:1068348960386:web:a0f0cebc3c542f9312ce9b"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const googleprovider = new GoogleAuthProvider ();
  
  googleprovider.setCustomParameters({
      prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup (auth, googleprovider);
  //export const signInWithGoogleRedirect = () => signInWithRedirect (auth, googleprovider);

  export const db = getFirestore ();

  export const creatUserDocumentFromAuth = async (userAuth, additionalInformation ={}) => {
      if (!userAuth) return;

      const userDocRef = doc(db,'users', userAuth.uid);
      //console.log(userDocRef);
      const userSnapshot = await getDoc(userDocRef);
      console.log (userSnapshot);
      console.log (userSnapshot.exists());

      if (!userSnapshot.exists()) {
          const{ displayName, email} = userAuth;
          const createAt = new Date();

          try {
              await setDoc(userDocRef, {
                  displayName,
                  email,
                  createAt,
                  ...additionalInformation
              });
          } catch (error) {
              console.log ('Error Creating User',error.message)
          }
      }

      return userDocRef
  };

  export const createAuthUserWithEmailAndPassword = async (email, password) => {
      if (!email || !password) return;
      return await createUserWithEmailAndPassword (auth, email, password)


  }

