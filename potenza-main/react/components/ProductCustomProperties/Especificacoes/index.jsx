import React from 'react'
/* import { useState, useEffect, useRef } from "react"; */
/* import { canUseDOM } from 'vtex.render-runtime'; */
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
function bindGetPropertyValues(properties) {
  return function getPropertyValue(propertyName) {
    const property = properties?.find(
      (property) => property.name === propertyName
    )
    return property?.values
  }
}

export default function Especificacoes() {
  const productContextValue = useProduct()
  const product = productContextValue.product

  const properties = product?.properties
  const getPropertyValue = bindGetPropertyValue(properties)
  const getPropertyValues = bindGetPropertyValues(properties)

  const especificacoes = getPropertyValues('Especificações', properties)

  return (
    <>
      {especificacoes?.length ? (
        <section className={styles.especificacoes}>
          <h2 className={styles.title}>Especificações</h2>
          {especificacoes.map((especificacao, index) => (
            <p key={index} className={styles.description}>
              {especificacao}
            </p>
          ))}
        </section>
      ) : (
        ''
      )}
    </>
  )
}
