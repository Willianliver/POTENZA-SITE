import React from 'react'
/* import { useState, useEffect, useRef } from "react"; */
import { canUseDOM } from 'vtex.render-runtime'
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
export default function Descricaopersonalizada() {
  const productContextValue = useProduct()
  const product = productContextValue.product

  const properties = product?.properties
  const getPropertyValue = bindGetPropertyValue(properties)

  const description = getPropertyValue('descrição do texto', properties)

  return (
    <>
    {description ? (
        <section className={styles.Descricaopersonalizada}>
        <p className={styles.description}>{description}</p>
        </section>

         ) : (
            ''
          )}
    </>
    )
}