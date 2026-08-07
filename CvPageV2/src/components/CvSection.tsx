import type { MouseEvent, ReactNode } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'

type CvSectionProps = {
  title: string
  children: ReactNode
}

export function CvSection({ title, children }: CvSectionProps) {
  const x = useSpring(useMotionValue(0), {
    stiffness: 180,
    damping: 18,
    mass: 0.35,
  })
  const y = useSpring(useMotionValue(0), {
    stiffness: 180,
    damping: 18,
    mass: 0.35,
  })
  const rotateX = useSpring(useMotionValue(0), {
    stiffness: 180,
    damping: 18,
    mass: 0.35,
  })
  const rotateY = useSpring(useMotionValue(0), {
    stiffness: 180,
    damping: 18,
    mass: 0.35,
  })

  function followMouse(event: MouseEvent<HTMLElement>) {
    const bounds = event.currentTarget.getBoundingClientRect()
    const horizontalPosition =
      (event.clientX - bounds.left) / bounds.width - 0.5
    const verticalPosition =
      (event.clientY - bounds.top) / bounds.height - 0.5

    x.set(horizontalPosition * 6)
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
      className="relative flex min-h-0 flex-col justify-center border border-zinc-300 bg-white/75 p-6 shadow-lg transition-shadow duration-300 will-change-transform hover:z-10 hover:shadow-2xl"
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
      <h2 className="mb-5 origin-top scale-y-[1.5] font-matisse text-xl font-semibold uppercase tracking-widest text-red-800">
        {title}
      </h2>
      {children}
    </motion.section>
  )
}
