import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './style.css';

const CustomHighlights = () => {
  const [categories, setCategories] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  const categoryImages = {
    Cosméticos: 'https://potenza.vtexassets.com/assets/vtex.file-manager-graphql/images/4628a06b-d0af-4ff8-a447-1fa67db1e9b7___a312caab6d0daa7d94044024e703c2a0.png',
    Suplementos: '/path/to/suplementos.png',
    Nutrição: '/path/to/nutricao.png',
    Joias: '/path/to/joias.png',
  };

  const itemsPerPage = isMobile ? 4 : categories.length; // Mobile: 2 itens; Desktop: mostra tudo.

  // Atualiza o estado `isMobile` com base no tamanho da tela.
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Busca as subcategorias da categoria "Potenza".
  useEffect(() => {
    axios
      .get('/api/catalog_system/pub/category/tree/4')
      .then((response) => {
        const categoryData = response.data.find((item) => item.name === 'Potenza')
        setCategories(categoryData.children)
      })
  }, [])

  // Adiciona categorias duplicadas para o efeito infinito no mobile.
  const infiniteCategories = isMobile
    ? [...categories, ...categories]
    : categories;

  // Define a posição inicial do carrossel.
  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    setStartIndex((prevIndex) =>
      prevIndex + itemsPerPage >= infiniteCategories.length
        ? 0
        : prevIndex + itemsPerPage
    );
  };

  const prevSlide = () => {
    setStartIndex((prevIndex) =>
      prevIndex - itemsPerPage < 0
        ? infiniteCategories.length - itemsPerPage
        : prevIndex - itemsPerPage
    );
  };

  // Obtém as categorias visíveis no carrossel (apenas no mobile).
  const visibleCategories = infiniteCategories.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className={styles.carouselContainer}>
      {/* Setas aparecem SOMENTE no mobile */}
      {isMobile && (
        <button className={styles.navButton} onClick={prevSlide}>
          ◀
        </button>
      )}
      <div className={styles.highlightsWrapper}>
        {(isMobile ? visibleCategories : categories).map((category, index) => (
          <div key={index} className={styles.highlightItem}>
            <div className={styles.highlightCircle}>
              <img
                src={categoryImages[category.name] || '/path/to/default.png'}
                alt={category.name}
              />
            </div>
            <span className={styles.highlightTitle}>{category.name}</span>
          </div>
        ))}
      </div>
      {/* Setas aparecem SOMENTE no mobile */}
      {isMobile && (
        <button className={styles.navButton} onClick={nextSlide}>
          ▶
        </button>
      )}
    </div>
  );
};

export default CustomHighlights;
