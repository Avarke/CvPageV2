import type { ReactNode } from 'react'
import { AnimatePresence, easeInOut, motion } from 'motion/react'

type SidebarDrawerProps = {
  activeSection: string | null
  children: ReactNode
}

export function SidebarDrawer({
  activeSection,
  children,
}: SidebarDrawerProps) {
  const isOpen = activeSection !== null

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.section
        key={activeSection ?? 'closed'}
        initial={{ width: 0 }}
        animate={{
          width: isOpen ? 500 : 0,
          transition: {
            duration: isOpen ? 0.5 : 0,
            // delay: isOpen ? 0.1 : 0,
            ease: easeInOut,
          },
        }}
        exit={{
          width: 0,
          transition: {
            duration: isOpen ? 0.4 : 0,
            ease: easeInOut,
          },
        }}
        className="absolute inset-y-0 right-full"
      >
        {/* Drawer background and content */}
        <div className="absolute inset-0 overflow-hidden bg-zinc-800 text-white">
            {/* Cia pakeisti width, suderinti su animate width jeigu norim padidinti/sumazinti */}
          <div className="absolute inset-y-0 right-0 w-125 p-8"> 
            {children}
          </div>
        </div>

        {/* Follow the drawer's moving edge; when closed, the line ends at the sidebar. */}
        <div className="absolute inset-y-0 right-full z-20 w-3 bg-red-800" />
      </motion.section>
    </AnimatePresence>
  )
}
