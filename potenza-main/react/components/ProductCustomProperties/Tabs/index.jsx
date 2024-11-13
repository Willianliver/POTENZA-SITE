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

export default function Tabs({ setActiveTab }) {
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

  return (
    <>
      {img1 || img2 || img3 ? (
        <section className={styles.tabsSection}>
          <div className={styles.tabsContainer}>
            <div className={styles.tabs}>
              {img1 && title1 && text1 ? (
                <div className={styles.tab} onClick={() => setActiveTab(1)}>
                  <a href="#product-tabs-content">
                    <img
                      src={'/arquivos/' + img1}
                      alt={title1}
                      className={styles.tabImg}
                    />
                  </a>
                </div>
              ) : (
                ''
              )}
              {!!img2 && !!title2 && !!text2 ? (
                <div className={styles.tab} onClick={() => setActiveTab(2)}>
                  <a href="#product-tabs-content">
                    <img
                      src={'/arquivos/' + img2}
                      alt={title2}
                      className={styles.tabImg}
                    />
                  </a>
                </div>
              ) : (
                ''
              )}
              {!!img3 && !!title3 && !!text3 ? (
                <div className={styles.tab} onClick={() => setActiveTab(3)}>
                  <a href="#product-tabs-content">
                    <img
                      src={'/arquivos/' + img3}
                      alt={title3}
                      className={styles.tabImg}
                    />
                  </a>
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
        </section>
      ) : (
        ''
      )}
    </>
  )
}
