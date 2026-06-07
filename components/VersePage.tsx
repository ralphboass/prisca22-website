'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Pause } from 'lucide-react'
import Image from 'next/image'
import { getAssetPath } from '@/lib/utils'

interface VersePageProps {
  onNext: () => void
}

const imageNames = [
  '1aabd',
  '30fc7160-7aa6-4a6c-8add-f003ffec8a59 2',
  '3a090343-ef1a-469c-91c3-3adf3168bfe4',
  '7c510883-e176-4836-98a2-ff09fdc864b6',
  'c1af030a-84ec-4318-b256-e552261bfa84',
  'c6966d2f-bbcc-4c29-a837-b9734e85acfa',
  'f3649d05-ef61-4db6-880f-f553d39bf4de',
  'IMG_0030 2',
  'IMG_0047',
  'IMG_0519',
  'IMG_0780',
  'IMG_0936',
  'IMG_0942',
  'IMG_1172',
  'IMG_1227 2',
  'IMG_1513',
  'IMG_4605',
  'IMG_5003',
  'IMG_7399',
  'IMG_7418',
  'IMG_7426',
  'IMG_7429',
  'IMG_8199',
  'IMG_8514',
  'IMG_9094'
]

const imageSizes = [
  { w: 170, h: 170 },
  { w: 170, h: 120 },
  { w: 170, h: 220 },
  { w: 170, h: 170 },
  { w: 170, h: 140 },
  { w: 170, h: 200 },
  { w: 170, h: 170 },
  { w: 170, h: 160 },
  { w: 170, h: 190 },
  { w: 170, h: 170 },
  { w: 170, h: 130 },
  { w: 170, h: 210 },
  { w: 170, h: 170 },
  { w: 170, h: 150 },
  { w: 170, h: 180 },
  { w: 170, h: 170 },
  { w: 170, h: 140 },
  { w: 170, h: 200 },
  { w: 170, h: 170 },
  { w: 170, h: 160 },
  { w: 170, h: 190 },
  { w: 170, h: 170 },
  { w: 170, h: 130 }
]

