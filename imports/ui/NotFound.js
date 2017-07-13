import React from 'react';
import {Link} from 'react-router';
export default ()=>{
  return(
    <div className="boxed-view">
      <div className="boxed-view__box">
        <h1>404 Not Found.</h1>
        <p>Hmmmm, we're Unable to find that page.</p>
        <Link className="button button--link" to="/">HEAD HOME</Link>
      </div>
    </div>
  );
}
