import React from 'react'
import { auth } from '../firebase'


function Logout() {

    const signOut = () => {
        signOut(auth)
    }

    return (
        <dutton onClick={() => auth.signOut()} className='rounded-lg font-semibold text-white px-4 py-2 hover:bg-gray-100 hover:text-black'>
            LogOut
        </dutton>
    )
}

export default Logout