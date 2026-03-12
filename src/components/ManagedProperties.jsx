import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/managed-properties.css';
import alejandriaImg from '../imgs/alejandria.png';
import ciudadTintalImg from '../imgs/ciudad tintal.png';
import floridaSabanaImg from '../imgs/floridadelasabana.png';
import gualiImg from '../imgs/guali1.png';
import morayImg from '../imgs/moray.png';
import parqueRecodoImg from '../imgs/parquedelrecodo.png';
import petrelImg from '../imgs/petrel.png';
import praderasImg from '../imgs/praderas4.png';
import sanSebastianImg from '../imgs/sansebastian.png';
import trebolImg from '../imgs/trebol7.png';

const properties = [
      {
    name: 'CR- ALTOS DEL GUALI ETAPA 1',
        image: gualiImg,
    details: [
      '160 Unidades Habitacionales (casas) 1 Local Comercial',
      'Calle 13 N° 2-163 Funza-Cundinamarca',
      'Periodo 17-7-2023',
      'Administrando Actualmente',
    ],
  },
  {
    name: 'CR. SAN SEBASTIAN',
    image: sanSebastianImg,
    details: [
      '38 Unidades Habitacionales (casas)',
      'Carrera 2B N°- 16-01 Funza-Cundinamarca',
      'Periodo 15-7-2025',
      'Administrando Actualmente',
    ],
  },
  {
    name: 'CR- EL TREBOL MANZANA 7',
    image: trebolImg,
    details: [
      '230 Unidades Habitacionales (casas) 3 Locales Comerc.',
      'Calle 10 N° 4 e 23 Sector el Trébol-Mosquera-Cundin.',
      'Periodo 01-9-2021',
      'Administrando Actualmente',
    ],
  },
  {
    name: 'CR- CIUDAD TINTAL MANZANA 12',
    image: ciudadTintalImg,
    details: [
      '140 Unidades Habitacionales (casas)',
      'Sector el Tintal-Bogotá',
      'Periodo 1-4-2012 / 15-3-2013 (11 meses)',
      'Terminación de Contrato',
    ],
  },
  {
    name: 'CR- PRADERAS DE FONTIBON ETAPA 4',
    image: praderasImg,
    details: [
      '364 Unidades Habit. (casas) y 12 Locales Comerciales',
      'Carrera 123 N° - 13 d 47 Fontibón-Recodo-Bogotá',
      'Periodo 14-4-2013 / 31-3-2018 (5 años)',
      'Retiro Voluntario',
    ],
  },
  {
    name: 'CR- PARQUE DEL RECODO',
    image: parqueRecodoImg,
    details: [
      '180 Unidades Habitacionales (casas)',
      'Calle 14b N°- 116-69 Fontibón-Recodo-Bogotá',
      'Periodo 1-4-2015 / 31-3-2018 (3 años)',
      'Terminación de Contrato',
    ],
  },
  {
    name: 'CR- CIUDADELA FLORIDA DE LA SABANA ETAPA 1',
    image: floridaSabanaImg,
    details: [
      '255 Unidades Habit. (casas) y 28 Locales Comerciales',
      'Diagonal 77 N° - 120 a 68 Bogotá',
      'Periodo 1-5-2018 / 3-5-2020 (2 años)',
      'Terminación de Contrato',
    ],
  },
  {
    name: 'CR- ALEJANDRIA REAL 2',
    image: alejandriaImg,
    details: [
      '96 Unidades Habitacionales (apart. 6 torres)',
      'Calle 7 N°- 4 a 98 Mosquera-Cundinamarca',
      'Periodo 01-3-2018 / 31-5-2020 (2 años 2 meses)',
      'Retiro Voluntario',
    ],
  },
  {
    name: 'CR- MORAY',
    image: morayImg,
    details: [
      '180 Unidades Habitacionales (apartamentos 9 torres)',
      'Carrera 24 N°- 10-98 Funza-Cundinamarca',
      'Periodo 20-1-2023 / 30-4-2024 (1 año 3 meses)',
      'Terminación de Contrato',
    ],
  },
  {
    name: 'CR- PETREL P.H.',
    image: petrelImg,
    details: [
      '740 Unidades Habitacionales (apartam. 30 torres y 1 Local Comercial y 1 Guardería)',
      'Calle 23 N°- 19 a 41 Mosquera-Cundinamarca',
      'Periodo 01-5-2023 / 31-3-2024 (11 meses)',
      'Retiro Voluntario',
    ],
  },
];

const INITIAL_VISIBLE = 4;

export default function ManagedProperties() {
  const [expanded, setExpanded] = useState(false);

  const visibleProperties = useMemo(
    () => (expanded ? properties : properties.slice(0, INITIAL_VISIBLE)),
    [expanded]
  );

  return (
    <section className="managed-properties section" id="copropiedades-a-cargo">
      <div className="container">
        <motion.div
          className="managed-properties__header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="section-tag">Copropiedades administradas</span>
          <h2 className="section-title">Copropiedades administradas y actuales</h2>
          <p className="section-subtitle">
            Historial de administración con detalle de unidades, ubicación y periodos.
          </p>
        </motion.div>

        <div className="managed-properties__grid">
          {visibleProperties.map((property, index) => (
            <motion.article
              key={property.name}
              className="managed-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: (index % INITIAL_VISIBLE) * 0.08, ease: 'easeOut' }}
            >
              <div className="managed-card__media">
                <img src={property.image} alt={property.name} className="managed-card__image" loading="lazy" />
              </div>
              <h3 className="managed-card__title">{property.name}</h3>
              <ul className="managed-card__list">
                {property.details.map((detail) => (
                  <li
                    key={`${property.name}-${detail}`}
                    className={`managed-card__item${detail === 'Administrando Actualmente' ? ' is-current' : ''}`}
                  >
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <div className="managed-properties__actions">
          <button
            type="button"
            className="managed-properties__toggle"
            onClick={() => setExpanded((prev) => !prev)}
          >
            {expanded ? 'Ver menos' : 'Ver más'}
          </button>
        </div>
      </div>
    </section>
  );
}
