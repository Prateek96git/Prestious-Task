import React, {useState, useEffect} from 'react'

function HeadTail() {
   const [errors, setErrors] = useState({})

   const handleSubmit = (e) => {
    e.preventDefault()
    console.log(HeadTail)
   }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <br/><br/>
        <div className="dropdown">
          <a className="btn dropdown-toggle" placeholder='select value' href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            select value
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item">H</a></li>
            <li><a className="dropdown-item">T</a></li>
          </ul>
        </div>
        </div>
      </div>
      <div className="gap-2 mt-3">
            <button type="submit" onClick={handleSubmit} className="btn btn-secondary">
              Submit
            </button>
          </div>
    </div>
  )
}

export default HeadTail
