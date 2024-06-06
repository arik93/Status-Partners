'use client'

import React from 'react';
import { Card, Typography } from "antd";
import styles from './Team.module.scss';
import './custom.css';
import MemberOne from '../TeamMembers/MemberOne';

const { Title } = Typography;

const Team = () => {
  return (
    <div id='team'>
      <Title level={2} className={styles.subheading}>Наша команда:</Title>
      <Card>
        <Card.Grid className={styles.cardGridWrapper}>
          <Title level={3}>Name Surname</Title>
          <MemberOne />
        </Card.Grid>
        <Card.Grid className={styles.cardGridWrapper}>
          <Title level={3}>Name Surname</Title>
          <MemberOne />
        </Card.Grid>
        <Card.Grid className={styles.cardGridWrapper}>
          <Title level={3}>Name Surname</Title>
          <MemberOne />
        </Card.Grid>
        <Card.Grid className={styles.cardGridWrapper}>
          <Title level={3}>Name Surname</Title>
          <MemberOne />
        </Card.Grid>
        <Card.Grid className={styles.cardGridWrapper}>
          <Title level={3}>Name Surname</Title>
          <MemberOne />
        </Card.Grid>
        <Card.Grid className={styles.cardGridWrapper}>
          <Title level={3}>Name Surname</Title>
          <MemberOne />
        </Card.Grid>
        <Card.Grid className={styles.cardGridWrapper}>
          <Title level={3}>Name Surname</Title>
          <MemberOne />
        </Card.Grid>
        <Card.Grid className={styles.cardGridWrapper}>
          <Title level={3}>Name Surname</Title>
          <MemberOne />
        </Card.Grid>
      </Card>
    </div>
  )
};

export default Team;
