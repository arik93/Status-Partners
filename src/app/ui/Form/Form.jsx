'use client'

import React from 'react';
import emailjs from 'emailjs-com';
import { Form, Input, Button, Typography, Flex, Card, Divider } from 'antd';
import { InstagramOutlined, WhatsAppOutlined, PhoneOutlined } from '@ant-design/icons';
import styles from './Form.module.scss';
import './custom.css';
import { useMediaQuery } from 'react-responsive';

export default function ContactForm() {
  const { Title } = Typography;
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    console.log('Form values:', values);
    emailjs.send('service_suj88ix', 'template_pcivh69', values, 'IHc9AHXukzVtX_u0p')
      .then((result) => {
        console.log(result.text);
        form.resetFields();
      }, (error) => {
        console.log(error.text);
      });
  };

  const isMobile = useMediaQuery({ query: '(max-width: 640px)' });

  return (
    <div className={styles.container} id='contacts'>
      <div className={styles.titleWrapper}>
        <Title level={2} className={styles.subheading}>ПОЛУЧИТЕ <span className={styles.highlight}>15 МИНУТНУЮ БЕСПЛАТНУЮ</span></Title>
        <Title level={2} className={styles.subheading}>КОНСУЛЬТАЦИЮ ПО ТЕЛЕФОНУ</Title>
      </div>
      <Card>
        <Flex justify={'center'} vertical={isMobile ? true : false} align={'center'}>
          <Form form={form} onFinish={handleSubmit} className={styles.form}>
            <div className={styles.formTitleContainer}>
              <Title level={4} className={styles.formTitle}>
                Оставьте ваш номер телефона
              </Title>
              <Title level={4} className={styles.formTitle}>
                и мы вам перезвоним
              </Title>
            </div>

            <Flex vertical={true} justify={'space-evenly'} style={{ height: '235px' }}>
              <Form.Item
                name="name"
                rules={[{ required: true, message: 'Пожалуйста, введите ваше имя!' }]}
                className={styles.label}
              >
                <Input
                  type="text"
                  placeholder='Ваше Имя'
                  className={styles.input}
                />
              </Form.Item>
              <Form.Item
                name="phone"
                rules={[{ required: true, message: 'Пожалуйста, введите ваш телефон!' }]}
                className={styles.label}
              >
                <Input
                  type="text"
                  placeholder='Ваш Телефон'
                  className={styles.input}
                />
              </Form.Item>
              <Button type="primary" htmlType="submit" className={styles.button}>
                Отправить
              </Button>
            </Flex>
          </Form>

          <Card title="Наши Контакты:" className={styles.contactsWrapper}>
            <p>Адрес: г. Алматы, ул. Достык, 123</p>
            <Divider />
            <p>
              <a href="https://www.instagram.com/yourcompany" target="_blank" rel="noopener noreferrer" className={styles.link}>
                <InstagramOutlined style={{ marginRight: '10px' }} />
                Instagram
              </a>
            </p>
            <Divider />
            <p>
              <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer" className={styles.link}>
                <WhatsAppOutlined style={{ marginRight: '10px' }} />
                WhatsApp
              </a>
            </p>
            <Divider />
            <p>
              <PhoneOutlined style={{ marginRight: '10px' }} />Телефон: +7 123 456 78 90
            </p>
          </Card>
        </Flex>
      </Card>
    </div>
  );
}
