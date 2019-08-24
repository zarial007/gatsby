import React from 'react'
import { Link } from 'gatsby'

export default function ({ pageContext }) {
    const { albums } = pageContext

    return <div>
        <h1>Albums</h1>
        {albums.map(each => {
            return <p key={each}>
            <Link to={`/album/${each.id}`}>{each.title}</Link>
            </p>
        })}
    </div>
}