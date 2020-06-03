import React from 'react'

import { Link } from 'react-router-dom'

function Auth() {
  return (
    <div>
      <Link to="/login">
        <button className="button is-primary is-medium is-fullwidth">Login</button>
      </Link>
      <Link to="/register">
        <button className="button is-link is-medium is-fullwidth">Register</button>
      </Link>
    </div>
  )
}

export default Auth
