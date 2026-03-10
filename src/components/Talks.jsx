import { motion } from 'framer-motion';
import '../styles/talks.css';

const talks = [
  {
    title: 'Buenas prácticas en propiedad horizontal',
    text: 'Fundamentos y estándares para una gestión administrativa eficiente y transparente.',
  },
  {
    title: 'Funciones del consejo de administración',
    text: 'Roles, responsabilidades y mejores prácticas para los miembros del consejo.',
  },
  {
    title: 'Gestión administrativa responsable',
    text: 'Herramientas y metodologías para una administración profesional y ética.',
  },
  {
    title: 'Resolución de conflictos en comunidades',
    text: 'Estrategias de mediación y convivencia para fortalecer la comunidad.',
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
            Formación especializada para administradores, juntas y comunidades.
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
