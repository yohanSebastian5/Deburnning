import React from 'react'

export default function Nabvar() {
  return (
    <header className="header">
        <nav className="nav-bar">
            <div className="first-bar bar-mod">
                <a href=""><i className="bi bi-house-fill"></i>Home</a>
                <a href=""><i className="bi bi-file-text-fill"></i>Blog</a>
            </div>

            <div className="logo">
                <img src="Adidas-logo.jpg" alt="logo" />
            </div>

            <div className="second-bar bar-mod" >
                <a href=""><i className="bi bi-box-arrow-right"></i>Logout</a>
            </div>

        </nav>
    </header>
  )
}
