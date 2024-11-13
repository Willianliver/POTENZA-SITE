import React from 'react'
import { useProduct } from 'vtex.product-context'

import styles from './style.css'

function bindGetPropertyValue(properties) {
  return function getPropertyValue(propertyName) {
    const property = properties?.find(
      (property) => property.name === propertyName
    )
    return property?.values?.[0]
  }
}

export default function TabelaNutricional() {
  const productContextValue = useProduct()
  const product = productContextValue.product

  const properties = product?.properties
  const getPropertyValue = bindGetPropertyValue(properties)

  const ingredientes = getPropertyValue('ingredientes', properties)
  const backgroundColor = getPropertyValue('cor de fundo', properties)

  return (
    <>
      {ingredientes ? (
        <section
          className={styles.ingredientes}
          style={{ backgroundColor: backgroundColor ?? '#fff' }}
        >
          {' '}
          <h2 className={styles.title}>INGREDIENTES</h2>
          <p>{ingredientes}</p>
        </section>
      ) : (
        ''
      )}
    </>
  )
}
