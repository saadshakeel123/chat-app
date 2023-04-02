import React from 'react'
import GoogleButton from 'react-google-button'

import { auth } from "../firebase"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"

// const googleSignIn = () => {
//   const provider = new GoogleAuthProvider();
//   signInWithRedirect(auth, provider);
// }
const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
    // signInWithRedirect(auth, provider)
  };
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

function SignIn() {
  return (
    <div className='flex justify-center py-14 rounded-lg'>
      <GoogleButton onClick={handleGoogleSignIn} />
    </div>
  )
}

export default SignIn