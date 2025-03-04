import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'

function handleSearch(event, searchQuery, navigate) {
  event.preventDefault();
  if (searchQuery.trim()) {
    navigate(`/movies?query=${encodeURIComponent(searchQuery)}`)
  } 
}

const Landing = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  return (
    <section id="landing">
        <div className='row'>
        <header className="header">
          <div className="header__content">
            <h1 className="title">Welcome To</h1>
            <h1 className="title blue">Off The Reel</h1>
          </div>
        </header>
        <div className="search-bar__container">
          <form onSubmit={(e) => handleSearch(e, searchQuery, navigate)} className="search-bar">
            <input
              type="text"
              placeholder="Search for a Film or Series..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit"><FontAwesomeIcon icon="search" /></button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Landing;