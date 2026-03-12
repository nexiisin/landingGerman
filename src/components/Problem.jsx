import { motion } from 'framer-motion';
import '../styles/problem.css';

const problems = [
  { icon: '🤝', text: 'Dificultades entre residentes, consejo y administración' },
  { icon: '📘', text: 'Falta de conocimiento en propiedad horizontal' },
  { icon: '🔍', text: 'Falta de transparencia en la gestión' },
  { icon: '⚖️', text: 'Conflictos entre actores de la propiedad horizontal' },
  { icon: '💳', text: 'Problemas de cartera y recaudo' },
];

export default function Problem() {
  return (
    <section className="problem section" id="problemas">
      <div className="container">
        <motion.div
          className="problem__header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="section-tag">El Problema</span>
          <h2 className="section-title">Problemas comunes en la<br />gestión de copropiedades</h2>
          <p className="problem__subtitle">
            En muchas copropiedades surgen dificultades entre residentes, consejo y
            administración: falta de conocimiento, baja transparencia y conflictos
            que afectan la convivencia y la estabilidad de la copropiedad.
          </p>
        </motion.div>

        <div className="problem__grid">
          <div className="problem__cards">
            {problems.map((p, i) => (
              <motion.div
                key={i}
                className="problem__card"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
              >
                <div className="problem__card-icon">{p.icon}</div>
                <span className="problem__card-text">{p.text}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="problem__content"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            <h3 className="problem__content-title">
              ¿Tu copropiedad está enfrentando alguno de estos problemas?
            </h3>
            <p className="problem__content-text">
              La gestión ineficiente de una propiedad horizontal no solo genera conflictos
              entre residentes, sino que también puede derivar en pérdidas económicas,
              deterioro de la infraestructura y pérdida de confianza en la administración.
              Con una intervención profesional a tiempo, es posible revertir esta situación
              y recuperar la estabilidad de la copropiedad.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
