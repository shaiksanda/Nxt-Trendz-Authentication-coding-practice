import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()

    const {username, password} = this.state

    // Validation for empty username and/or password
    if (username === '' && password === '') {
      this.onSubmitFailure('Username and password cannot be empty')
    } else if (username === '') {
      this.onSubmitFailure('Username cannot be empty')
    } else if (password === '') {
      this.onSubmitFailure('Password cannot be empty')
    } else {
      // Proceed with API call if validation is successful
      const userDetails = {username, password}
      const url = 'https://apis.ccbp.in/login'
      const options = {
        method: 'POST',

        body: JSON.stringify(userDetails),
      }

      try {
        const response = await fetch(url, options)
        const data = await response.json()

        if (response.ok) {
          this.onSubmitSuccess()
        } else {
          // Handle server-side errors
          this.onSubmitFailure(data.error_msg || 'Invalid username or password')
        }
      } catch (error) {
        // Handle network errors
        this.onSubmitFailure('Something went wrong. Please try again.')
      }
    }
  }

  renderInputUserNameField = () => {
    const {username} = this.state
    return (
      <>
        <label className="label" htmlFor="username">
          USERNAME
        </label>
        <br />
        <input
          className="input"
          type="text"
          id="username"
          onChange={this.onChangeUsername}
          placeholder="username"
          autoComplete="username"
          value={username}
        />
      </>
    )
  }

  renderInputPasswordField = () => {
    const {password} = this.state
    return (
      <>
        <label className="label" htmlFor="password">
          PASSWORD
        </label>
        <br />
        <input
          onChange={this.onChangePassword}
          placeholder="password"
          className="input"
          type="password"
          id="password"
          value={password}
          autoComplete="current-password"
        />
        <br />
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    console.log('showSubmitError:', showSubmitError)
    console.log('errorMsg:', errorMsg)

    return (
      <div className="login-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="website-login-image"
        />
        <div className="input-field">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="website-logo"
          />
          <form className="form" onSubmit={this.submitForm}>
            {this.renderInputUserNameField()}
            {this.renderInputPasswordField()}
            <div style={{textAlign: 'center'}}>
              <button type="submit" className="login-button">
                Login🔒
              </button>
            </div>
            {showSubmitError && <p className="error-message">*{errorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
