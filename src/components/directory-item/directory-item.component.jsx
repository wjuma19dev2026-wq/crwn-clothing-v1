import { Link } from 'react-router-dom'
import './directory-item.component.scss'

export const DirectoryItem = ({ title, imageUrl }) => {
  return (
    <div
      className="directory-container"
      style={{
        background: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'fixed',
        backgroundRepeat: 'no-repeat',
        objectFit: 'cover',
      }}>
      <div className="content">
        <h3 className="text-capitalize text-primary fw-bold">
          {title}
        </h3>
        <Link
          to={`/shop/${title}`}
          className="btn btn-primary text-capitalize">
          Shop now
          <i className="bi bi-arrow-right mx-1 text-light"></i>
        </Link>
      </div>
    </div>
  )
}
