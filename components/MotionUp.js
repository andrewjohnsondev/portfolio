import { motion } from 'framer-motion';

const variants = {
  offscreen: {
    y: 30,
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

function MotionUp({ className, children }) {
  return (
    <motion.div initial='offscreen' whileInView='onscreen' variants={variants} viewport={{ once: true, amount: 0.3 }} className={className}>
      {children}
    </motion.div>
  );
}
export default MotionUp;
