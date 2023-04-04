// Write your code here
import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const aboutBg = isDarkTheme ? 'bg-dark' : 'bg-light'

      const aboutImageURL = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      const aboutText = isDarkTheme ? 'text-light' : 'text-dark'

      return (
        <div className={`bg-container ${aboutBg}`}>
          <Navbar />
          <div className="page-container">
            <div className="container">
              <img className="image" src={aboutImageURL} alt="about" />
              <h1 className={`heading ${aboutText}`}>About</h1>
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
