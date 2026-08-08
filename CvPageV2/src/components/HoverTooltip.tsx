import { AnimatePresence, motion } from "motion/react";

type HoverTooltipProps = {
  text: string
  visible: boolean
}

export function HoverTooltip({
  text,
  visible,
}: HoverTooltipProps) {
  return (
    <div className="pointer-events-none absolute -top-11 left-1/2 z-20 -translate-x-1/2">
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.96 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="whitespace-nowrap border-2 border-red-800 bg-red-800 px-3 py-1.5 font-yu-gothic text-xs font-bold text-white/90 shadow-md shadow-red-800/20"
          >
            {text}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}