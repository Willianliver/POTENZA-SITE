import React from 'react'
import styles from './style.css'

const CustomHighlights = () => {
  const destaques = [
    { id: 1, titulo: 'Produtos', imagem: 'https://potenza.vtexassets.com/assets/vtex.file-manager-graphql/images/4628a06b-d0af-4ff8-a447-1fa67db1e9b7___a312caab6d0daa7d94044024e703c2a0.png',link: 'https://www.potenzabrasil.com.br/serum_facial/p' },
    { id: 2, titulo: 'Promoções', imagem: '/arquivos/promocoes.png' },
    { id: 3, titulo: 'Contato', imagem: '/arquivos/contato.png' },
  ]

  return (
    <div className={styles.highlightsContainer}>
      {destaques.map((destaque) => (
        <div key={destaque.id} className={styles.highlightItem}>
          <div className={styles.highlightCircle}>
            <img src={destaque.imagem} alt={destaque.titulo} />
          </div>
          <span className={styles.highlightTitle}>{destaque.titulo}</span>
        </div>
      ))}
    </div>
  )
}

export default CustomHighlights
