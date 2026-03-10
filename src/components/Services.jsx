import { motion } from 'framer-motion';
import '../styles/services.css';

const services = [
  {
    icon: '🏢',
    title: 'Administración de conjuntos',
    text: 'Gestión integral de propiedad horizontal incluyendo manejo financiero, coordinación de mantenimiento y apoyo a consejos de administracion.',
  },
  {
    icon: '🎯',
    title: 'Asesoría especializada',
    text: 'Diagnóstico administrativo y acompañamiento a consejos de administracion en la toma de decisiones estratégicas.',
  },
  {
    icon: '🎤',
    title: 'Charlas y capacitaciones',
    text: 'Formación para administradores, consejos de administración y comunidades en buenas prácticas de propiedad horizontal.',
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Services() {
  return (
    <section className="services section" id="servicios">
      <div className="container">
        <motion.div
          className="services__header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="section-tag">Servicios</span>
          <h2 className="section-title">¿Qué ofrezco?</h2>
          <p className="section-subtitle">
            Soluciones integrales para la gestión profesional de su propiedad horizontal.
          </p>
        </motion.div>

        <motion.div
          className="services__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {services.map((service, i) => (
            <motion.div key={i} className="service-card" variants={cardVariants}>
              <div className="service-card__content">
                <div className="service-card__icon-wrap">{service.icon}</div>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__text">{service.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
