import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'

function Home(props) {
    const [home, setHome] = useState([]);

    return (
      <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
               <h3 className="display-3">Home</h3>
               <div className="d-grid col-md-12 gap-3">
                <NavLink to={`/about`} className="btn btn-success d-inline-block ms-auto">About</NavLink>
                <NavLink to={`/headTail`} className="btn btn-success d-inline-block ms-auto">Head & Tail</NavLink>
               </div>
               </div>
           </div>
      </div>
    )
}

export default Home