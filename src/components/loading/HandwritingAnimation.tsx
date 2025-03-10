import { useState } from "react";
import { motion } from "framer-motion";

// SVG paths for each letter in "Sharath" with improved styling
const letterPaths = [
  {
    id: "S",
    path: "M40,80 C40,80 60,60 100,60 C140,60 140,90 100,100 C60,110 40,120 40,140 C40,160 60,170 100,170 C140,170 140,150 140,150"
  },
  {
    id: "h",
    path: "M150,40 L150,160 M150,100 C150,100 150,85 170,85 C190,85 190,100 190,100 L190,160"
  },
  {
    id: "a",
    path: "M230,100 C230,85 240,70 260,70 C280,70 290,85 290,100 L290,160 M230,100 L230,160 M230,130 C230,130 240,140 260,140 C280,140 290,130 290,130"
  },
  {
    id: "r",
    path: "M330,100 L330,160 M330,100 C330,100 330,85 350,85 C370,85 380,100 380,120"
  },
  {
    id: "a2",
    path: "M420,100 C420,85 430,70 450,70 C470,70 480,85 480,100 L480,160 M420,100 L420,160 M420,130 C420,130 430,140 450,140 C470,140 480,130 480,130"
  },
  {
    id: "t",
    path: "M520,40 L520,160 M490,100 L550,100"
  },
  {
    id: "h2",
    path: "M580,40 L580,160 M580,100 C580,100 580,85 600,85 C620,85 620,100 620,100 L620,160"
  }
];

export function HandwritingAnimation() {
  const [animationCompleted, setAnimationCompleted] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="w-full h-screen flex items-center justify-center bg-white dark:bg-gray-900"
    >
      <svg
        viewBox="0 0 660 200"
        className="max-w-4xl w-full max-h-full mx-auto"
      >
        {letterPaths.map((letter, index) => (
          <motion.path
            key={letter.id}
            d={letter.path}
            stroke="currentColor"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            initial={{
              pathLength: 0,
              opacity: 0,
            }}
            animate={{
              pathLength: 1,
              opacity: 1,
              fill: animationCompleted ? "rgba(0,0,0,0)" : "rgba(0,0,0,0)",
            }}
            transition={{
              pathLength: {
                duration: 2.5,
                delay: index * 0.4,
                ease: "easeInOut",
              },
              opacity: {
                duration: 0.5,
                delay: index * 0.4,
                ease: "easeInOut",
              }
            }}
            className="text-blue-600 dark:text-blue-400"
            onAnimationComplete={() => {
              if (index === letterPaths.length - 1) {
                setAnimationCompleted(true);
              }
            }}
          />
        ))}
      </svg>
    </motion.div>
  );
}
