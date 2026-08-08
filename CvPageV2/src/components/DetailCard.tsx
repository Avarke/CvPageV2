import { motion, useMotionValue, useSpring } from "motion/react"
import type { MouseEvent, ReactNode } from 'react'


type DetailCardProps = {
    title: string
    kanji?: string
    active?: boolean
    onClick: () => void
}

export function DetailCard({
    title,
    kanji,
    active = false,
    onClick,
}: DetailCardProps) {

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
        <motion.button
            type="button"
            onClick={onClick}
            onMouseMove={followMouse}
            onMouseLeave={resetPosition}
            aria-expanded={active}
            whileHover={{ scale: 1.015 }}
            whileTap={{ scale: 0.98 }}
            style={{
                x,
                y,
                rotateX,
                rotateY,
                transformPerspective: 900,
            }}
            className={` @container
        group relative flex aspect-square w-full
        flex-col overflow-hidden p-4 text-left
        transition-all duration-300 ease-out
        focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-red-800 focus-visible:ring-offset-2
        ${active
                    ? 'border-red-800 bg-red-800 text-white shadow-md shadow-red-800/20'
                    : 'border-zinc-400 bg-white/75 text-zinc-600 hover:border-red-800 shadow-lg hover:bg-red-800 hover:text-white hover:shadow-md hover:shadow-red-800/20'
                }
      `}
        >
            {kanji && (
                <span
                    aria-hidden="true"
                    className={`
            absolute top-3 right-3
            font-matisse text-[clamp(2.5rem,30cqw,8rem)]
            leading-none tracking-normal transition-colors duration-300
            ${active
                            ? 'text-white/25'
                            : 'text-red-800/15 group-hover:text-black/90'
                        // text-red-800/15 grouphover:text-white/25
                        }
          `}
                >
                    {kanji}
                </span>
            )}

            <span className="relative z-10 mt-auto font-matisse origin-bottom scale-y-[2] text-[clamp(0.875rem,7cqw,2rem)] font-semibold tracking-wider uppercase">
                {title}
            </span>
        </motion.button>
    )
}