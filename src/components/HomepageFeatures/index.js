import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

import img1 from '@site/static/img/cell.png';
import img2 from '@site/static/img/cell1.png';
import img3 from '@site/static/img/cell2.png';

const FeatureList = [
  {
    title: 'Fácil de Usar',
    img: img1,
    description: (
      <>
        As ferramentas ideais para consultores Claro.
      </>
    ),
  },
  {
    title: 'Rotas Organizadas',
    img: img2,
    description: (
      <>
        Suas rotas organizadas e georreferenciadas em um só lugar.
      </>
    ),
  },
  {
    title: 'Resultados em Tempo Real',
    img: img3,
    description: (
      <>
        Acompanhe seus resultados em tempo real e melhore sua performance.
      </>
    ),
  },
];

function Feature({img, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <div className={styles.imageContainer}>
          <img src={img} alt={title} className={styles.featureSvg} />
        </div>
        <div className={styles.textContent}>
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
