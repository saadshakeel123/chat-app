import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthContextProvider>
        <div className="bg-gray-600 p-10 w-full h-[100vh] ">
            <App />
        </div>
    </AuthContextProvider>
);

