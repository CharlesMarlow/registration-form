import { FC, CSSProperties, ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';

interface AnimatedStepProps {
  stepKey: string;
  children: ReactNode;
  variants: Variants;
  transition: object;
  style: CSSProperties;
}

const AnimatedStep: FC<AnimatedStepProps> = ({
  stepKey,
  children,
  variants,
  transition,
  style,
}) => (
  <motion.div
    key={stepKey}
    initial='initial'
    animate='animate'
    exit='exit'
    variants={variants}
    transition={transition}
    style={style}
  >
    {children}
  </motion.div>
);

export default AnimatedStep;
