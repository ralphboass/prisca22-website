'use client'

import { motion } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 gradient-pink-purple flex items-center justify-center"
    >
      <div className="flex flex-col items-center space-y-8">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="w-20 h-20 border-8 border-white border-t-transparent rounded-full"
        />
        <motion.p
          animate={{ opacity: [0.9, 1, 0.9] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white text-2xl font-semibold"
        >
          Loading...
        </motion.p>
      </div>
    </motion.div>
  )
}
