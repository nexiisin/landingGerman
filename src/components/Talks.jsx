import { motion } from 'framer-motion';
import '../styles/talks.css';

const talks = [
  {
    title: 'Qué es vivir en propiedad horizontal',
    text: 'Principios de convivencia, corresponsabilidad y cultura comunitaria.',
  },
  {
    title: 'Ley 675 del 2001 y sus conexas aplicada a la propiedad horizontal',
    text: 'Interpretación práctica de la norma para decisiones claras y ajustadas a la ley.',
  },
  {
    title: 'Funciones de los entes que integran la propiedad horizontal',
    text: 'Rol de administradores, consejo, asamblea y comité de convivencia.',
  },
  {
    title: 'Presupuestos eficientes',
    text: 'Planeación y control financiero para una administración sostenible.',
  },
  {
    title: 'Orientación para asambleas exitosas',
    text: 'Preparación, conducción y seguimiento para reuniones más efectivas.',
  },
  {
    title: 'Manejo y recuperación de cartera',
    text: 'Estrategias para mejorar recaudo y estabilizar las finanzas de la copropiedad.',
  },
];

export default function Talks() {
  return (
    <section className="talks section" id="charlas">
      <div className="container">
        <motion.div
          className="talks__header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="section-tag">Charlas</span>
          <h2 className="section-title">Charlas y capacitaciones</h2>
          <p className="section-subtitle">
            Contenidos prácticos para fortalecer la gestión y la convivencia en propiedad horizontal.
          </p>
        </motion.div>

        <div className="talks__grid">
          {talks.map((talk, i) => (
            <motion.div
              key={i}
              className="talk-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
            >
              <span className="talk-card__number">0{i + 1}</span>
              <div className="talk-card__content">
                <h3 className="talk-card__title">{talk.title}</h3>
                <p className="talk-card__text">{talk.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
