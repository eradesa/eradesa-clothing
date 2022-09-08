import { useEffect } from 'react';
import { getRedirectResult} from 'firebase/auth'
import { 
    auth,
    signInWithGooglePopup,
    signInWithGoogleRedirect,
    creatUserDocumentFromAuth 
} from '../../utils/firebase/firebase.utils'
const SignIn =  () => {

    useEffect (() => async ()=> {
        const response  = await getRedirectResult(auth);
        console.log(response);
        if (response) {
            const userDocRef =  await creatUserDocumentFromAuth(response.user);

        } 
    },[]);
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
            <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect </button>
        </div>
    )

};

export default SignIn;