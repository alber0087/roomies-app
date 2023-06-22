import { useEffect, useState } from 'react'
import { getUserLogged } from '../../services/user.service'
import { socket } from '../../socket'
import './ChatPage.css'

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
      user: userLogged.firstName,
      message: newMessage,
    })
  }

  return (
    <div className="container">
      {/*       <h2>{isConnected ? 'CONECTADO' : 'NO CONECTADO'}</h2> */}
      <div className="wrapper">
        <div className="chat-box">
          {messages.map((m, idx) => (
            <div className="message" key={idx}>
              <div className="user-wrapper">
                <span className="user">{m.user}:</span>
              </div>
              <span>{m.message}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="chat-form">
        <input type="text" onChange={(e) => setNewMessage(e.target.value)} />
        <button onClick={sendMessage}>
          <span className="material-symbols-outlined">send</span>
        </button>
      </div>
    </div>
  )
}

export default ChatPage
