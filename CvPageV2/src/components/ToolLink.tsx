import type { AnchorHTMLAttributes, ReactNode } from 'react'

import { cn } from '../lib/utils'

type ToolLinkProps = {
  href: string
  children: ReactNode
} & AnchorHTMLAttributes<HTMLAnchorElement>

export function ToolLink({
  href,
  children,
  className,
  ...props
}: ToolLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cn(
        `
          inline
          font-matisse
          font-medium
          text-red-400

          underline
          decoration-red-700/60
          underline-offset-4

          transition-colors
          duration-200

          hover:text-white
          hover:decoration-white

          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-red-700
        `,
        className,
      )}
      {...props}
    >
      {children}
    </a>
  )
}