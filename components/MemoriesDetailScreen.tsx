'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, X } from 'lucide-react'
import Image from 'next/image'

interface MemoriesDetailScreenProps {
  onBack: () => void
}

const imageNames = [
  '30fc7160-7aa6-4a6c-8add-f003ffec8a59',
  'IMG_0030',
  'IMG_0433',
  'IMG_0933',
  'IMG_1090',
  'IMG_1227',
  'IMG_1584',
  'IMG_3658',
  'IMG_4133',
  'IMG_4528',
  'IMG_4697',
  'IMG_5677',
  'IMG_8072',
  'IMG_9005',
  'IMG_9312',
  'IMG_9435',
  'IMG_9492',
  'IMG_9870'
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
  { w: 170, h: 200 }
]

export default function MemoriesDetailScreen({ onBack }: MemoriesDetailScreenProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const leftColumnImages = imageNames.filter((_, i) => i % 2 === 0)
  const rightColumnImages = imageNames.filter((_, i) => i % 2 === 1)

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
          onClick={onBack}
          className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
      </div>

      <div className="flex flex-col items-center px-4 pb-4">
        <div className="text-8xl mb-4">🎬</div>
        <h1 className="text-4xl font-bold text-white mb-2 drop-shadow-lg">Memories</h1>
        <p className="text-white/90 text-lg mb-6">Besondere Erinnerungen</p>
      </div>

      <div className="flex-1 overflow-y-auto px-4 pb-8">
        <div className="flex gap-0.5 max-w-4xl mx-auto">
          <div className="flex-1 space-y-0.5">
            {leftColumnImages.map((imageName, idx) => {
              const actualIndex = idx * 2
              const size = imageSizes[actualIndex % imageSizes.length]
              return (
                <motion.div
                  key={imageName}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedImage(imageName)}
                  className="relative rounded-xl overflow-hidden border border-white/30 shadow-lg cursor-pointer"
                  style={{ height: size.h }}
                >
                  <img
                    src={`/images/memories/${imageName}.JPG`}
                    alt={`Memory ${imageName}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = `/images/memories/${imageName}.jpg`
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
                  className="relative rounded-xl overflow-hidden border border-white/30 shadow-lg cursor-pointer"
                  style={{ height: size.h }}
                >
                  <img
                    src={`/images/memories/${imageName}.JPG`}
                    alt={`Memory ${imageName}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = `/images/memories/${imageName}.jpg`
                    }}
                  />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center bg-white/20 rounded-full"
            >
              <X className="w-8 h-8 text-white" />
            </button>

            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              src={`/images/memories/${selectedImage}.JPG`}
              alt="Selected memory"
              className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.src = `/images/memories/${selectedImage}.jpg`
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
