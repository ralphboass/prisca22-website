'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import DetailScreen from './DetailScreen'
import MemoriesDetailScreen from './MemoriesDetailScreen'
import MusicDetailScreen from './MusicDetailScreen'

interface MenuItem {
  id: number
  emoji: string
  title: string
  description: string
}

const menuItems: MenuItem[] = [
  { id: 0, emoji: '💭', title: 'Anekdoten', description: 'Weise Sprüche und Zitate' },
  { id: 1, emoji: '🎬', title: 'Memories', description: 'Besondere Erinnerungen' },
  { id: 2, emoji: '🎵', title: 'Lieblingsmusik', description: 'Deine Lieblingslieder' },
  { id: 4, emoji: '🎟️', title: 'Gutschein', description: 'Ein besonderes Geschenk für dich' },
  { id: 3, emoji: '👨‍👦', title: 'Lieblingsbruder', description: 'Vom besten Bruder der Welt' }
]

export default function MenuScreen() {
  const [selectedCategory, setSelectedCategory] = useState<MenuItem | null>(null)

  return (
    <div className="fixed inset-0 gradient-pink-purple">
      <AnimatePresence mode="wait">
        {selectedCategory ? (
          <div key="detail">
            {selectedCategory.id === 1 ? (
              <MemoriesDetailScreen onBack={() => setSelectedCategory(null)} />
            ) : selectedCategory.id === 2 ? (
              <MusicDetailScreen onBack={() => setSelectedCategory(null)} />
            ) : (
              <DetailScreen category={selectedCategory} onBack={() => setSelectedCategory(null)} />
            )}
          </div>
        ) : (
          <motion.div
            key="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="h-full flex flex-col p-4 md:p-8"
          >
            <div className="text-center mb-6 mt-12">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">
                Wähle eine Kategorie 🎉
              </h1>
              <p className="text-white/90 text-lg">Tippe auf eine Karte</p>
            </div>

            <div className="flex-1 overflow-y-auto">
              <div className="max-w-2xl mx-auto space-y-4 pb-8">
                {menuItems.map((item) => (
                  <motion.button
                    key={item.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedCategory(item)}
                    className="w-full flex items-center gap-4 p-4 bg-white/15 backdrop-blur-sm border border-white/30 rounded-2xl shadow-lg"
                  >
                    <div className="w-16 h-16 flex items-center justify-center bg-white/20 rounded-full text-4xl flex-shrink-0">
                      {item.emoji}
                    </div>
                    
                    <div className="flex-1 text-left">
                      <h3 className="text-white text-xl font-semibold">{item.title}</h3>
                      <p className="text-white/85 text-sm">{item.description}</p>
                    </div>
                    
                    <ChevronRight className="w-6 h-6 text-white/70 flex-shrink-0" />
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
