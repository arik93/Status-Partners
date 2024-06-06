'use client'

import React, { useState, useEffect } from 'react';
import { Typography, Button, Image } from 'antd';
import { MenuOutlined, InstagramOutlined, WhatsAppOutlined, PhoneOutlined } from '@ant-design/icons';
import styles from './Navbar.module.scss';
import './custom.css';
import NavbarMobile from './NavbarMobile';

const { Title } = Typography;

export default function Navbar({ showMobileDrawer }) {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileOrTablet(window.innerWidth <= 1224);
    };

    handleResize(); // Инициализация состояния при монтировании компонента

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.logoWrapper}>
        <Image preview={false} src='/logoNOTP.png' alt="" className={styles.logo} />
        <Title level={1} className={styles.logoText}>STATUS PARTNERS</Title>
      </div>
      {isMobileOrTablet ? (
        <Button
          className={styles.mobileMenuButton}
          type='primary'
          icon={<MenuOutlined style={{ fontSize: '20px' }} />}
          onClick={showMobileDrawer}
        />
      ) : (
        <>
          <NavbarMobile mode="horizontal" />
          <div className={styles.contactsWrapper}>
            <p>
              <a href="https://www.instagram.com/yourcompany" target="_blank" rel="noopener noreferrer" className={styles.link}>
                <InstagramOutlined style={{ marginRight: '10px' }} />
                Instagram
              </a>
            </p>
            <p>
              <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer" className={styles.link}>
                <WhatsAppOutlined style={{ marginRight: '10px' }} />
                WhatsApp
              </a>
            </p>
            <p>
              <PhoneOutlined style={{ marginRight: '10px' }} />Телефон: +7 123 456 78 90
            </p>
          </div>
        </>
      )}
    </div>
  );
}
