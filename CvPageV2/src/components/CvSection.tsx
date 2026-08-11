import type { MouseEvent, ReactNode } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'

type CvSectionProps = {
  title: ReactNode
  kanji?: string
  children: ReactNode
  size?: 'default' | 'compact'
}

export function CvSection({ title, kanji, children, size= 'default' }: CvSectionProps) {
  const x = useSpring(useMotionValue(0), {
    stiffness: 120,
    damping: 18,
    mass: 0.35,
  })
  const y = useSpring(useMotionValue(0), {
    stiffness: 120,
    damping: 18,
    mass: 0.35,
  })
  const rotateX = useSpring(useMotionValue(0), {
    stiffness: 120,
    damping: 18,
    mass: 0.35,
  })
  const rotateY = useSpring(useMotionValue(0), {
    stiffness: 120, // kaip stipriai reaguoja i judesius, didesnis skaicius = stipresne reakcija
    damping: 18, // sumazina bouncing. daugiau reiskiasi labiau chill movement
    mass: 0.35, // kaip sunkiai jauciasi objektas, kuo daugiau tuo sunkiau
  })

  function followMouse(event: MouseEvent<HTMLElement>) {
    const bounds = event.currentTarget.getBoundingClientRect()
    const horizontalPosition =
      (event.clientX - bounds.left) / bounds.width - 0.5
    const verticalPosition =
      (event.clientY - bounds.top) / bounds.height - 0.5

    x.set(horizontalPosition * 6) // didinti skaicius cia jeigu nori didesnio judesio
    y.set(verticalPosition * 6)
    rotateX.set(verticalPosition * -2)
    rotateY.set(horizontalPosition * 2)
  }

  function resetPosition() {
    x.set(0)
    y.set(0)
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <motion.section
      className={`relative flex
    flex-col justify-start
    border border-zinc-300 bg-white/75
    p-[clamp(1rem,1vw,1.5rem)]
    shadow-lg transition-shadow duration-300
    will-change-transform
    hover:z-10 hover:shadow-2xl
    ${
      size == 'compact'
        ? 'min-h-[clamp(9rem,7vw,13rem)]'
        : 'min-h-[clamp(11rem,12vw,22rem)]'
    }
    `}
      onMouseMove={followMouse}
      onMouseLeave={resetPosition}
      whileHover={{ scale: 1.010 }} // cia galima pakeisti scale
      style={{
        x,
        y,
        rotateX,
        rotateY,
        transformPerspective: 900,
      }}
    >
      <h2 className="mb-[clamp(1.25rem,1.3vw,1.5rem)]
      origin-top scale-y-[1.6]
      font-matisse
      text-2xl
      font-semibold uppercase text-red-800">
        {kanji ? (
          <div className="flex w-full items-baseline gap-2 pb-3">
            <div className="tracking-tight whitespace-nowrap">
              {title}
            </div>
            <span
              aria-hidden="true"
              className=" shrink-0 whitespace-nowrap"
            >
              {kanji}
            </span>


          </div>
        ) : (
          title
        )}
      </h2>
      <div
        className="
      text-body
      leading-[1.55]
      
    "
      >{children}</div>

    </motion.section>
  )
}
