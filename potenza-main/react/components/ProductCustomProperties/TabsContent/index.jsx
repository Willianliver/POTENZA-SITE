import React from 'react'
import { useProduct } from 'vtex.product-context'
import { canUseDOM } from 'vtex.render-runtime'
import { useState } from 'react'

import styles from './style.css'

function bindGetPropertyValue(properties) {
  return function getPropertyValue(propertyName) {
    const property = properties?.find(
      (property) => property.name === propertyName
    )
    return property?.values?.[0]
  }
}

export default function Tabs({ activeTab }) {
  const productContextValue = useProduct()
  const product = productContextValue.product
  const specificationGroups = product?.specificationGroups
  const specificationGroup = specificationGroups?.find(
    (specificationGroup) => specificationGroup.name === 'O QUE É'
  )
  const specifications = specificationGroup?.specifications

  const properties = product?.properties
  const getPropertyValue = bindGetPropertyValue(properties)

  const img1 = getPropertyValue('item1-imagem')
  const title1 = getPropertyValue('item1-titulo')
  const text1 = getPropertyValue('item1-descrição')

  const img2 = getPropertyValue('item2-imagem')
  const title2 = getPropertyValue('item2-titulo')
  const text2 = getPropertyValue('item2-descrição')

  const img3 = getPropertyValue('item3-imagem')
  const title3 = getPropertyValue('item3-titulo')
  const text3 = getPropertyValue('item3-descrição')

  const backgroundColor = getPropertyValue('cor de fundo', properties)

  return (
    <>
      {(img1 && title1 && text1) ||
      (img2 && title2 && text2) ||
      (img3 && title3 && text3) ? (
        <section
          className={styles.tabsContentSection}
          style={{
            backgroundColor: backgroundColor ?? '#fff',
            scrollMarginTop: '140px',
          }}
          id="product-tabs-content"
        >
          <div className={styles.tabsContentContainer}>
            {img1 && title1 && text1 && activeTab == 1 ? (
              <div className={styles.tabsContent}>
                <h2>{title1}</h2>
                <p>
                  <pre>{text1}</pre>
                </p>
              </div>
            ) : (
              ''
            )}
            {!!img2 && !!title2 && !!text2 && activeTab == 2 ? (
              <div className={styles.tabsContent}>
                <h2>{title2}</h2>
                <p>
                  <pre>{text2}</pre>
                </p>
              </div>
            ) : (
              ''
            )}
            {!!img3 && !!title3 && !!text3 && activeTab == 3 ? (
              <div className={styles.tabsContent}>
                <h2>{title3}</h2>
                <p>
                  <pre>{text3}</pre>
                </p>
              </div>
            ) : (
              ''
            )}
          </div>
        </section>
      ) : (
        ''
      )}
    </>
  )
}
