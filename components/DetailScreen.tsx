'use client'

import { motion } from 'framer-motion'
import { ChevronLeft } from 'lucide-react'

interface MenuItem {
  id: number
  emoji: string
  title: string
  description: string
}

interface DetailScreenProps {
  category: MenuItem
  onBack: () => void
}

export default function DetailScreen({ category, onBack }: DetailScreenProps) {
  const getContent = () => {
    switch (category.id) {
      case 0:
        return `„Befiehl dem Herrn deine Wege und hoffe auf ihn, er wird's wohlmachen."
— Psalm 37,5


„Das Leben kann nur rückwärts verstanden, aber nur vorwärts gelebt werden."
— Søren Kierkegaard


„Statistiken Beweisen, wer mehr Geburtstage feiert, lebt länger."
— Author unbekannt


„Wagen wir es, wir selbst zu sein."
— Søren Kierkegaard


„Memento Vivere"
— Author unbekannt

„Ist Gott für uns, wer kann gegen uns sein?"
— Römerbrief 8,31


„Das große Glück, noch klein zu sein,
sieht mancher Mensch als Kind nicht ein,
und möchte, dass er ungefähr
so 16 oder 17 wär.
Doch schon mit 18 denkt er: 'Halt!
Wer über 20 ist, ist alt.'
Warum? Die 20 sind vergnüglich -
auch sind die 30 noch vorzüglich."
— Wilhelm Busch


„Habe Mut, dich deines eigenen Verstandes zu bedienen."
— Immanuel Kant


„Vertraue auf den HERRN von ganzem Herzen und verlass dich nicht auf deinen Verstand. Erkenne ihn auf allen deinen Wegen so wird er deine Pfade ebnen."
— Sprüche 3, 6-7`
      case 3:
        return 'Für meine kleine Per sis...\n\nDu bist toll und hab dich lieb!'
      case 4:
        return '🍽️✨\n\nGutschein fürs gemeinsame Essen!\n\nEin Abend nur für uns zwei – gutes Essen, gute Gespräche und unvergessliche Momente.\n\nDein Lieblingsbruder lädt dich ein! 🎉'
      default:
        return 'Inhalt wird geladen...'
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
          onClick={onBack}
          className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center px-4 pb-8 overflow-hidden">
        <div className="text-8xl mb-4">{category.emoji}</div>
        <h1 className="text-4xl font-bold text-white mb-8 drop-shadow-lg">
          {category.title}
        </h1>

        <div className="flex-1 overflow-y-auto max-w-3xl w-full">
          <p className="text-white text-lg md:text-xl text-center whitespace-pre-line px-6 drop-shadow">
            {getContent()}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
