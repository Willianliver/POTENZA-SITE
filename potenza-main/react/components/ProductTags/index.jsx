import React from 'react'
import { useProduct } from 'vtex.product-context'

import styles from './style.css'

export default function ProductTags() {
  const productContextValue = useProduct()
  const product = productContextValue.product
  const specificationGroup = product?.specificationGroups?.find(
    (specificationGroup) => specificationGroup.name === 'TAGS'
  )
  const specification = specificationGroup?.specifications?.find(
    (specification) => specification.name === 'tags'
  )
  /* const tags = specification?.values[0].replaceAll(", ", ",").replaceAll(" ,", ",").split(","); */

  const property = product?.properties?.find(
    (property) => property.name === 'tags'
  )
  const tags = property?.values[0]
    .replaceAll(', ', ',')
    .replaceAll(' ,', ',')
    .split(',')

  return (
    <>
      {tags?.length ? (
        <div className={styles.tags}>
          {tags?.map((tagName) => (
            <div className={styles.tag} data-tag={tagName.toLowerCase()}>
              {tagName}
            </div>
          ))}
        </div>
      ) : (
        ''
      )}
    </>
  )
}
