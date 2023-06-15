import './Header.css'
import logo from '../../assets/logo.png'

function Header() {
  return (
    <>
      <div className='header'>
        <div className="logo">
          <img src={logo}/>
        </div>
      </div>
    </>
  )
}

export default Header