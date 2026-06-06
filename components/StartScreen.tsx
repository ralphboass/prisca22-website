'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

interface StartScreenProps {
  onNext: () => void
}

export default function StartScreen({ onNext }: StartScreenProps) {
  const [showButton, setShowButton] = useState(false)
  const [showConfetti, setShowConfetti] = useState(true)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const buttonTimer = setTimeout(() => {
      setShowButton(true)
    }, 5000)

    const confettiTimer = setTimeout(() => {
      setShowConfetti(false)
    }, 8000)

    if (typeof window !== 'undefined') {
      audioRef.current = new Audio('/audio/song1.mp3')
      audioRef.current.volume = 0.3
      audioRef.current.loop = true
      audioRef.current.play().catch(e => console.log('Audio autoplay prevented:', e))
    }

    return () => {
      clearTimeout(buttonTimer)
      clearTimeout(confettiTimer)
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  const handleNext = () => {
    if (audioRef.current) {
      audioRef.current.pause()
    }
    onNext()
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 gradient-pink-purple flex items-center justify-center overflow-hidden"
    >
      {showConfetti && <Confetti />}
      
      <div className="flex flex-col items-center justify-center space-y-10 z-10">
        <motion.div
          initial={{ scale: 0.5, rotate: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ 
            duration: 1.2,
            type: 'spring',
            damping: 10
          }}
        >
          <motion.h1
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              delay: 1.2
            }}
            className="text-[200px] font-medium text-white drop-shadow-2xl"
          >
            22
          </motion.h1>
        </motion.div>

        <motion.div
          animate={{ y: [-20, 0, -20] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-6xl"
        >
          🎉 🎂 🎈
        </motion.div>

        {showButton && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', damping: 10 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNext}
            className="px-12 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-2xl font-semibold rounded-full shadow-2xl"
          >
            Next
          </motion.button>
        )}
      </div>
    </motion.div>
  )
}

function Confetti() {
  const colors = ['#ff0000', '#ffff00', '#00ff00', '#0000ff', '#ff00ff', '#ffa500', '#ffffff', '#00ffff']
  const confettiPieces = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    color: colors[i % colors.length],
    x: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 4 + Math.random() * 3,
    size: 12 + Math.random() * 8
  }))

  return (
    <div className="absolute inset-0 pointer-events-none">
      {confettiPieces.map((piece) => (
        <motion.div
          key={piece.id}
          initial={{ y: -50, x: `${piece.x}vw`, rotate: 0 }}
          animate={{ 
            y: '110vh',
            rotate: 360
          }}
          transition={{
            duration: piece.duration,
            delay: piece.delay,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute rounded-full"
          style={{
            backgroundColor: piece.color,
            width: piece.size,
            height: piece.size,
            boxShadow: `0 0 10px ${piece.color}80`
          }}
        />
      ))}
    </div>
  )
}
