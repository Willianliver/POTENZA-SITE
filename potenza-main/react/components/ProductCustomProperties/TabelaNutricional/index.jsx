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

export default function TabelaNutricional() {
  const productContextValue = useProduct()
  const product = productContextValue.product

  const properties = product?.properties
  const getPropertyValue = bindGetPropertyValue(properties)

  const tabela = getPropertyValue('imagem-tabela', properties)
  const tabelaTitulo = getPropertyValue('tabela-titulo', properties)
  const backgroundColor = getPropertyValue('cor de fundo', properties)

  return (
    <>
      {tabela ? (
        <section className={styles.tabelaNutricional}>
          <h2 className={styles.title}>{tabelaTitulo}</h2>
          <div
            className={styles.imgWrapper}
            style={{
              background:
                `linear-gradient(0deg, ${backgroundColor} 50%, #ffffff 50%)` ??
                '#fff',
            }}
          >
            <div className={styles.imgContainer}>
              <img src={'/arquivos/' + tabela} alt={''} />
            </div>
          </div>
        </section>
      ) : (
        ''
      )}
    </>
  )
}
