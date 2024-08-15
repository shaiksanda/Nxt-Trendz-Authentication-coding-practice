// Write your JS code here
import './index.css'

const Header = props => {
  console.log(props)
  return (
    <div className="header">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="website-logo"
        />
      </div>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <li className="nav-item">Home</li>
        <li className="nav-item">Products</li>
        <li className="nav-item">Cart</li>
        <button type="button" className="logout-button">
          Logout
        </button>
      </div>
    </div>
  )
}

export default Header
