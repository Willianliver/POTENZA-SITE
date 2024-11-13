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

export default function ProductBannerProduct() {
  const productContextValue = useProduct()
  const product = productContextValue.product

  const properties = product?.properties
  const getPropertyValue = bindGetPropertyValue(properties)

  // const title = getPropertyValue('titulo')
  const bannerProduto = getPropertyValue('Banner-Produto')
  const bannerProdutoMobile = getPropertyValue('Banner-Produto-Mobile')

  // if (canUseDOM) {
  // console.log("TESTE TESTE")
  // console.log(properties)
  // console.log(bannerProduto)
  // console.log(productContextValue)
  // }

  return (
    <>
      {bannerProduto || bannerProdutoMobile ? (
        <section className={styles.productBanner}>
          <img
            className={styles.desktop}
            src={'/arquivos/' + bannerProduto}
            alt=""
          />
          <img
            className={styles.mobile}
            src={'/arquivos/' + bannerProdutoMobile}
            alt=""
          />
        </section>
      ) : (
        ''
      )}
    </>
  )
}
