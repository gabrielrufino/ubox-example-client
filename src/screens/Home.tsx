import React from 'react'

import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <Link to="/login">
        <button className="button is-primary is-medium is-fullwidth">Login</button>
      </Link>
      <div className="mb-4" />
      <Link to="/register">
        <button className="button is-link is-medium is-fullwidth">Register</button>
      </Link>
    </div>
  )
}

export default Home
