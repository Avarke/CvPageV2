import type { ReactNode } from 'react'

type CvSectionProps = {
  title: string
  children: ReactNode
}

export function CvSection({ title, children }: CvSectionProps) {
  return (
    <section className="flex min-h-0 flex-col justify-center border border-zinc-300 bg-white/75 p-6 shadow-lg">
      <h2 className="mb-5 origin-top scale-y-[1.5] font-matisse text-xl font-semibold uppercase tracking-widest text-red-800">
        {title}
      </h2>
      {children}
    </section>
  )
}
