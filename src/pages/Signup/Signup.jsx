import React, { useState } from 'react'
import './Signup.css'
import logo from './../../assets/logo.png'
import { login, signup } from '../../config'

function Signup() {

  const [SignState, setSignState] = useState('Login')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')

  const user_auth = async (event) => {
    event.preventDefault()
    if (SignState === 'Login') {
      await login(email, password)
    } else {
      await signup(username, email, phone, password)
    }
  }

  // const handleSubmit = (e)=>{
  //   e.preventDefault()
  //   console.log(username);
  // }

  return (
    <div className="container">
      <div className="form-wrapper">
        <img src={logo} className='logo' />
        {/* <h2 className="form-title">Sign Up</h2> */}
        <form>
          {SignState === 'Sign Up' ? <div className="form-group">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              className="form-input"
              placeholder="Enter your username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div> : <></>}

          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {SignState === 'Sign Up' ? <div className="form-group">
            <label htmlFor="phone" className="form-label">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="form-input"
              placeholder="Enter your phone number"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div> : <></>}

          <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-input"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn"
            onClick={user_auth}
          >
            {SignState}
          </button>
        </form>
        <div className="link">
          {SignState === 'Login' ? (
            <p>New to OLX? <a href="" onClick={(event) => { event.preventDefault(); setSignState('Sign Up'); }}>Sign Up</a></p>
          ) : (
            <p>Already have an account? <a href="" onClick={(event) => { event.preventDefault(); setSignState('Login'); }}>Login</a></p>
          )}
        </div>

      </div>
    </div>
  )
}

export default Signup
