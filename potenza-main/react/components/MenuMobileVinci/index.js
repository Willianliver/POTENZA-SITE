import React from 'react'
import { canUseDOM } from 'vtex.render-runtime'
// import { Spinner } from 'vtex.styleguide'
import { useState, useEffect } from 'react'
import { Drawer, DrawerHeader, DrawerCloseButton } from 'vtex.store-drawer'
import styles from './style.css'
// import categorias from '../Categorias';

import axios from 'axios'

export default function MenuMobileVinci() {
  const [categories, setCategories] = useState([])

  // useEffect(() => {
  //   fetch("/api/catalog_system/pub/category/tree/4")
  //     .then(response => response.json())
  //     .then(data => {
  //       // data.unshift({
  //       //   name: "Novidades",
  //       //   url: "/140?map=productClusterIds"
  //       // });
  //       setCategories(data)
  //     })
  // }, []);

  useEffect(() => {
    axios
      .get('/api/catalog_system/pub/category/tree/4')
      .then(function (response) {
        // response.data.shift();
        // setCategories(response.data);
        const categories = response.data.find((item) => item.name === 'Potenza')
        setCategories(categories.children)
      })
  }, [])

  if (canUseDOM) {
    return (
      <Drawer
        header={
          <DrawerHeader>
            <DrawerCloseButton />
          </DrawerHeader>
        }
      >
        <ul className={styles.ul}>
          {categories.map((category, index) => {
            return (
              <li key={index}>
                <a href={category.url}>{category.name}</a>
              </li>
            )
          })}
        </ul>
      </Drawer>
    )
  } else {
    return <div></div>
  }
}
