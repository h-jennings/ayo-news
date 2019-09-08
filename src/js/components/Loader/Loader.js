import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Loader.scss';

const Loader = () => (
  <div className="Loader--wrapper">
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key="loader"
        className="Loader"
        initial={{
          scale: 0.5,
          opacity: 0.8,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
          flip: Infinity,
        }}
        exit={{
          opacity: 0,
        }}
      />
    </AnimatePresence>
  </div>
);

export default Loader;
