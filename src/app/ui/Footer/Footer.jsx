'use client'

import React from 'react';
import { Typography, Image } from 'antd';
import styles from './Footer.module.scss';

const { Text } = Typography;

const CustomFooter = () => {
  return (
    <div className={styles.footer}>
      <Image preview={false} src='/logoNOTP2.png' alt="" className={styles.logo} />
      <Text>© 2024 Status Partners. Все права защищены.</Text>
    </div>
  );
};

export default CustomFooter;
