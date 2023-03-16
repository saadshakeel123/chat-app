import React from "react";
import Navbar from "./components/Navbar";

import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Chat from "./components/Chat";




function App() {
  const [user] = useAuthState(auth);
 
  return (
    
    <div className="max-w-[728px] mx-auto  text-center bg-gray-500  rounded-lg ">
      <section className="flex flex-col h-[90vh] bg-gray-900 rounded-lg  shadow-xl border-none relative">
        <Navbar />
        {user ? <Chat /> : null}
      </section>
    </div>
    
  );
}

export default App;
