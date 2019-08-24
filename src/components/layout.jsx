import React from 'react'
import { Link } from 'gatsby'
import 'bulma/css/bulma.min.css'
import '../style.css'

export default function ({ children }) {
    return <div>
        <section className="section">
            <div className="container">
                <Link to="/">Home { ' หน้าแรก' }</Link>{' | '}
                <Link to="/about">About {' เกี่ยวกับ'}</Link> {' | '}
                <Link to="/people">People </Link>{' | '}
                <Link to="/users">Users </Link>{' | '}
                <Link to="/albums">Albums</Link>
                {children}
            </div>
        </section>
    </div>
}