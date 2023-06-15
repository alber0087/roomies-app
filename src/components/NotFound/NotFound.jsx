import BackBtn from '../BackBtn/BackBtn';
import './NotFound.css';

function NotFound() {
  return (
    <div className="not-found">
      <BackBtn />
      <div>Oops! Page not found!</div>
    </div>
  )
}

export default NotFound