'use client'

import React, { useRef, useEffect, useState } from 'react';
import { Statistic, Typography, Row, Col } from 'antd';
import styles from './Stats.module.scss';
import CountUp from 'react-countup';

export default function Stats() {
  const { Title } = Typography;

  const [startCount, setStartCount] = useState(false);
  const ref = useRef(null);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  const formatter = (value) => <CountUp end={value} start={startCount ? 0 : value} duration={3} separator="," />;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileOrTablet(window.innerWidth <= 1224);
    };

    handleResize(); // Initialize the state based on the current window width

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div ref={ref} className={styles.statisticContainer}>
      <Title level={2} className={styles.heading}>Наша статистика:</Title>
      <Row gutter={isMobileOrTablet ? [0, 40] : [100, 0]} align="middle" justify="center">
        <Col span={isMobileOrTablet ? 24 : 8}>
          <Statistic
            title="Средний опыт наших специалистов"
            value={15}
            formatter={formatter}
            suffix=" лет"
          />
        </Col>
        <Col span={isMobileOrTablet ? 24 : 8}>
          <Statistic
            title="Выигранных дел в суде"
            value={92}
            formatter={formatter}
            suffix="%"
          />
        </Col>
        <Col span={isMobileOrTablet ? 24 : 8}>
          <Statistic
            title="Сэкономили наши клиенты"
            value={3}
            formatter={formatter}
            suffix=" млрд тг."
          />
        </Col>
      </Row>
    </div>
  );
}
