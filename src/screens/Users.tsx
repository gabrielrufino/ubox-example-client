import React, {useEffect, useState} from 'react'

interface IUser {
  name: string;
}

function Users() {
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(function () {
    const headers = new Headers()
    headers.append('Content-Type', 'application/json')
    headers.append('Authorization', localStorage.getItem('token') || '')

    fetch(`${process.env.REACT_APP_API_URL}/api/users`, {
      headers
    })
      .then(response => response.json())
      .then(({ data }) => {
        setUsers(data);
      })

  }, [])

  return (
    <div>
      usuários
    </div>
  )
}

export default Users
