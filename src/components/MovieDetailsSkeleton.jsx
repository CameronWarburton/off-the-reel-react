const MovieDetailsSkeleton = () => {
    return (
      <div className="movie__details">
        <div className="movie__details--left">
          <div className="skeleton__details skeleton__img"></div>
        </div>
  
        <div className="movie__details--right">
          <div className="skeleton__details skeleton__title"></div>
          <div className="skeleton__details skeleton__plot"></div>
          <div className="skeleton__details skeleton__text"></div>
          <div className="skeleton__details skeleton__text"></div>
          <div className="skeleton__details skeleton__text"></div>
        </div>
      </div>
    );
  };
  
  export default MovieDetailsSkeleton;