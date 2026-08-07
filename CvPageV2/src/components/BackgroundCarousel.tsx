import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react' 

type BackgroundCarouselProps = {
  images: string[]
  intervalMs?: number
  className?: string
}

function shuffleArray<T>(items: T[]) {
  const nextItems = [...items]

  for (let index = nextItems.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1))
    ;[nextItems[index], nextItems[swapIndex]] = [nextItems[swapIndex], nextItems[index]]
  }

  return nextItems
}

export function BackgroundCarousel({
  images,
  intervalMs = 10000,
  className = '',
}: BackgroundCarouselProps) {
  const [order, setOrder] = useState<string[]>([])
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (!images.length) {
      return undefined
    }

    setOrder(shuffleArray(images))
    setActiveIndex(0)

    if (images.length <= 1) {
      return undefined
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length)
    }, intervalMs)

    return () => window.clearInterval(timer)
  }, [images, intervalMs])

  if (!images.length) {
    return null
  }

  return (
    <div className={`pointer-events-none fixed inset-0 overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        <motion.img
          key={order[activeIndex] ?? images[activeIndex]}
          src={order[activeIndex] ?? images[activeIndex]}
          alt=""
          aria-hidden="true"
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/10" />
    </div>
  )
}
