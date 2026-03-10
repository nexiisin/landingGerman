import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import '../styles/stats.css';

function CountUp({ target, suffix = '', duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = target;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return (
    <span ref={ref} className="stats__number">
      {count}{suffix}
    </span>
  );
}

const stats = [
  { value: 16, suffix: '+', label: 'Años de experiencia' },
  { value: 100, suffix: '+', label: 'Conjuntos residenciales administrados' },
  { value: 50, suffix: '+', label: 'Juntas de administración asesoradas' },
  { value: 30, suffix: '+', label: 'Charlas y capacitaciones realizadas' },
];

export default function Stats() {
  return (
    <section className="stats">
      <div className="stats__grid">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            className="stats__item"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
          >
            <CountUp target={stat.value} suffix={stat.suffix} />
            <p className="stats__label">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
