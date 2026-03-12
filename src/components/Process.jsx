import { motion } from 'framer-motion';
import '../styles/process.css';

const steps = [
  {
    number: '01',
    title: 'Diagnóstico de la copropiedad',
    text: 'Se evalúa la cartera, contratación, mantenimiento y convivencia, además del estado administrativo y financiero de la copropiedad.',
  },
  {
    number: '02',
    title: 'Organización administrativa',
    text: 'Estructuración de procesos, documentación y flujos de trabajo para una gestión ordenada.',
  },
  {
    number: '03',
    title: 'Optimización de procesos',
    text: 'Implementación de mejoras en todas las áreas de la gestión administrativa y financiera.',
  },
  {
    number: '04',
    title: 'Seguimiento continuo',
    text: 'Monitoreo permanente y ajustes para garantizar la sostenibilidad de los procesos implementados.',
  },
];

export default function Process() {
  return (
    <section className="process section" id="proceso">
      <div className="container">
        <motion.div
          className="process__header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="section-tag">Método de trabajo</span>
          <h2 className="section-title">Proceso de intervención</h2>
          <p className="section-subtitle">
            Un enfoque estructurado y probado para recuperar la gestión de su copropiedad.
          </p>
        </motion.div>

        <div className="process__timeline">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="process__step"
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: 'easeOut' }}
            >
              <div className="process__step-number">{step.number}</div>
              <div className="process__step-content">
                <h3 className="process__step-title">{step.title}</h3>
                <p className="process__step-text">{step.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
