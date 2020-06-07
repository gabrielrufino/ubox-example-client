import React, {useState} from 'react'

function Login () {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

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
  
      localStorage.setItem('token', data.Authorization)
    } catch {
      alert('Unexpected error!')
    }
  }

  return (
    <div>
      <label className="label">Username</label>
      <input
        className="input is-primary is-medium mb-5"
        type="text"
        placeholder="gabrielrufino"
        onChange={event => setUsername(event.target.value)}
      />

      <label className="label">Password</label>
      <input
        className="input is-primary is-medium mb-5"
        type="password"
        placeholder="••••••••"
        onChange={event => setPassword(event.target.value)}
      />

      <button className="button is-primary is-medium is-fullwidth" onClick={createToken}>Login</button>
    </div>
  )
}

export default Login
