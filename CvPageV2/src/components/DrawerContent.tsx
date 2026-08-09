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
    <section className="  px-[clamp(1.25rem,1.5vw,2.5rem)]
    pt-8
    pb-[clamp(1.5rem,2vw,3rem)]">

      <div
        aria-hidden="true"
        className="mb-5 flex items-center gap-3"
      >
        <span className="h-0.5 w-8 bg-red-700" />
        <span className="h-px flex-1 bg-white/15" />
      </div>
      <header className="mb-[clamp(1.25rem,1.5vw,2.0rem)]">
        <h2 className="origin-bottom 
         scale-y-[1.50] font-ep-kaisho text-3xl leading-none
         font-semibold tracking-normal text-white 
         mb-[clamp(0.25rem,0.1vw,0.5rem)]   
         text-cv-section-title">
          {title}
        </h2>

        {subtitle && (
          <p className="origin-top scale-y-[1.40] font-yu-gothic text-sm font-bold tracking-normal
           text-stone-300 uppercase  sm:text-[clamp(0.5rem,2.25cqw,0.85rem)]">
            {subtitle}
          </p>
        )}
      </header>

      <div
        className="
        text-[clamp(1rem,0.75vw,1.125rem)]
              space-y-[clamp(1rem,1vw,1.5rem)]
               font-yu-gothic
          leading-6 text-zinc-300
          [&_img]:h-auto [&_img]:w-full
          [&_img]:object-cover
        "
      >
        {children}
      </div>
    </section>
  )
}