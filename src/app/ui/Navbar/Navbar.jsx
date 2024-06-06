'use client'

import React from 'react';
import { Typography, Button } from 'antd';
import { MenuOutlined, InstagramOutlined, WhatsAppOutlined, PhoneOutlined } from '@ant-design/icons';
import styles from './Navbar.module.scss';
import './custom.css';
import { useMediaQuery } from 'react-responsive';
import NavbarMobile from './NavbarMobile';

const { Title } = Typography;

export default function Navbar({ showMobileDrawer }) {
  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 1224px)' });

  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.logoWrapper}>
        <img src='/logoNOTP.png' alt="Logo" className={styles.logo} />
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
