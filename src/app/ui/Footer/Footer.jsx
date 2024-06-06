'use client'

import React from 'react';
import { Typography } from 'antd';
import { InstagramOutlined, WhatsAppOutlined, MailOutlined } from '@ant-design/icons';
import styles from './Footer.module.scss';

const { Text } = Typography;

const CustomFooter = () => {
  return (
    <div className={styles.footer}>
      <img src='/logoNOTP2.png' alt="Logo" className={styles.logo} />
      {/* <div className={styles.footerLinks}>
          <a href="https://www.instagram.com/yourcompany" className={styles.footerLink} target="_blank" rel="noopener noreferrer">
            <InstagramOutlined /> Instagram
          </a>
          <a href="https://wa.me/yourphonenumber" className={styles.footerLink} target="_blank" rel="noopener noreferrer">
            <WhatsAppOutlined /> WhatsApp
          </a>
          <a href="mailto:info@statuspartners.kz" className={styles.footerLink}>
            <MailOutlined /> Электронная почта
          </a>
        </div> */}
      <Text>© 2024 Status Partners. Все права защищены.</Text>
    </div>
  );
};

export default CustomFooter;
