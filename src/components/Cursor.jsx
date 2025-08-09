// src/components/Cursor.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Cursor = ({ cursorPosition, primaryColor }) => (
  <motion.div
    animate={{
      x: cursorPosition.x,
      y: cursorPosition.y,
      transition: { type: 'spring', damping: 30, stiffness: 300 }
    }}
    style={{
      position: 'fixed',
      left: 0,
      top: 0,
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      background: primaryColor,
      pointerEvents: 'none',
      zIndex: 9999,
      mixBlendMode: 'exclusion',
      transform: 'translate(-50%, -50%)'
    }}
  />
);

export default Cursor;