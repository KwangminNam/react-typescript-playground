import React, { useState } from 'react'
import io from 'socket.io-client';
import Chat from './Chat';
import './App.css';
const socket = io.connect('http://localhost:3001');

export default function App() {

  const [userName, setUserName] = useState("");
  const [roomName, setRoomName] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (userName !== "" && roomName !== "") {
      socket.emit("join_room", roomName);
      //roomName의  인풋 state로 join_room의 아이디값을 보냄
      setShowChat(true);
    }
  }
  //개발자 도구 network tab 보면 http 통신을 안하고있음 그래도 통신이 가능

  return (
    <div className="App">
      {!showChat ? (<div className='joinChatContainer'>
        <h3>채팅 하기</h3>
        <input type="text" placeholder='이름입력' onChange={(event) => { setUserName(event.target.value) }} />
        <input type="text" placeholder='방 이름' onChange={(event) => { setRoomName(event.target.value) }} />
        <button onClick={joinRoom}>채팅방 들어가기</button>

      </div>) : (
        <Chat socket={socket} username={userName} room={roomName} />
      )}
    </div>
  )
}
