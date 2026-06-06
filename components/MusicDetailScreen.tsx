'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, Play, Pause } from 'lucide-react'

interface MusicDetailScreenProps {
  onBack: () => void
}

interface MusicItem {
  id: string
  title: string
  artist: string
  fileName: string
}

const musicItems: MusicItem[] = [
  { id: '1', title: 'Lieblingslied 1', artist: 'Artist Name', fileName: 'song1' },
  { id: '2', title: 'Lieblingslied 2', artist: 'Artist Name', fileName: 'song2' },
  { id: '3', title: 'Sprachnachricht', artist: 'Von deinem Bruder', fileName: 'voice_memo' }
]

export default function MusicDetailScreen({ onBack }: MusicDetailScreenProps) {
  const [currentTrack, setCurrentTrack] = useState<string | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  const handlePlayPause = (item: MusicItem) => {
    if (currentTrack === item.id && isPlaying) {
      audioRef.current?.pause()
      setIsPlaying(false)
    } else {
      if (audioRef.current) {
        audioRef.current.pause()
      }

      const extensions = ['mp3', 'm4a']
      let audioUrl = `/audio/${item.fileName}.mp3`
      
      if (item.fileName.includes('voice')) {
        audioUrl = `/audio/${item.fileName}.m4a`
      }

      audioRef.current = new Audio(audioUrl)
      audioRef.current.play().catch(e => console.log('Playback error:', e))
      setCurrentTrack(item.id)
      setIsPlaying(true)

      audioRef.current.onended = () => {
        setIsPlaying(false)
      }
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 gradient-pink-purple flex flex-col"
    >
      <div className="p-4 md:p-6">
        <button
          onClick={() => {
            if (audioRef.current) {
              audioRef.current.pause()
            }
            onBack()
          }}
          className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
      </div>

      <div className="flex flex-col items-center px-4 pb-4">
        <div className="text-8xl mb-4">🎼</div>
        <h1 className="text-4xl font-bold text-white mb-8 drop-shadow-lg">Lieblingsmusik</h1>
      </div>

      <div className="flex-1 overflow-y-auto px-4 md:px-8 pb-8">
        <div className="max-w-2xl mx-auto space-y-4">
          {musicItems.map((item) => (
            <motion.button
              key={item.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handlePlayPause(item)}
              className={`w-full flex items-center gap-4 p-4 rounded-2xl border border-white/30 shadow-lg transition-all ${
                currentTrack === item.id && isPlaying
                  ? 'bg-white/25'
                  : 'bg-white/15'
              }`}
            >
              <div className="w-16 h-16 flex items-center justify-center bg-white/20 rounded-full flex-shrink-0">
                {currentTrack === item.id && isPlaying ? (
                  <Pause className="w-8 h-8 text-white" />
                ) : (
                  <Play className="w-8 h-8 text-white ml-1" />
                )}
              </div>

              <div className="flex-1 text-left">
                <h3 className="text-white text-lg font-semibold">{item.title}</h3>
                <p className="text-white/85 text-sm">{item.artist}</p>
              </div>

              {currentTrack === item.id && isPlaying && (
                <div className="flex gap-1 items-end h-6">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      animate={{
                        height: ['10px', '24px', '10px']
                      }}
                      transition={{
                        duration: 0.5,
                        repeat: Infinity,
                        delay: i * 0.2
                      }}
                      className="w-1 bg-white rounded-full"
                    />
                  ))}
                </div>
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
