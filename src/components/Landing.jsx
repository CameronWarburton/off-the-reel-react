import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'

const Landing = () => {
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
          <form onsubmit="onFormSubmit(event)" action="" className="search-bar">
            <input
              type="text"
              placeholder="Search for Film or Series"
              onchange="onSearchChange(event)"
            />
            <button type="submit"><FontAwesomeIcon icon="search" /></button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Landing;