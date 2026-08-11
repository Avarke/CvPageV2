import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '../lib/utils'

const buttonVariants = cva(
  `
    inline-flex items-center justify-center
    gap-[0.5em]
    whitespace-nowrap

    text-body
    leading-none
    font-bold
    font-yu-gothic
    tracking-tight

    transition-[background-color,border-color,color,box-shadow]
    duration-300
    ease-out

    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-slate-950
    focus-visible:ring-offset-2

    disabled:pointer-events-none
    disabled:opacity-50

    [&_svg]:pointer-events-none
    [&_svg]:size-[1em]
    [&_svg]:shrink-0
  `,
  {
    variants: {
      variant: {
        default: `
          border-2
          border-red-700/70
          bg-white/75
          text-red-800

          hover:border-red-800
          hover:bg-red-800
          hover:text-white
          hover:shadow-md
          hover:shadow-red-800/20
        `,

        outline: `
          border
          border-zinc-300
          bg-white
          text-zinc-950

          hover:border-red-800
          hover:bg-slate-50
        `,

        ghost: `
          border
          border-transparent
          bg-transparent
          text-zinc-950

          hover:bg-slate-100
          hover:text-slate-900
        `,
      },

      size: {
        default: 'h-11 px-[1em]',
        sm: 'h-10 px-[0.75em]',
        lg: 'h-12 px-[1.25em]',

        icon: 'size-11 p-0',
        iconSm: 'size-10 p-0',
        iconLg: 'size-12 p-0',
      },
    },

    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      type,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button'

    return (
      <Comp
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        type={asChild ? undefined : type ?? 'button'}
        {...props}
      />
    )
  },
)

Button.displayName = 'Button'

export { Button, buttonVariants }