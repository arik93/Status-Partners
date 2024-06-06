'use client'

import React, { useState } from 'react';
import { Layout, ConfigProvider, Drawer } from 'antd';
import './custom.css'
import styles from './AppLayout.module.scss';
import Navbar from '../Navbar/Navbar';
import About from '../About/About';
import AppFooter from '../Footer/Footer';
import Team from '../Team/Team';
import Form from '../Form/Form';
import FormMobile from '../Form/FormMobile';
import Stats from '../Stats/Stats';
import Services from '../Services/Services';
import NavbarMobile from '../Navbar/NavbarMobile';
import { useMediaQuery } from 'react-responsive';

export default function AppLayout() {
  const { Header, Content, Footer } = Layout;

  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 1224px)' });

  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const showMobileDrawer = () => setIsDrawerVisible(true);
  const closeMobileDrawer = () => setIsDrawerVisible(false);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorTextBase: "#ECF0F1"
        },
        components: {
          Menu: {
            itemBg: "#474b4f",
            subMenuItemBg: "rgba(0, 0, 0, 0)",
            itemColor: "#ECF0F1",
            itemHoverColor: "#ECF0F1",
            colorPrimary: "#86C232",
            popupBg: "#474b4f",
            fontSize: 16,
          },
          Typography: {
            colorTextHeading: "#ECF0F1",
            colorText: "#ECF0F1"
          },
          Button: {
            colorPrimaryHover: "#61892f",
            colorPrimaryActive: "#61892f",
            colorPrimary: "#86C232",
            primaryShadow: "0 2px 0 rgba(34, 38, 41, 0)"
          },
          Card: {
            colorBgContainer: "#222629",
            colorBorderSecondary: "#222629",
            boxShadowCard: "0px 0px 0px 0px rgba(236, 240, 241, 0)",
            colorText: "#ECF0F1",
            colorTextHeading: "#ECF0F1"
          },
          Collapse: {
            contentBg: "#222629",
            colorBorder: "#61892F",
            colorTextHeading: "#ECF0F1",
            headerBg: "rgba(34, 38, 41, 0.08)"
          },
          Modal: {
            contentBg: "#222629"
          },
          Tabs: {
            itemActiveColor: "#61892F",
            itemHoverColor: "#61892F",
            itemSelectedColor: "#86C232",
            inkBarColor: "#86C232",
            itemColor: "#ECF0F1"
          },
          Form: {
            labelColor: "#ECF0F1"
          },
          Divider: {
            colorSplit: "#86C232"
          },
          Drawer: {
            colorBgElevated: "#474b4f"
          },
          Statistic: {
            colorTextDescription: "#ECF0F1"
          }
        }
      }}
    >
      <Layout className={styles.layout}>
        {isMobileOrTablet && (
          <Drawer
            // title="Боковая панель"
            placement="right"
            closable={true}
            onClose={closeMobileDrawer}
            visible={isDrawerVisible}
            width={"90%"}
          >
            <NavbarMobile mode="vertical" closeMobileDrawer={closeMobileDrawer} />
            <FormMobile closeMobileDrawer={closeMobileDrawer} />
          </Drawer>
        )}

        <Layout className={styles.layout}>
          <Header className={styles.header}>
            <Navbar showMobileDrawer={showMobileDrawer} />
          </Header>

          <Content className={styles.content}>
            <About />
            <Stats />
            <Team />
            <Services />
            <Form />
          </Content>

          <Footer className={styles.footer}>
            <AppFooter />
          </Footer>
        </Layout>
      </Layout>
    </ConfigProvider>
  )
}
