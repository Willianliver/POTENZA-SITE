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

export default function Beneficios() {
  const productContextValue = useProduct()
  const product = productContextValue.product

  const properties = product?.properties
  const getPropertyValue = bindGetPropertyValue(properties)

  const title = getPropertyValue('titulo')
  const img1 = getPropertyValue('imagem1')
  const img2 = getPropertyValue('imagem2')
  const img3 = getPropertyValue('imagem3')
  const img4 = getPropertyValue('imagem4')
  const banner = getPropertyValue('banner')

  /* if (canUseDOM) {
        console.log(productContextValue)
    } */

  return (
    <>
      {title ? (
        <section className={styles.beneficios}>
          <h2 className={styles.title}>{title}</h2>
          <ul className={styles.items}>
            {img1 ? (
              <li className={styles.item}>
                <img
                  src={'/arquivos/' + img1}
                  alt={''}
                  className={styles.itemImg}
                />
              </li>
            ) : (
              ''
            )}
            {img2 ? (
              <li className={styles.item}>
                <img
                  src={'/arquivos/' + img2}
                  alt={''}
                  className={styles.itemImg}
                />
              </li>
            ) : (
              ''
            )}
            {img3 ? (
              <li className={styles.item}>
                <img
                  src={'/arquivos/' + img3}
                  alt={''}
                  className={styles.itemImg}
                />
              </li>
            ) : (
              ''
            )}
            {img4 ? (
              <li className={styles.item}>
                <img
                  src={'/arquivos/' + img4}
                  alt={''}
                  className={styles.itemImg}
                />
              </li>
            ) : (
              ''
            )}
          </ul>
        </section>
      ) : (
        ''
      )}
      {banner ? (
        <section className={styles.productBanner}>
          <img src={'/arquivos/' + banner} alt="" />
        </section>
      ) : (
        ''
      )}
    </>
  )
}
