"use client"

import { useState } from 'react';
import { motion } from 'framer-motion';

const DynamicSettings = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 bg-blue-500 text-white rounded"
      >
        Toggle Settings
      </button>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -10 }}
        transition={{ duration: 0.3 }}
        className={`absolute mt-2 w-48 p-4 bg-white shadow-lg rounded ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="flex flex-col space-y-2">
          <label>
            <input type="checkbox" /> Setting 1
          </label>
          <label>
            <input type="checkbox" /> Setting 2
          </label>
          <label>
            <input type="checkbox" /> Setting 3
          </label>
        </div>
      </motion.div>
    </div>
  );
};

export default DynamicSettings;
