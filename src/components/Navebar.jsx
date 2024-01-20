
import React from 'react'
import { Link } from 'react-router-dom'
const Navebar = () => {
  
  return (
    <div><nav class="navbar navbar-expand-lg bg-dark">
    <div class="container-fluid">
      <Link class="navbar-brand" to="/"><h3 style={{color: "#85D2A1"}}>NEWS LIVE</h3></Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
           data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
           aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button >
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0" >
          <li class="nav-item">
          
            <Link style={{color: "#85D2A1"}} class="nav-link" activeClassName="active" aria-current="page" to="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link style={{color: "#85D2A1"}} class="nav-link" aria-current="page" to="/General">General</Link>
          </li>
          <li class="nav-item">
            <Link style={{color: "#85D2A1"}} class="nav-link" aria-current="page" to="/Business">Business</Link>
          </li>
          <li class="nav-item">
            <Link style={{color: "#85D2A1"}} class="nav-link active" aria-current="page" to="/Entertainment">Entertainment</Link>
          </li>
          <li class="nav-item">
            <Link style={{color: "#85D2A1"}} class="nav-link active" aria-current="page" to="/Health">Health</Link>
          </li>
          <li class="nav-item">
            <Link style={{color: "#85D2A1"}} class="nav-link active" aria-current="page" to="/Science">Science</Link>
          </li>
          <li class="nav-item">
            <Link style={{color: "#85D2A1"}} class="nav-link active" aria-current="page" to="/Sports">Sports</Link>
          </li>
          <li class="nav-item">
            <Link style={{color: "#85D2A1"}} class="nav-link active" aria-current="page" to="/Technology">Technology</Link>
          </li>        
        </ul> 
      </div>
    </div>
  </nav></div>
  )
}

export default Navebar