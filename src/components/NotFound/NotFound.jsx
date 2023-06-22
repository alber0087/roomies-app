import BackBtn from '../BackBtn/BackBtn'
import Header from '../Header/Header'
import './NotFound.css'

function NotFound() {
  return (
    <>
      <Header />
      <BackBtn className="error-back-btn" />
      <div className="not-found">
        <div>Oops! Page not found!</div>
      </div>
    </>
  )
}

export default NotFound
