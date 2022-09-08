//import { useEffect } from 'react';
//import { getRedirectResult} from 'firebase/auth'
import { 
    //auth,
    signInWithGooglePopup,
    //signInWithGoogleRedirect,
    creatUserDocumentFromAuth 
} from '../../utils/firebase/firebase.utils'
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
const SignIn =  () => {

   
    const logGoogleUser = async () => {
        //const response = await signInWithGooglePopup(); //-Method 01
        //creatUserDocumentFromAuth(response.user);
        const {user} = await signInWithGooglePopup();// Method 02 - Destructure
        const userDocRef =  await creatUserDocumentFromAuth(user);
        //console.log (response)

    };

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup </button>  
            <SignUpForm />          
        </div>
    )

};

export default SignIn;