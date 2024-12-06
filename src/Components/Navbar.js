import React from 'react'

const Navbar = ({setCategory}) => {
  return (

    <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div class="container-fluid">
        <a class="navbar-brand"><span className='badge bg-light text-danger fs-4 '>News</span> </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav" style={{cursor:'pointer'}}>
            <li class="nav-item" >
              <a class="nav-link active" aria-current="page" onClick={() => setCategory("general")}>All</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" onClick={() => setCategory("technology")}>Technology</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" onClick={() => setCategory("business")}>Business</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" onClick={() => setCategory("health")}>Health</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" onClick={() => setCategory("sports")}>Sports</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" onClick={() => setCategory("entertainment")}>Entertainment</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
