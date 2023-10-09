import { motion } from "framer-motion";

interface CounterAnimationProps {
  numbers: number[];
}
//6 x 40 - 40
const CounterAnimation: React.FC<CounterAnimationProps> = ({ numbers }) => {
  const movementY = (numbers.length * 40 - 40) * -1;
  return (
    <motion.span
      style={{ display: "flex", flexDirection: "column" }}
      initial={{ y: 0 }}
      whileInView={{ y: movementY }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 1, delay: 0.2 }}
    >
      {numbers.map((number, i) => (
        <i key={i} className="font-montserrat text-4xl font-bold">
          {number}
        </i>
      ))}
    </motion.span>
  );
};

export default CounterAnimation;
