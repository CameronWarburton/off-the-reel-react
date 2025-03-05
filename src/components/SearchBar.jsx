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

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState("");
      const navigate = useNavigate();

  return (
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
  )
}

export default SearchBar