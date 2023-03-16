import React from 'react'
import GoogleButton from 'react-google-button'

import { auth } from "../firebase"
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth"

const googleSignIn = () => {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider);
}

function SignIn() {
  return (
    <div className='flex justify-center py-14 rounded-lg'>
      <GoogleButton onClick={googleSignIn} />
    </div>
  )
}

export default SignIn