import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './style.css';

const CustomHighlights = () => {
  const [categories, setCategories] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  const categoryImages = {
    Cosméticos: 'https://tfdjho.vtexassets.com/arquivos/ids/160308',
    Suplementos: '/path/to/suplementos.png',
    Nutrição: '/path/to/nutricao.png',
    Joias: '/path/to/joias.png',
  };

  const itemsPerPage = isMobile ? 4 : categories.length;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    axios
      .get('/api/catalog_system/pub/category/tree/4')
      .then((response) => {
        const categoryData = response.data.find((item) => item.name === 'Potenza');
        if (categoryData && categoryData.children) {
          setCategories(categoryData.children);
        }
      })
      .catch((error) => {
        console.error('Erro ao buscar categorias:', error);
      });
  }, []);

  const infiniteCategories = isMobile ? [...categories, ...categories] : categories;
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

  const visibleCategories = infiniteCategories.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className={styles.carouselContainer}>
      {isMobile && (
        <button className={styles.navButton} onClick={prevSlide}>
          ◀
        </button>
      )}
      <div className={styles.highlightsWrapper}>
        {(isMobile ? visibleCategories : categories).map((category, index) => (
          <div key={index} className={styles.highlightItem}>
            <a href={category.url} className={styles.highlightCircle}>
              <img
                src={categoryImages[category.name] || '/path/to/default.png'}
                alt={category.name}
              />
            </a>
            <span className={styles.highlightTitle}>{category.name}</span>
          </div>
        ))}
      </div>
      {isMobile && (
        <button className={styles.navButton} onClick={nextSlide}>
          ▶
        </button>
      )}
    </div>
  );
};

export default CustomHighlights;
