import React from 'react';
import { auth } from '../firebase'

const style = {
  message: `flex items-center shadow-xl mt- mb-4 py-2 px-3 rounded-tl-full rounded-tr-full`,
  name: `static  text-gray-600 text-xs`,
  sent: `bg-indigo-800 text-white flex-row-reverse text-end float-right rounded-bl-full`,
  received: `bg-gray-600 text-white float-left rounded-br-full`,
  sentName: "flex justify-end",
  receivedName: " flex justify-start",
};

const Message = ({ message }) => {
  const messageClass =
    message.uid === auth.currentUser.uid
      ? `${style.sent}`
      : `${style.received}`
      const messageName =
      message.uid === auth.currentUser.uid
        ? `${style.sentName}`
        : `${style.receivedName}`

  return (
    <div>

      <div className={` ${messageName}`}>
        
      <p className={style.name} >{message.name}</p>
      </div>
      <div className={`${style.message} ${messageClass}`}>
        <p>{message.text}</p>

      </div>
    </div>
  );
};

export default Message;