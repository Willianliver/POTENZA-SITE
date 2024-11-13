import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { canUseDOM } from 'vtex.render-runtime'

import styles from './style.css'

import Tabs from '../Tabs/index.jsx'
import TabelaNutricional from '../TabelaNutricional/index.jsx'
import Ingredientes from '../Ingredientes/index.jsx'
import TabsContent from '../TabsContent/index.jsx'

export default function TabsContext() {
  let [activeTab, setActiveTab] = useState(1)
  const setTab = (tab) => {
    setActiveTab(tab)
    /* document.querySelector('#product-tabs-content').scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'}) */
  }

  return (
    <>
      <div className={styles.tabsContext}>
        <Tabs setActiveTab={setTab} />
        <TabelaNutricional />
        <Ingredientes />
        <TabsContent activeTab={activeTab} />
      </div>
    </>
  )
}
