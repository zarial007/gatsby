import React from 'react'
import { Link } from 'gatsby'

export default function ({ pageContext }) {
    const { users } = pageContext

    return <div>
        <h1>User</h1>
        {users.map(each => {
            return <p key={each}>
            <Link to={`/user/${each.username.toLowerCase()}`}>{each.username}</Link>
            </p>
        })}
    </div>
}