import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="hero"
    >
      <h1>Your Trusted Recruitment Partner</h1>
      <p>Personalized HR solutions to help you grow.</p>
    </motion.section>
  );
}
