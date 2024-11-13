import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { canUseDOM } from 'vtex.render-runtime'

export default function MobileThumbs() {
  useEffect(() => {
    function fixThumbs() {
      const swiperThumbs = document.querySelector(
        '.swiper-container-thumbs'
      )?.swiper
      if (swiperThumbs) {
        if (window.innerWidth <= 640) {
          swiperThumbs.params.slidesPerView = 4
          swiperThumbs?.changeDirection('horizontal')
        }
        swiperThumbs.on('resize', () => {
          if (window.innerWidth <= 640) {
            swiperThumbs.params.slidesPerView = 4
            swiperThumbs?.changeDirection('horizontal')
          }

          if (window.innerWidth > 640) {
            swiperThumbs.params.slidesPerView = 'auto'
            swiperThumbs?.changeDirection('vertical')
          }
        })
      } else {
        setTimeout(fixThumbs, 300)
      }
    }
    if (canUseDOM) {
      fixThumbs()
    }
    return () => {}
  }, [])

  return <></>
}
