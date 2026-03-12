import { motion } from 'framer-motion';
import germanPhoto from '../imgs/German.png';
import '../styles/about.css';

const highlights = [
  '16+ años de experiencia en propiedad horizontal',
  'Especialista en intervención de copropiedades con dificultades financieras, administrativas y de cartera',
  'Asesor y orientador de consejeros en propiedad horizontal',
  'Formador y conferencista en gestión comunitaria',
];

export default function About() {
  return (
    <section className="about section" id="sobre">
      <div className="container">
        <div className="about__inner">
          <motion.div
            className="about__visual"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="about__photo-wrap">
              <div className="about__photo-frame">
                <img src={germanPhoto} alt="Luis German Sanchez" className="about__photo-img" />
              </div>
              <div className="about__photo-badge">
                <span className="about__photo-badge-number">16+</span>
                <span className="about__photo-badge-text">Años de experiencia</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about__content"
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          >
            <span className="section-tag">Sobre el profesional</span>
            <h2 className="about__title">
              Luis German<br />Sanchez Cadavid
            </h2>
            <p className="about__text">
              Tecnólogo en administración y gerencia de propiedad horizontal con más de
              16 años, dedicado a fortalecer la gestión integral de copropiedades a su
              cargo, orientando y apoyando a los consejeros en sus funciones para un
              mejor acompañamiento en la toma de decisiones. Especialista en intervenir
              copropiedades con problemas financieros, administrativos, convivencia,
              cartera, etcétera.
            </p>

            <div className="about__highlights">
              {highlights.map((h, i) => (
                <motion.div
                  key={i}
                  className="about__highlight"
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
                >
                  <div className="about__highlight-check">✓</div>
                  {h}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
