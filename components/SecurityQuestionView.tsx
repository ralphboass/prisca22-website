'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Lock } from 'lucide-react'

interface SecurityQuestionViewProps {
  onCorrectAnswer: () => void
}

export default function SecurityQuestionView({ onCorrectAnswer }: SecurityQuestionViewProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [showError, setShowError] = useState(false)

  const answers = [
    'Gesellschaftsspiele',
    'MakeUp',
    'Holz',
    'Weiße Schokolade'
  ]

  const checkAnswer = (answer: string) => {
    setSelectedAnswer(answer)
    
    if (answer === 'Holz') {
      setTimeout(() => {
        onCorrectAnswer()
      }, 500)
    } else {
      setShowError(true)
      setTimeout(() => {
        setShowError(false)
        setSelectedAnswer(null)
      }, 2000)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 gradient-pink-purple flex items-center justify-center p-4"
    >
      <div className="max-w-md w-full space-y-10">
        <div className="flex flex-col items-center space-y-6">
          <Lock className="w-20 h-20 text-white" />
          
          <h1 className="text-4xl font-bold text-white text-center drop-shadow-lg">
            Sicherheitsfrage
          </h1>
          
          <p className="text-2xl text-white text-center font-medium">
            Was hat die Dame gerne?
          </p>
        </div>

        <div className="space-y-4">
          {answers.map((answer) => (
            <motion.button
              key={answer}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => checkAnswer(answer)}
              className={`w-full flex items-center justify-between px-6 py-5 rounded-2xl border border-white/50 transition-all ${
                selectedAnswer === answer
                  ? 'bg-white/40'
                  : 'bg-white/20'
              } backdrop-blur-sm shadow-lg`}
            >
              <span className="text-white text-xl font-medium">{answer}</span>
              {selectedAnswer === answer && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-6 h-6 bg-white rounded-full flex items-center justify-center"
                >
                  <div className="w-3 h-3 bg-pink-500 rounded-full" />
                </motion.div>
              )}
            </motion.button>
          ))}
        </div>

        <AnimatePresence>
          {showError && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-red-500/70 text-white px-6 py-4 rounded-xl text-center font-semibold"
            >
              ❌ Falsche Antwort! Versuche es nochmal.
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
