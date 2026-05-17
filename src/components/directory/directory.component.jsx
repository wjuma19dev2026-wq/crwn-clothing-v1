// @ts-check

import './directory.component.scss'
import { DirectoryItem } from '../../components'
import { useContext } from 'react'
import { CategoryMapContext } from '../../context'

const Directory = ({ categories }) => {
  const { categoryMap } = useContext(CategoryMapContext)

  return (
    <div className="row">
      <div className="col-12 mt-5">
        <div className="categories-container">
          {Object.keys(categoryMap).map(
            (/** @type {String} */ title, i) => (
              <DirectoryItem
                key={i}
                title={title}
                imageUrl={categoryMap[title][0].imageUrl}
              />
            ),
          )}
        </div>
      </div>
    </div>
  )
}

export default Directory
