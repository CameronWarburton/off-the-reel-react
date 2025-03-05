import React from 'react'
import SearchBar from '../components/SearchBar';

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
        <SearchBar />
      </div>
    </section>
  )
}

export default Landing;