import React from 'react'
import image from '../Assets/image.png'
const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 py-2 py-2 w-[100%]" style={{maxWidth:"345px" }}>
      <img src={src?src:image}  style={{ height:"200px"}} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0,50)}</h5>
        <p className="card-text">{description?description.slice(0,50): "Stay updated with the latest news from around the world. Get insights, analysis."}</p>
        <a href={url} className="btn btn-primary">Read More</a>
      </div>
</div>
  )
}

export default NewsItem
