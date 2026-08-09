import type { ReactNode } from 'react'

type DrawerContentProps = {
  title: string
  subtitle: string
  children: ReactNode
}

export function DrawerContent({
  title,
  subtitle,
  children,
}: DrawerContentProps) {
  return (
    <section className="border-b border-white/20 px-[clamp(1.25rem,1.5vw,2.5rem)]
    pt-8
    pb-[clamp(1.5rem,2vw,3rem)]">
      <header className="mb-[clamp(1.25rem,1.5vw,2.25rem)]">
        <h2 className="mb-1 origin-bottom scale-y-[1.50] font-ep-kaisho text-3xl leading-none
         font-semibold tracking-normal text-white mb-[clamp(0.25rem,0.4vw,0.75rem)]   text-[clamp(1.75rem,1.8vw,3rem)]">          
          {title}
        </h2>

        {subtitle && (
          <p className="origin-top scale-y-[1.40] font-yu-gothic text-sm font-bold tracking-normal
           text-stone-300 uppercase  sm:text-[clamp(0.5rem,2.25cqw,0.9rem)]">            
          {subtitle}
          </p>
        )}
      </header>

      <div
        className="
        text-[clamp(1rem,0.75vw,1.125rem)]
              space-y-[clamp(1rem,1vw,1.5rem)]
               font-yu-gothic
          text-sm leading-6 text-zinc-300
          [&_img]:h-auto [&_img]:w-full
          [&_img]:object-cover
        "
      >
        {children}
      </div>
    </section>
  )
}