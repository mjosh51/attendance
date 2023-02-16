import React, { useState } from 'react';
import BigCardsUI from './bigcards';
import BannerUI from './banner';
import CardsUI from './cards';
import styles from './styles.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <BannerUI />
      <CardsUI />
      <BigCardsUI />
    </div>
  );
}
