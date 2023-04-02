import React from 'react'
import GoogleButton from 'react-google-button'

import { UserAuth } from '../context/AuthContext';



function SignIn() {
  const { googleSignIn } = UserAuth();


  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className='flex justify-center py-14 rounded-lg '>
      <GoogleButton className='' onClick={handleGoogleSignIn} />
    </div>
  )
}

export default SignIn