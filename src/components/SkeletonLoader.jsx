import React from 'react'

function SkeletonLoader() {
    return (
      <div className="films-list">
        {Array.from({ length: 6 }).map((_, index) => (
          <div className="film" key={index}>
            <div className="film__img skeleton skeleton-img"></div>
            <div className="film__title skeleton skeleton-title"></div>
            <div className="films__body skeleton skeleton-body"></div>
          </div>
        ))}
      </div>
    );
  }
  
  export default SkeletonLoader;