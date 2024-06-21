import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface IntroProps {
  onAnimationComplete?: () => void;
  title: string;
  subtitle: string;
}

const IntroComponent = ({
  title,
  subtitle,
  onAnimationComplete,
}: IntroProps) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  const [visible, setVisible] = useState<boolean>(true);

  const animationEnd = () => {
    setVisible(false);
    if (onAnimationComplete) {
      onAnimationComplete();
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="content h-screen flex justify-center items-center w-screen fixed inset-0 bg-stone-300 z-2"
          initial="hidden"
          animate="visible"
          exit="exit"
          onAnimationComplete={() => animationEnd()}
        >
          <div className="flex flex-col justify-center items-center">
            <motion.div
              key={0}
              className="lg:text-8xl text-6xl font-note"
              variants={containerVariants}
              transition={{ duration: 0.75, type: "spring", ease: "easeIn" }}
            >
              {title}
            </motion.div>
            <motion.div
              key={1}
              className="lg:text-4xl text-2xl font-note text-center"
              variants={containerVariants}
              transition={{ duration: 0.75, type: "spring", ease: "easeIn" }}
            >
              {subtitle}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroComponent;
