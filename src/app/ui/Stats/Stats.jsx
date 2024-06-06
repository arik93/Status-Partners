'use client'

import React, { useRef, useEffect, useState } from 'react';
import { Statistic, Typography, Flex } from 'antd';
import styles from './Stats.module.scss';
import CountUp from 'react-countup';
import { useMediaQuery } from 'react-responsive';

export default function Stats() {
  const { Title } = Typography;

  const [startCount, setStartCount] = useState(false);
  const ref = useRef(null);

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

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 1224px)' });

  return (
    <div ref={ref} className={styles.statisticContainer}>
      <Title level={2} className={styles.heading}>Наша статистика:</Title>
      <Flex justify={'center'} gap={isMobileOrTablet ? 40 : 100} vertical={isMobileOrTablet ? true : false}>
        <Statistic
          title="Средний опыт наших специалистов"
          value={15}
          formatter={formatter}
          suffix=" лет"
        />
        <Statistic
          title="Выигранных дел в суде"
          value={92}
          formatter={formatter}
          suffix="%"
        />
        <Statistic
          title="Сэкономили наши клиенты"
          value={3}
          formatter={formatter}
          suffix=" млрд тг."
        />
      </Flex>
    </div>
  );
}
