import type { ReactNode } from 'react'

type DrawerContentProps = {
  title: string
  subtitle: string
  kanji?: string
  image?: string
  children: ReactNode
}


export function DrawerContent({
  title,
  subtitle,
  kanji,
  image,
  children,
}: DrawerContentProps) {
  return (
    <section className="relative isolate overflow-hidden bg-zinc-800 px-5
    pt-8
    pb-[clamp(1.5rem,2vw,3rem)]">

      {image && (
        <>
          <img
            src={image}
            alt=""
            aria-hidden="true"
            className="
          pointer-events-none
          absolute inset-0 z-0
          h-full w-full
          object-cover object-center
          opacity-100
        "
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-[1] bg-zinc-800/75"
          />

          {/* Top fade */}
          <div
            aria-hidden="true"
            className="
        pointer-events-none
        absolute inset-x-0 top-0 z-[2]
        h-30
        bg-linear-to-b
        from-zinc-800
         via-zinc-800/95
        to-transparent
      "
          />

          {/* Bottom fade */}
          <div
            aria-hidden="true"
            className="
        pointer-events-none
        absolute inset-x-0 bottom-0 z-[2]
        h-20
        bg-linear-to-t
        from-zinc-800
        via-zinc-800/95
        to-transparent
      "
          />

          {/* Left fade */}
          <div
            aria-hidden="true"
            className="
        pointer-events-none
        absolute inset-y-0 left-0 z-[2]
        w-30
        bg-linear-to-r
        from-zinc-800
        to-transparent
      "
          />

          {/* Right fade */}
          <div
            aria-hidden="true"
            className="
        pointer-events-none
        absolute inset-y-0 right-0 z-[2]
        w-30
        bg-linear-to-l
        from-zinc-800
        to-transparent
      "
          />

        </>
      )}

      <div className="relative z-10">
        <div
          aria-hidden="true"
          className="mb-5 flex items-center gap-3"
        >
          <span className="h-0.5 w-8 bg-red-700" />
          <span className="h-px flex-1 bg-white/15" />
        </div>
        <header className="mb-[clamp(1.25rem,1.5vw,2.0rem)]">
          <h2 className="origin-bottom 
         scale-y-[1.50] font-name text-3xl leading-[1.15]
         font-semibold tracking-normal text-white 
        mb-[0.1rem] 
         text-cv-section-title">

            {kanji ? (
              <span className="inline-flex items-baseline gap-2 whitespace-nowrap">
                <span className="whitespace-nowrap tracking-tight text-3xl ">
                  {title}
                </span>

                <span
                  aria-hidden="true"
                  className="shrink-0 whitespace-nowrap text-xl"
                >
                  {kanji}
                </span>
              </span>
            ) : (
              <span className="whitespace-nowrap tracking-tight text-3xl ">
                  {title}
                </span>
            )}
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
          [&>img]:h-auto
          [&>img]:w-full
          [&>img]:object-cover
        "
        >
          {children}
        </div>
      </div>
    </section>
  )
}