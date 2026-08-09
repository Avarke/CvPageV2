import { useEffect, useState, type ReactNode } from 'react'
import { easeInOut, motion, AnimatePresence } from 'motion/react'
import { FiX } from 'react-icons/fi'

type SidebarDrawerProps = {
  activeSection: string | null
  children: ReactNode
  onClose: () => void
}

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(() =>
    typeof window !== 'undefined'
      ? window.matchMedia(query).matches
      : false,
  )

  useEffect(() => {
    const mediaQuery = window.matchMedia(query)

    function handleChange(event: MediaQueryListEvent) {
      setMatches(event.matches)
    }

    setMatches(mediaQuery.matches)
    mediaQuery.addEventListener('change', handleChange)

    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [query])

  return matches

}
export function SidebarDrawer({
  activeSection,
  onClose,
  children,
}: SidebarDrawerProps) {
  const isOpen = activeSection !== null
  const isDesktop = useMediaQuery('(min-width: 640px)')

  if (!isDesktop) {
    return (
      <section
        aria-hidden={!isOpen}
        className={`
          absolute inset-0 z-30 overflow-hidden
          bg-zinc-800 text-white
          transition-transform duration-500 ease-in-out
          ${isOpen
            ? 'translate-y-0'
            : 'translate-y-[calc(100%-0.75rem)]'
          }
        `}
      >
        {/* Visible at the bottom while closed */}
        <div className="absolute inset-x-0 top-0 h-3 bg-red-800" />

        <div className="absolute inset-x-0 top-3 bottom-0 overflow-y-auto">
          {isOpen && (
            <button
              type="button"
              onClick={onClose}
              aria-label="Close drawer"
              className="
                absolute top-4 right-4 z-30
                flex h-10 w-10 items-center justify-center
                border border-white/40 
                text-white transition-colors
                hover:border-red-800 hover:bg-red-800
                focus-visible:outline-none focus-visible:ring-2
                focus-visible:ring-white
              "
            >
              <FiX className="h-5 w-5" aria-hidden="true" />
            </button>
          )}

          <div className="min-h-full">
            {/* <div className="min-h-full p-6 pt-16"> */}
            {children}
          </div>
        </div>
      </section>
    )
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.section
        key={activeSection ?? 'closed'}
        initial={{ width: 0 }}
        animate={{
          width: isOpen ? 500 : 0,
          transition: {
            duration: isOpen ? 0.5 : 0,
            ease: easeInOut,
          },
        }}
        exit={{
          width: 0,
          transition: {
            duration: 0.4,
            ease: easeInOut,
          },
        }}
        className="absolute inset-y-0 right-full z-30"
      >
        <div className="absolute inset-0 overflow-hidden bg-zinc-800 text-white">
          <div className="absolute inset-y-0 right-0 w-125 overflow-y-auto">
            {children}
          </div>
        </div>

        <div className="absolute inset-y-0 right-full z-20 w-3 bg-red-800" />
      </motion.section>
    </AnimatePresence>
  )
}
