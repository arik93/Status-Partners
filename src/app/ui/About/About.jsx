'use client'

import React from 'react';
import { Typography, Card, Flex, Divider, Image } from 'antd';
import styles from './About.module.scss';
import { useMediaQuery } from 'react-responsive';

const About = () => {
  const { Title, Paragraph } = Typography;

  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 1224px)' });

  return (
    <div className={styles.container} id='about'>
      <Title level={1} className={styles.heading}>О компании Status Partners</Title>

      <Flex justify={'center'} gap={70} align={'center'} style={{ marginBottom: '48px' }} vertical={isMobileOrTablet ? true : false} className={styles.flexVideoContent}>
        <div className={styles.textContent}>
          <Paragraph className={styles.paragraph}>
            Адвокатская компания Status Partners - это профессиональная юридическая фирма, предоставляющая широкий спектр услуг в области права. Наша команда состоит из опытных адвокатов и юристов, которые готовы помочь вам в решении любых юридических вопросов.
          </Paragraph>
          <Paragraph className={styles.paragraph}>
            Мы специализируемся на гражданском, уголовном, административном праве, а также оказываем консультационные услуги для бизнеса. Наши клиенты могут рассчитывать на индивидуальный подход, профессионализм и конфиденциальность.
          </Paragraph>
          <Paragraph className={styles.paragraph}>
            Мы гордимся нашим многолетним опытом и успешной практикой. Наша цель - предоставить нашим клиентам высококачественные юридические услуги, защищая их интересы и обеспечивая справедливость.
          </Paragraph>
        </div>
        <video width={isMobileOrTablet ? '100%' : '50%'} controls>
          <source src="movie.mp4" type="video/mp4" />
          <source src="movie.ogg" type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </Flex>

      <Divider />

      <Flex justify={isMobileOrTablet ? 'center' : 'space-around'} align={isMobileOrTablet ? 'center' : 'null'} vertical={isMobileOrTablet ? true : false}>
        <Card className={styles.cardWrapper}>
          <Image preview={false} src="/lawyer4.png" alt="" width={'100%'} />
          <div className={styles.cardTitleContainer}>
            <Title level={5} className={styles.cardTitle}>Основатель компании</Title>
            <Title level={5} className={styles.cardTitle}>Шведова Светлана Александровна</Title>
          </div>
          <Divider />
          <ul className={styles.customListItemContainer}>
            <li className={styles.customListItem}>В 1999 г. Окончила Санкт-Петербургский Гуманитарный Университет Профсоюзов</li>
            <li className={styles.customListItem}>Членство в Алматинской городской коллегии адвокатов с 2012 года</li>
            <li className={styles.customListItem}>Лицензия на занятие адвокатской деятельностью №0001801 от 21.02.2008 года</li>
            <li className={styles.customListItem}>Орден &quot;СЛАВА КАЗАХСТАНА&quot; Удостоверение № 01518 от 30 января 2014 года</li>
            <li className={styles.customListItem}>Учредитель компании ТОО Мастер Права</li>
            <li className={styles.customListItem}>Общий стаж адвокатской практики 30 лет</li>
          </ul>
          <Paragraph style={{ marginTop: '1em' }}>
            &quot;Юриспруденция – это дело всей моей жизни, потому что помогать людям – это то, что я считаю своей миссией&quot;. © С.А. Шведова
          </Paragraph>
        </Card>

        <Card className={styles.cardWrapper}>
          <Image preview={false} src="/lawyer4.png" alt="" width={'100%'} />
          <div className={styles.cardTitleContainer}>
            <Title level={5} className={styles.cardTitle}>Наша команда -</Title>
            <Title level={5} className={styles.cardTitle}>представители траблшутеров (trouble shooter)</Title>
          </div>
          <Divider />
          <Paragraph>
            Основополагающие принципы нашей работы – это комплексный подход к задаче:
          </Paragraph>
          <ul className={styles.customListItemContainer}>
            <li className={styles.customListItem}>Мы всегда ищем и находим возможности</li>
            <li className={styles.customListItem}>Предлагаем нестандартные ходы и решения законными правовыми средствами</li>
            <li className={styles.customListItem}>Устанавливаем и соблюдаем адекватные сроки</li>
            <li className={styles.customListItem}>Видим и обозначаем правовые, финансовые, репутационные риски</li>
            <li className={styles.customListItem}>Предлагаем способы минимизации рисков законными способами</li>
            <li className={styles.customListItem}>В судебных делах всегда &quot;бьемся до победного&quot;</li>
          </ul>
          <Paragraph style={{ marginTop: '1em' }}>
            По мнению наших клиентов, мы на 100% оправдываем свое название Мастер права
          </Paragraph>
        </Card>

        <Card className={styles.cardWrapper}>
          <Image preview={false} src="/lawyer4.png" alt="" width={'100%'} />
          <div className={styles.cardTitleContainer}>
            <Title level={5} className={styles.cardTitle}>Области права, в которых мы имеем опыт</Title>
          </div>
          <Divider />
          <Paragraph>
            Один юрист в штате не может быть специалистом во всех юридических областях.
          </Paragraph>
          <Paragraph>
            Наша команда юристов успешно ведет практику в востребованных областях юриспруденции:
          </Paragraph>
          <ul className={styles.customListItemContainer}>
            <li className={styles.customListItem}>трудовое право</li>
            <li className={styles.customListItem}>договорное право</li>
            <li className={styles.customListItem}>корпоративные споры</li>
            <li className={styles.customListItem}>земельные, страховые, экономические, хозяйственные споры и др.</li>
            <li className={styles.customListItem}>банкротство/ликвидация юр. лиц</li>
            <li className={styles.customListItem}>судебное делопроизводство</li>
            <li className={styles.customListItem}>индивидуальный комплекс услуг</li>
          </ul>
        </Card>
      </Flex>
    </div>
  );
};

export default About;
