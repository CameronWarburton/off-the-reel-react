import React from 'react'

function SkeletonLoader() {
    return (
      <div className="films-list">
        {Array.from({ length: 6 }).map((_, index) => (
          <div className="film" key={index}>
            <div className="skeleton skeleton-img"></div>
            <div className="skeleton skeleton-title"></div>
            <div className="skeleton skeleton-body"></div>
          </div>
        ))}
      </div>
    );
  }
  
  export default SkeletonLoader;