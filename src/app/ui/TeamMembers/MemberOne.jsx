'use client'

import React, { useState } from "react";
import { Button, Modal, Tabs } from 'antd';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/scale-out-animation.css';
import './custom.css';
import styles from './TeamMembers.module.scss';

export default function MemberOne() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <div>
      <div
        className={styles.sliderContainer}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AutoplaySlider
          play={isHovered}
          cancelOnInteraction={true}
          interval={2000}
          bullets={false}
          organicArrows={false}
          animation="scaleOutAnimation"
        >
          <div
            style={{
              width: '100%',
              backgroundImage: 'url("/lawyer.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div
            style={{
              width: '100%',
              backgroundImage: 'url("/lawyer2.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div
            style={{
              width: '100%',
              backgroundImage: 'url("/lawyer3.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        </AutoplaySlider>
        <Button className={styles.button} type="primary" onClick={showModal}>
          Подробнее
        </Button>
      </div>


      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <video width="100%" controls style={{marginTop: "30px"}}>
          <source src="movie.mp4" type="video/mp4" />
          <source src="movie.ogg" type="video/ogg" />
          Your browser does not support the video tag.
        </video>
        <Tabs
          className={styles.tabs}
          centered
          items={[
            {
              label: `Экспертиза`,
              key: 1,
              children:
                <div className={styles.category}>
                  <div className={styles.categoryTitle}>Юридическая экспертиза и образование</div>
                  <div className={styles.categoryContent}>
                    <ul className={styles.list}>
                      <li className={styles.listItem}>Глубокие знания в различных областях права: гражданское, уголовное, административное, корпоративное право и другие специализации.</li>
                      <li className={styles.listItem}>Образование и квалификация: наличие юридического образования, дополнительных курсов и сертификатов, повышение квалификации.</li>
                      <li className={styles.listItem}>Понимание правовых систем и процедур: знание местных и международных правовых систем, судебных процедур и законодательных актов.</li>
                    </ul>
                  </div>
                </div>
            },
            {
              label: `Опыт работы`,
              key: 2,
              children:
                <div className={styles.category}>
                  <div className={styles.categoryTitle}>Практические навыки и опыт работы</div>
                  <div className={styles.categoryContent}>
                    <ul className={styles.list}>
                      <li className={styles.listItem}>Опыт работы: количество лет работы в юридической сфере, работа в юридических фирмах, государственном секторе или частной практике.</li>
                      <li className={styles.listItem}>Опыт в судебных разбирательствах: участие в судебных процессах, знание процедур и стратегий ведения дела в суде.</li>
                      <li className={styles.listItem}>Практические навыки ведения дел: составление юридических документов, договоров, представительство интересов клиентов в суде и других инстанциях.</li>
                    </ul>
                  </div>
                </div>
            },
            {
              label: `Навыки`,
              key: 3,
              children:
                <div className={styles.category}>
                  <div className={styles.categoryTitle}>Аналитические и коммуникативные навыки</div>
                  <div className={styles.categoryContent}>
                    <ul className={styles.list}>
                      <li className={styles.listItem}>Аналитические способности: умение анализировать сложные юридические вопросы, интерпретировать законы и судебные решения, находить оптимальные решения.</li>
                      <li className={styles.listItem}>Письменные навыки: способность ясно и логично излагать мысли в юридических документах, заключениях, отчетах и письмах.</li>
                      <li className={styles.listItem}>Устные коммуникативные навыки: умение четко и убедительно выражать свои мысли устно, вести переговоры, представлять аргументы в суде и на переговорах.</li>
                    </ul>
                  </div>
                </div>
            }
          ]}
        />
      </Modal>
    </div>
  );
}
