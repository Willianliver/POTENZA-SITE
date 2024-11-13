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

export default function DoseDiaria() {
  const productContextValue = useProduct()
  const product = productContextValue.product

  const properties = product?.properties
  const getPropertyValue = bindGetPropertyValue(properties)

  const title = getPropertyValue('Titulo dose diária', properties)
  const description = getPropertyValue('descrição dose diária',properties)
  const img1 = getPropertyValue('item 1-imagem', properties) 
  const text1 = getPropertyValue('item1-texto', properties)
  const img2 = getPropertyValue('item 2-imagem', properties)
  const text2 = getPropertyValue('item2-texto', properties)
  const img3 = getPropertyValue('item 3-imagem', properties)
  const text3 = getPropertyValue('item3-texto', properties)
  const img4 = getPropertyValue('item 4-imagem', properties)
  const text4 = getPropertyValue('item4-texto', properties)
  const description1 = getPropertyValue('Descrição personalizada', properties)

  return (
    <>
      {title && description ? (
        <section className={styles.doseDiaria}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
          <p className={styles.description1}>{description1}</p>
          <ul className={styles.items}>
            {img1 && text1 ? (
              <li className={styles.item}>
                <img
                  src={'/arquivos/' + img1}
                  alt={''}
                  className={styles.itemImg}
                />
                <p className={styles.itemText}>{text1}</p>
              </li>
            ) : (
              ''
            )}
            {img2 && text2 ? (
              <li className={styles.item}>
                <img
                  src={'/arquivos/' + img2}
                  alt={''}
                  className={styles.itemImg}
                />
                <p className={styles.itemText}>{text2}</p>
              </li>
            ) : (
              ''
            )}
            {img3 && text3 ? (
              <li className={styles.item}>
                <img
                  src={'/arquivos/' + img3}
                  alt={''}
                  className={styles.itemImg}
                />
                <p className={styles.itemText}>{text3}</p>
              </li>
            ) : (
              ''
            )}
            {img4 && text4 ? (
              <li className={styles.item}>
                <img
                  src={'/arquivos/' + img4}
                  alt={''}
                  className={styles.itemImg}
                />
                <p className={styles.itemText}>{text4}</p>
              </li>
            ) : (
              ''
            )}
          </ul>
        </section>
      ) : (
        ''
      )}
    </>
  )
}
