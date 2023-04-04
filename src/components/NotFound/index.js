// Write your code here
import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const notFoundBg = isDarkTheme ? 'bg-dark' : 'bg-light'

      const notFoundHeading = isDarkTheme ? 'heading-light' : 'heading-dark'

      const notFoundContent = isDarkTheme ? 'content-light' : 'content-dark'

      return (
        <div className={`bg-container ${notFoundBg}`}>
          <Navbar />
          <div className="page-container">
            <div className="container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                alt="not found"
                className="img"
              />
              <h1 className={`heading ${notFoundHeading}`}>Lost Your Way?</h1>
              <p className={`content ${notFoundContent}`}>
                We cannot seem to find the page you are looking for.
              </p>
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
