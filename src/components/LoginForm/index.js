// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    apiResponseError: '',
    usernameError: '',
    passwordError: '',
  }

  onSubmitFailure = () => {
    console.log('failure')
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}

    if (userDetails.username !== '' && userDetails.password === '') {
      this.setState({
        passwordError: 'Please Enter valid Password',
        apiResponseError: '',
        usernameError: '',
      })
    } else if (userDetails.username === '' && userDetails.password !== '') {
      this.setState({
        usernameError: 'Please Enter valid Username',
        apiResponseError: '',
        passwordError: '',
      })
    } else if (userDetails.username === '' && userDetails.password === '') {
      this.setState({
        usernameError: 'Please Enter valid Username',
        passwordError: 'Please Enter valid Password',
      })
    }

    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const apiResponse = await fetch(url, options)
    const apiData = await apiResponse.json()
    console.log(apiData)
    if (apiResponse.ok === true) {
      this.onSubmitSuccess()
      this.setState({apiResponseError: ''})
    } else if (apiResponse.ok === false) {
      //   console.log(apiData)
      const updatedApiData = {
        errorMsg: apiData.error_msg,
        statusCode: apiData.status_code,
      }
      const {errorMsg} = updatedApiData
      //   console.log(errorMsg)
      if (errorMsg === 'invalid username') {
        this.setState({
          apiResponseError: 'Username is not found',
          usernameError: '',
          passwordError: '',
        })
      } else if (errorMsg === "username and password didn't match") {
        this.setState({
          apiResponseError: "Username and Password didn't match",
          usernameError: '',
          passwordError: '',
        })
      }
    }
  }

  onChangeUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  passwordInputField = () => {
    const {password, passwordError} = this.state
    let errorClassName
    if (passwordError === 'Please Enter valid Password') {
      errorClassName = 'show-error'
    } else {
      errorClassName = 'no-error'
    }
    return (
      <div className="input-field-container">
        <label htmlFor="password" className="label-text">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="input-text"
          placeholder="Password"
          onChange={this.onChangePassword}
          value={password}
        />
        <p className={`${errorClassName}`}>{`*${passwordError}`}</p>
      </div>
    )
  }

  userNameInputField = () => {
    const {username, usernameError} = this.state
    let errorClassName
    if (usernameError === 'Please Enter valid Username') {
      errorClassName = 'show-error'
    } else {
      errorClassName = 'no-error'
    }
    return (
      <div className="input-field-container">
        <label htmlFor="username" className="label-text">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="input-text"
          placeholder="Username"
          onChange={this.onChangeUsername}
          value={username}
        />
        <p className={`${errorClassName}`}>{`*${usernameError}`}</p>
      </div>
    )
  }

  render() {
    const {apiResponseError} = this.state
    let errorClassName
    if (apiResponseError !== '') {
      errorClassName = 'show-error'
    } else {
      errorClassName = 'no-error'
    }

    return (
      <div className="login-form-container">
        <div className="login-image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="website-logo-sm"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="login-image"
          />
        </div>

        <div className="login-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="website-logo-lg"
          />
          <form className="form-container" onSubmit={this.onSubmitForm}>
            {this.userNameInputField()}
            {this.passwordInputField()}
            <button type="submit" className="login-button">
              Login
            </button>
            <p className={`${errorClassName}`}>{`*${apiResponseError}`}</p>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
