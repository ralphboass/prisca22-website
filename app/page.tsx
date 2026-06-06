'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import LoadingScreen from '@/components/LoadingScreen'
import SecurityQuestionView from '@/components/SecurityQuestionView'
import StartScreen from '@/components/StartScreen'
import VersePage from '@/components/VersePage'
import MessageScreen from '@/components/MessageScreen'
import MenuScreen from '@/components/MenuScreen'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [currentScreen, setCurrentScreen] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="min-h-screen">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : !isAuthenticated ? (
          <SecurityQuestionView
            key="security"
            onCorrectAnswer={() => setIsAuthenticated(true)}
          />
        ) : (
          <div key="main">
            <AnimatePresence mode="wait">
              {currentScreen === 0 && (
                <StartScreen onNext={() => setCurrentScreen(1)} />
              )}
              {currentScreen === 1 && (
                <VersePage onNext={() => setCurrentScreen(2)} />
              )}
              {currentScreen === 2 && (
                <MessageScreen
                  screenNumber={1}
                  onNext={() => setCurrentScreen(3)}
                />
              )}
              {currentScreen === 3 && (
                <MessageScreen
                  screenNumber={2}
                  onNext={() => setCurrentScreen(4)}
                />
              )}
              {currentScreen === 4 && (
                <MessageScreen
                  screenNumber={3}
                  onNext={() => setCurrentScreen(5)}
                />
              )}
              {currentScreen === 5 && <MenuScreen />}
            </AnimatePresence>
          </div>
        )}
      </AnimatePresence>
    </main>
  )
}
