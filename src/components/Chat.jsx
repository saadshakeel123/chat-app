import React, { useState, useEffect, useRef } from 'react';
import Message from './Message';
import SendMessage from './SendMessage';
import { db } from '../firebase';
import { query, collection, orderBy, onSnapshot } from 'firebase/firestore';


const Chat = () => {
    const [messages, setMessages] = useState([]);
    const scroll = useRef();

    useEffect(() => {
        const q = query(collection(db, 'messages'), orderBy('timestamp'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let messages = [];
            querySnapshot.forEach((doc) => {
                messages.push({ ...doc.data(), id: doc.id });
            });
            setMessages(messages);
        });
        return () => unsubscribe();
    }, []);

    return (
        <>
            <main className="flex flex-col h-[81%]  p-[10px] overflow-y-scroll ">
                {messages &&
                    messages.map((message) => (
                        <Message key={message.id} message={message} />
                    ))}
            </main>
            
            <SendMessage scroll={scroll} />
            <span ref={scroll}></span>
        </>
    );
};

export default Chat;