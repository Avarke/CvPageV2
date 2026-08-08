import { HoverTooltip } from './HoverTooltip'

type ContactItemProps = {
  label: string
  href?: string
  kanji?: string
  copyValue?: string
  copied?: boolean
  onCopy?: (value: string) => void
  children: string
}

export function ContactItem({ label, href, kanji, copyValue, copied = false, onCopy, children }: ContactItemProps) {

  const value =

    copyValue && onCopy ? (
      <span className="relative inline-block">
        <HoverTooltip
          text={'Copied!'}
          visible={copied}
        />

        <button
          type="button"
          onClick={() => onCopy(copyValue)}
          className="cursor-pointer break-all text-right transition-colors hover:text-red-800"
          aria-label={`Copy ${label}`}
        >
          {children}
        </button>
      </span>
    ) : href ? (
      <a className="break-all transition-colors hover:text-red-800" href={href}>
        {children}
      </a>
    ) : (
      <span>{children}</span>
    )

  return (
    <div
      className="
    relative grid grid-cols-[4.5rem_1fr] items-baseline gap-3
    border-b border-zinc-300 pb-3
    after:pointer-events-none after:absolute after:bottom-[-1px]
    after:left-1/2 after:h-px after:w-3/4 after:-translate-x-1/2
    after:bg-linear-to-r after:from-transparent after:via-white/90
    after:to-transparent after:content-['']
    last:border-0 last:pb-0 last:after:hidden
  "
    >
      <span className="inline-flex items-baseline gap-2 text-[0.8rem] font-semibold tracking-widest uppercase">
        {kanji && (
          <span
            aria-hidden="true"
            className="shrink-0 font-ep-kaisho tracking-normal"
          >
            {kanji}
          </span>
        )}

        {label}
      </span>

      <span className="ml-auto font-century font-bold">
        {value}
      </span>
    </div>
  )
}