export default function VersePage({ onNext }: VersePageProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current?.pause()
      setIsPlaying(false)
    } else {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
      audioRef.current = new Audio(getAssetPath('/audio/morgenlied.mp3'))
      audioRef.current.onended = () => setIsPlaying(false)
      audioRef.current.play().catch(e => console.log('Playback error:', e))
      setIsPlaying(true)
    }
  }

  const leftColumnImages = imageNames.filter((_, i) => i % 2 === 0)
  const rightColumnImages = imageNames.filter((_, i) => i % 2 === 1)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 bg-white overflow-y-auto"
    >
      <div className="min-h-screen flex flex-col items-center py-12 px-4 md:px-8">
        <div className="max-w-4xl w-full space-y-16">
          
          {/* Image Section */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-full"
          >
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={getAssetPath('/images/start.JPG')}
                alt="Special memory"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* First Verse - Psalm 65:10 */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center space-y-4"
          >
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full">
              <p className="text-sm font-semibold text-purple-800 tracking-wide">
                PSALM 65:10
              </p>
            </div>
            <blockquote className="text-2xl md:text-3xl font-serif text-gray-800 leading-relaxed italic px-4">
              „Du suchst das Land heim und bewässerst es und machst es sehr reich; 
              der Strom Gottes hat Wasser in Fülle"
            </blockquote>
          </motion.div>

          {/* Music Player Section */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex justify-center"
          >
            <button
              onClick={handlePlayPause}
              className="group relative flex items-center gap-6 px-8 py-6 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full">
                {isPlaying ? (
                  <Pause className="w-8 h-8 text-white" />
                ) : (
                  <Play className="w-8 h-8 text-white ml-1" />
                )}
              </div>
              
              <div className="text-left">
                <p className="text-white text-lg font-semibold">Morgenlied</p>
                <p className="text-white/80 text-sm">Tap to {isPlaying ? 'pause' : 'play'}</p>
              </div>

              {isPlaying && (
                <div className="flex gap-1 items-end h-8 ml-4">
                  {[0, 1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      animate={{
                        height: ['12px', '32px', '12px']
                      }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        delay: i * 0.15
                      }}
                      className="w-1.5 bg-white rounded-full"
                    />
                  ))}
                </div>
              )}
            </button>
          </motion.div>

          {/* Gift Card Section */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="w-full"
          >
            <div className="relative bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 rounded-3xl p-12 shadow-2xl border-2 border-amber-200">
              <div className="absolute top-6 right-6 text-6xl">🎁</div>
              <div className="text-center space-y-6">
                <h3 className="text-4xl md:text-5xl font-bold text-amber-900">
                  Gutschein
                </h3>
                <div className="h-1 w-32 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto rounded-full"></div>
                <p className="text-2xl md:text-3xl font-semibold text-amber-800">
                  Für Motorradsachen 🏍️
                </p>
              </div>
            </div>
          </motion.div>

          {/* Second Verse - Philipper 4:13 */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="text-center space-y-4"
          >
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full">
              <p className="text-sm font-semibold text-indigo-800 tracking-wide">
                PHILIPPER 4:13
              </p>
            </div>
            <blockquote className="text-2xl md:text-3xl font-serif text-gray-800 leading-relaxed italic px-4">
              „Ich vermag alles durch den, der mich stark macht, Christus"
            </blockquote>
          </motion.div>

          {/* Image Wall Section */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="w-full"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">
              Erinnerungen 📸
            </h2>
            
            <div className="flex gap-0.5">
              <div className="flex-1 space-y-0.5">
                {leftColumnImages.map((imageName, idx) => {
                  const actualIndex = idx * 2
                  const size = imageSizes[actualIndex % imageSizes.length]
                  return (
                    <motion.div
                      key={imageName}
                      whileHover={{ scale: 1.02 }}
                      onClick={() => setSelectedImage(imageName)}
                      className="relative rounded-xl overflow-hidden border border-gray-200 shadow-lg cursor-pointer"
                      style={{ height: size.h }}
                    >
                      <img
                        src={getAssetPath(`/images/${imageName}.JPG`)}
                        alt={`Memory ${imageName}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.src = getAssetPath(`/images/${imageName}.jpg`)
                        }}
                      />
                    </motion.div>
                  )
                })}
              </div>

              <div className="flex-1 space-y-0.5">
                {rightColumnImages.map((imageName, idx) => {
                  const actualIndex = idx * 2 + 1
                  const size = imageSizes[actualIndex % imageSizes.length]
                  return (
                    <motion.div
                      key={imageName}
                      whileHover={{ scale: 1.02 }}
                      onClick={() => setSelectedImage(imageName)}
                      className="relative rounded-xl overflow-hidden border border-gray-200 shadow-lg cursor-pointer"
                      style={{ height: size.h }}
                    >
                      <img
                        src={getAssetPath(`/images/${imageName}.JPG`)}
                        alt={`Memory ${imageName}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.src = getAssetPath(`/images/${imageName}.jpg`)
                        }}
                      />
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Latin Saying Section */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="text-center space-y-4 pt-8"
          >
            <blockquote className="text-2xl md:text-3xl font-serif text-gray-800 leading-relaxed italic px-4">
              "Vivere militare est, sed spes vincere dat."
            </blockquote>
            <p className="text-lg text-gray-600 mt-4 pb-12">
              Leben heißt kämpfen, aber Hoffnung gibt den Sieg.
            </p>
          </motion.div>

        </div>
      </div>

      {/* Image Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              src={getAssetPath(`/images/${selectedImage}.JPG`)}
              alt="Selected memory"
              className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.src = getAssetPath(`/images/${selectedImage}.jpg`)
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
