import { Col, Layout, Row } from 'antd';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import React, { useState } from 'react';
import BigCardsUI from './bigcards';
import BannerUI from './banner';
import CardsUI from './cards';
// import GraphsUI from './graphs';
import styles from './styles.module.css';

const GraphsUI = dynamic(() => import('./graphs'), {
  ssr: false,
});

export default function Home() {
  return (
    <div className={styles.container}>
      <BannerUI />
      <CardsUI />
      <BigCardsUI />
      <GraphsUI />
    </div>
  );
}
