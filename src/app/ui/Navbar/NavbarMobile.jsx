'use client'

import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-scroll';
import { InfoCircleOutlined, TeamOutlined, PhoneOutlined } from '@ant-design/icons';
import styles from './Navbar.module.scss';

const NavbarMobile = (props) => {
  const {
    mode,
    closeMobileDrawer
  } = props;

  const items = [
    {
      label: (
        <Link to="about" smooth={true} duration={500} offset={-115} className={styles.menuItemsText} onClick={closeMobileDrawer}>
          О компании
        </Link>
      ),
      key: 'about',
      icon: <InfoCircleOutlined />,
    },
    {
      label: (
        <Link to="team" smooth={true} duration={500} offset={-100} className={styles.menuItemsText} onClick={closeMobileDrawer}>
          Наша команда
        </Link>
      ),
      key: 'team',
      icon: <TeamOutlined />,
    },
    {
      label: (
        <Link to="contacts" smooth={true} duration={500} offset={-100} className={styles.menuItemsText} onClick={closeMobileDrawer}>
          Контакты
        </Link>
      ),
      key: 'contacts',
      icon: <PhoneOutlined />,
    }
  ];

  return <Menu mode={mode} items={items} className={styles.navbar} />;
};

export default NavbarMobile;
