import Header from '../Header'
import './index.css'

const Home = props => {
  console.log(props)

  return (
    <div>
      <Header />
      <div className="clothes-container">
        <div className="text-container">
          <h1 className="heading">Clothes That Get YOU Noticed</h1>
          <p className="content">
            Fashion is part of the daily air and it does not quite help that it
            changes all the time. Clothes have always been a maker of the era
            and we are in a revolution. Your Fashion makes you been seen and
            heard that way you are. So, celebrate the Seasons new and exciting
            fashion in your own way.
          </p>
          <button
            type="button"
            className="login-button"
            style={{width: '150px'}}
          >
            Shop Now 🛒
          </button>
        </div>
        <div style={{width: '100%'}}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="clothes that get you noticed"
            className="home-image"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
