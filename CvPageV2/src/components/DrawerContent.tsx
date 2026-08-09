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
    <section className="border-b border-white/20 px-6 py-7 sm:px-8">
      <header className="mb-5">
        <h2 className="mb-1 origin-bottom scale-y-[1.50] font-ep-kaisho text-3xl leading-none
         font-semibold tracking-normal text-white sm:text-[clamp(1rem,8cqw,2rem)]">          
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
          space-y-4 font-yu-gothic
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