import React from 'react'
import { auth } from '../firebase'


function Logout() {

    const signOut = () => {
        signOut(auth)
    }

    return (
        <dutton onClick={() => auth.signOut()} className='rounded-lg bg-white
         font-bold text-gray-900 px-1 py-1 hover:bg-gray-900 hover:text-white'>
            LogOut
        </dutton>
    )
}

export default Logout