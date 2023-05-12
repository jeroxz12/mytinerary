import React, { useState, useEffect } from 'react'
const Favorites = () => {

    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
      first
    
      return () => {
        second
      }
    }, [third])
    


  return (
    <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fa-solid fa-user" style={{ color: "ffffff" }}></i>
              </Link>
              <div className="dropdown-menu">
                <Link className="dropdown-item" to={"/login"}>
                  Login
                </Link>
                <Link className="dropdown-item" to={"/register"}>
                  Sign in
                </Link>
              </div>
    </li>
  )
}

export default Favorites