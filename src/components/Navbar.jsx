import React from 'react'
import SignIn from './SignIn';

import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Logout from './Logout';


function Navbar() {
    const [user] = useAuthState(auth);
    return (
        <>
            <div className=" rounded-lg h-20 flex justify-between items-center p-4">
                <h1 className="text-white text-3xl font-bold">Chat</h1>

            {user ? <Logout /> : null}
            </div>

            {user ? null :<SignIn  />}
        </>
    )

}

export default Navbar