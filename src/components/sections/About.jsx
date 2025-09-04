import React from 'react';
import { motion } from 'framer-motion';
import './about.css';

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: 'easeOut', delay },
  viewport: { once: true }
});

const valuePoints = [
  'Ethical livestock sourcing',
  'Cold‑chain integrity & hygiene',
  'Traceability across processing',
  'Nutrient-focused handling',
  'Regulatory compliance excellence',
  'Customer-led fulfillment'
];

const stats = [
  { label: 'Daily Processing (Kg)', value: '5,000+' },
  { label: 'Partner Farms', value: '120+' },
  { label: 'QC Checkpoints', value: '14' },
  { label: 'Distribution Hubs', value: '6' }
];

const productLines = [
  { name: 'Beef', note: 'Prime cuts, balanced marbling, consistency focused.' },
  { name: 'Goat Meat', note: 'Lean, clean taste profile—high protein.' },
  { name: 'Chicken', note: 'Fresh, properly chilled, moisture-retaining handling.' },
  { name: 'Ram Meat', note: 'Robust flavor—suited for traditional recipes.' }
];

const About = () => {
  return (
    <section id="about" className="about-simple-wrapper bg-white py-20">
      <div className="mx-auto max-w-5xl px-5">
        <motion.div {...fadeIn()} className="text-center mb-14">
          <h2 className="heading">
            About Nigerian <span className="highlight">Food Company</span>
          </h2>
          <p className="lead mt-6 max-w-3xl mx-auto">
            Nigerian Food Company advances disciplined, modern protein handling—aligning regional livestock networks with
            structured cold‑chain logistics, data-backed quality control, and uncompromising food safety. Our mandate: deliver
            reliable, traceable, premium meat products to retail, foodservice, and institutional buyers nationwide.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <motion.div {...fadeIn(0.05)}>
            <h3 className="subheading mb-5">Operational Ethos</h3>
            <p className="para mb-5">
              Every stage—from intake verification to calibrated chilling and controlled dispatch—is engineered to retain
              product integrity: microbial safety, moisture balance, nutrient preservation, and flavor fidelity.
            </p>
            <p className="para mb-8">
              Structured SOPs, humane handling protocols, digital batch traceability, and routine compliance audits support
              consistent performance and accountable supply continuity.
            </p>
            <ul className="value-points">
              {valuePoints.map((pt, i) => (
                <motion.li
                  key={pt}
                  initial={{ opacity: 0, x: -14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: 0.04 * i }}
                  viewport={{ once: true }}
                  className="value-item"
                >
                  <span className="tick">✓</span>
                  <span>{pt}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...fadeIn(0.1)} className="space-y-10">
            <div>
              <h3 className="subheading mb-5">Core Product Lines</h3>
              <ul className="product-lines">
                {productLines.map(p => (
                  <li key={p.name} className="product-line">
                    <span className="product-name">{p.name}</span>
                    <span className="product-note">{p.note}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="subheading mb-5">At a Glance</h3>
              <div className="stats-grid">
                {stats.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.05 * i }}
                    viewport={{ once: true }}
                    className="stat-card"
                  >
                    <div className="stat-value">{s.value}</div>
                    <div className="stat-label">{s.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div {...fadeIn(0.05)} className="cta-box text-center mx-auto">
          <h3 className="cta-title mb-4">Elevating Protein Standards Across Nigeria</h3>
          <p className="cta-text mb-8 max-w-2xl mx-auto">
            Freshness, safety, and flavor are designed—not assumed. Nigerian Food Company aligns process discipline and
            responsible sourcing to give customers dependable access to premium, traceable meat products.
          </p>
          <button className="cta-btn">
            Learn More <span className="arrow">→</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;