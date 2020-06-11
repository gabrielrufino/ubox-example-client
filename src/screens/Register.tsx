import React, {useState} from 'react'
import { Redirect } from 'react-router-dom'

function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({
    name: [],
    email: [],
    username: [],
    password: []
  })
  const [redirect, setRedirect] = useState('')

  async function createUser() {
    const { REACT_APP_API_URL } = process.env

    try {
      const response = await fetch(`${REACT_APP_API_URL}/api/users`, {
        method: 'POST',
        body: JSON.stringify({
          name,
          email,
          username,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      })

      if (response.ok) {
        setRedirect('/login')
      } else if (response.status === 400) {
        const data = await response.json()
        setErrors(data)
      } else {
        throw new Error()
      }
    } catch {
      alert('Unexpected error')
    }
  }

  return (
    <div>
      {redirect && <Redirect to={redirect} />}

      <label className="label">Name</label>
      <input
        className={`input is-medium ${errors.name?.length ? 'is-danger': 'is-primary'}`}
        type="text"
        placeholder="Gabriel Rufino"
        onChange={event => setName(event.target.value)}
      />
      {errors.name && <small className="has-text-danger">{errors.name.join('\n')}</small>}
      <div className="mb-5" />

      <label className="label">E-mail</label>
      <input
        className={`input is-medium ${errors.email?.length ? 'is-danger': 'is-primary'}`}
        type="text"
        placeholder="contato@gabrielrufino.com"
        onChange={event => setEmail(event.target.value)}
      />
      {errors.email && <small className="has-text-danger">{errors.email.join('\n')}</small>}
      <div className="mb-5" />

      <label className="label">Username</label>
      <input
        className={`input is-medium ${errors.username?.length ? 'is-danger': 'is-primary'}`}
        type="text"
        placeholder="gabrielrufino"
        onChange={event => setUsername(event.target.value)}
      />
      {errors.username && <small className="has-text-danger">{errors.username.join('\n')}</small>}
      <div className="mb-5" />

      <label className="label">Password</label>
      <input
        className={`input is-medium ${errors.password?.length ? 'is-danger': 'is-primary'}`}
        type="password"
        placeholder="••••••••"
        onChange={event => setPassword(event.target.value)}
      />
      {errors.password && <small className="has-text-danger">{errors.password.join('\n')}</small>}
      <div className="mb-5" />

      <button className="button is-primary is-medium is-fullwidth" onClick={createUser}>Register</button>
    </div>
  )
}

export default Register
