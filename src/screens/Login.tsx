import React, {useState} from 'react'
import { Redirect } from 'react-router-dom'

function Login () {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({
    username: [],
    password: []
  })
  const [redirect, setRedirect] = useState('')

  async function createToken () {
    const { REACT_APP_API_URL } = process.env

    try {
      const response = await fetch(`${REACT_APP_API_URL}/api/tokens`, {
        method: 'POST',
        body: JSON.stringify({
          username,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      })

      const data = await response.json()

      if (response.ok) {
        localStorage.setItem('token', data.Authorization)

        setRedirect('/users')
      } else if (response.status === 400) {
        setErrors(data)
      } else {
        throw new Error()
      }
    } catch {
      alert('Unexpected error!')
    }
  }

  return (
    <div>
      {redirect && <Redirect to={redirect} />}

      <label className="label">Username</label>
      <input
        className={`input is-primary is-medium ${errors.username?.length ? 'is-danger': 'is-primary'}`}
        type="text"
        placeholder="gabrielrufino"
        onChange={event => setUsername(event.target.value)}
      />
      {errors.username && <small className="has-text-danger">{errors.username.join('\n')}</small>}
      <div className="mb-5" />

      <label className="label">Password</label>
      <input
        className={`input is-primary is-medium ${errors.password?.length ? 'is-danger': 'is-primary'}`}
        type="password"
        placeholder="••••••••"
        onChange={event => setPassword(event.target.value)}
      />
      {errors.password && <small className="has-text-danger">{errors.password.join('\n')}</small>}
      <div className="mb-5" />

      <button className="button is-primary is-medium is-fullwidth" onClick={createToken}>Login</button>
    </div>
  )
}

export default Login
