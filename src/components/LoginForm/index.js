import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    usernameError: '',
    passwordError: '',
    loginError: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value, usernameError: ''})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value, passwordError: ''})
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  submitForm = async event => {
    event.preventDefault()

    const {username, password} = this.state
    let valid = true

    if (username === '') {
      this.setState({usernameError: 'Username cannot be empty'})
      valid = false
    }

    if (password === '') {
      this.setState({passwordError: 'Password cannot be empty'})
      valid = false
    }

    if (!valid) return

    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok) {
      this.onSubmitSuccess()
    } else {
      this.setState({
        loginError: data.error_msg || 'Invalid username or password',
      })
    }
  }

  renderInputUserNameField = () => {
    const {usernameError} = this.state
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
        />
        {usernameError && <p className="error-message">{usernameError}</p>}
      </>
    )
  }

  renderInputPasswordField = () => {
    const {passwordError} = this.state
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
          autoComplete="current-password"
        />
        {passwordError && <p className="error-message">{passwordError}</p>}
        <br />
      </>
    )
  }

  render() {
    const {loginError} = this.state
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
            {loginError && <p className="error-message">{loginError}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
