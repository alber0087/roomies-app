import { useEffect, useState } from 'react'
import { getUserLogged } from '../../services/user.service'
import './ChatPage.css'
import { socket } from '../../socket'

function ChatPage() {
  const [isConnected, setIsConnected] = useState(false)
  const [newMessage, setNewMessage] = useState('')
  const [messages, setMessages] = useState([])
  const [userLogged, setUserLogged] = useState('')

  const getUserLoggedFunc = async () => {
    const res = await getUserLogged()
    setUserLogged(res)
  }

  useEffect(() => {
    getUserLoggedFunc()
    socket.on('connect', () => setIsConnected(true))

    socket.on('chat_message', (data) => {
      setMessages((messages) => [...messages, data])
    })

    return () => {
      socket.off('connect')
      socket.off('chat_message')
    }
  }, [])

  const sendMessage = () => {
    socket.emit('chat_message', {
      user: userLogged.firstName.toUpperCase(),
      message: newMessage,
    })
  }

  return (
    <div className='container'>
      <h2>{isConnected ? 'CONECTADO' : 'NO CONECTADO'}</h2>
      <ul className='chat-box'>
        {messages.map((m, idx) => (
           <li className='message' key={idx}>
            {m.user}: {m.message}
          </li>
        ))}
      </ul>
      <input
        type="text"
        onChange={(e) => setNewMessage(e.target.value)}
      ></input>
      <button onClick={sendMessage}>Send</button>
    </div>
  )
}

export default ChatPage
