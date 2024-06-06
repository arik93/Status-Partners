'use client'

import React from 'react';
import emailjs from 'emailjs-com';
import { Form, Input, Button, Typography, Flex } from 'antd';
import styles from './Form.module.scss';
import './custom.css';

export default function FormMobile(props) {
  const {
    closeMobileDrawer
  } = props;

  const { Title } = Typography;
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    console.log('Form values:', values);
    emailjs.send('service_suj88ix', 'template_pcivh69', values, 'IHc9AHXukzVtX_u0p')
      .then((result) => {
        console.log(result.text);
        form.resetFields();
        closeMobileDrawer();
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div>
      <div className={styles.titleWrapper}>
        <Title level={4} className={styles.subheading}>ПОЛУЧИТЕ <span className={styles.highlight}>15 МИНУТНУЮ БЕСПЛАТНУЮ</span></Title>
        <Title level={4} className={styles.subheading}>КОНСУЛЬТАЦИЮ ПО ТЕЛЕФОНУ</Title>
      </div>
      <Flex justify={'center'}>
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
      </Flex>
    </div>
  )
}
