'use client'

import { motion } from 'framer-motion'

interface MessageScreenProps {
  screenNumber: number
  onNext: () => void
}

export default function MessageScreen({ screenNumber, onNext }: MessageScreenProps) {
  const getGradient = () => {
    switch (screenNumber) {
      case 1:
        return 'gradient-orange-pink'
      case 2:
        return 'gradient-blue-purple'
      case 3:
        return 'gradient-yellow-pink'
      default:
        return 'gradient-pink-purple'
    }
  }

  const getEmoji = () => {
    switch (screenNumber) {
      case 1:
        return '💝'
      case 2:
        return '🌟'
      case 3:
        return '🎁'
      default:
        return '❤️'
    }
  }

  const getMessage = () => {
    switch (screenNumber) {
      case 1:
        return 'Heute ist dein Geburtstag.\nMeine kleine Schwester!'
      case 2:
        return 'Wie schön dass es dich gibt. Schon 22 Jahre.'
      case 3:
        return 'Das grösste Geschenk...\n...das bist du selbst. Aber hier kommen ein paar kleine Überraschungen...'
      default:
        return 'Happy Birthday!'
    }
  }

  return (
    <motion.div
      key={screenNumber}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed inset-0 ${getGradient()} flex items-center justify-center p-4`}
    >
      <div className="max-w-2xl w-full flex flex-col items-center space-y-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
          className="text-8xl mb-6"
        >
          {getEmoji()}
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-h-96 overflow-y-auto px-8"
        >
          <p className="text-white text-2xl md:text-3xl font-medium text-center whitespace-pre-line drop-shadow-lg">
            {getMessage()}
          </p>
        </motion.div>

        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, type: 'spring' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="px-10 py-4 bg-white/30 backdrop-blur-sm border-2 border-white text-white text-xl font-semibold rounded-full shadow-lg"
        >
          Next
        </motion.button>
      </div>
    </motion.div>
  )
}
