import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
export default function Header() {
    return (
        <header>
            <Link to="/" className="header__logo">Star Wars info</Link>
        </header>
    )
}
