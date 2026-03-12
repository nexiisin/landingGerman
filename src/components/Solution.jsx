import { motion } from 'framer-motion';
import '../styles/solution.css';

const blocks = [
  { icon: '🗂️', text: 'Organización administrativa' },
  { icon: '💰', text: 'Control financiero' },
  { icon: '⚙️', text: 'Mejora de procesos' },
];

export default function Solution() {
  return (
    <section className="solution section" id="solucion">
      <div className="container">
        <div className="solution__inner">
          <motion.div
            className="solution__content"
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <span className="section-tag">La Solución</span>
            <h2 className="solution__title">
              Una administración<br />clara, organizada e idónea
            </h2>
            <p className="solution__text">
              Una gestión profesional permite estructurar procesos administrativos
              eficientes, fortalecer el control financiero y mejorar la toma de
              decisiones dentro de la copropiedad.
            </p>

            <div className="solution__blocks">
              {blocks.map((block, i) => (
                <motion.div
                  key={i}
                  className="solution__block"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: i * 0.12, ease: 'easeOut' }}
                >
                  <div className="solution__block-icon">{block.icon}</div>
                  <span className="solution__block-text">{block.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="solution__visual"
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          >
            <div className="solution__mockup">
              <div className="solution__mockup-header">
                <div className="solution__mockup-dot" />
                <div className="solution__mockup-dot" />
                <div className="solution__mockup-dot" />
                <span className="solution__mockup-title">Panel de Administración</span>
              </div>
              <div className="solution__mockup-rows">
                {['Finanzas', 'Mantenimiento', 'Comunicados', 'Proveedores'].map((item, i) => (
                  <div key={i} className="solution__mockup-row">
                    <div className="solution__mockup-row-icon" />
                    <div className="solution__mockup-row-lines">
                      <div className="solution__mockup-line" />
                      <div className="solution__mockup-line short" />
                    </div>
                    <span className="solution__mockup-badge">✓</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
