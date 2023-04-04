// Write your code here
import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const homeBackground = isDarkTheme ? 'bg-dark' : 'bg-light'

      const homeImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      const homeText = isDarkTheme ? 'text-light' : 'text-dark'

      return (
        <div className={`bg-container ${homeBackground}`}>
          <Navbar />
          <div className="page-container">
            <div className="container">
              <img className="image" src={homeImage} alt="home" />
              <h1 className={`heading ${homeText}`}>Home</h1>
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
