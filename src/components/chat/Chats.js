import React, { useRef, useState, useEffect } from "react"
import axios from 'axios'
import { useHistory } from "react-router-dom"
import { ChatEngine } from 'react-chat-engine'
import { ChatEngineWrapper, ChatSocket, ChatFeed } from 'react-chat-engine'
import { ChatSettingsTop } from 'react-chat-engine';
import { MessageBubble } from 'react-chat-engine';
import { ChatList } from 'react-chat-engine';
import { useAuth } from "../contexts/AuthContext"
import { auth } from "../../firebase"
import { Button } from "@mui/material"

export default function Chats() {

  function addUser() {
    axios.post(
      'https://api.chatengine.io/chats/{{93604}}/people/',
      { headers: { 
        "project-id": "0e48d3a8-952a-45be-acd5-328896731174",
        "user-name": user.displayName,
        "user-secret": user.uid
      },
        data:{
        "username": user.displayName
        }
      })
      .then((res)=>console.log(res))
  }

  const { user } = useAuth()
  console.log(user)
  return (    
    <>
    {/* // <ChatEngineWrapper>
    //    <ChatFeed activeChat="93394"/>
    //          <ChatSocket  */}
    {/* //             projectID='0e48d3a8-952a-45be-acd5-328896731174'
    //             chatID='93604'
    //             chatAccessKey='ca-39a604f0-d012-41c8-a0ab-de517984bb03'
    //             senderUsername={user.email}
    //             onClick={(e)=>{ */}
    {/* //               e.preventdefault()
    //             }}
    //         />
    //         <ChatSettingsTop />
    //     </ChatEngineWrapper> */}
    <ChatEngine
 		 	projectID='0e48d3a8-952a-45be-acd5-328896731174'
 		 	userName={user.displayName}
 		 	userSecret={user.uid}
 		 >
    </ChatEngine>
        <Button
        onClick={addUser()}
        >Click</Button>
        </>
  )

}