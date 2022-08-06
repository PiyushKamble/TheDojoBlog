import React from 'react';
import { Link } from 'react-router-dom';
const Notfound = () => {
    return ( 
        <div className="not-found">
            <h2>sorry</h2>
            <p>that page cannot be found</p>
            <Link to="/"> back to the homepage</Link>
        </div>
     );
}
 
export default Notfound;