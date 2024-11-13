import React from 'react'

import styles from './style.css'

import DoseDiaria from './DoseDiaria/index.jsx'
import Especificacoes from './Especificacoes/index.jsx'
import TabsContext from './TabsContext/index.jsx'
import Beneficios from './Beneficios/index.jsx'

export default function ProductCustomProperties() {
  return (
    <>
      <div className={styles.propertiesContainer}>
        <Especificacoes />
        <DoseDiaria />

        <TabsContext />

        <Beneficios />
      </div>
    </>
  )
}
