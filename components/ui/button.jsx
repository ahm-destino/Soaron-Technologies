import * as React from "react"
import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-xl font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",
        outline:
          "border border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost:
          "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: "text-primary underline-offset-4 hover:underline p-0 h-auto font-semibold",
      },
      size: {
        default: "h-10 px-5 py-2 text-sm gap-2",
        xs: "h-7 px-2.5 text-xs gap-1 rounded-md [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8.5 px-3.5 text-xs sm:text-sm gap-1.5 rounded-lg [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-12 px-7 text-sm sm:text-base gap-2 rounded-xl font-semibold",
        xl: "h-13 sm:h-14 px-8 text-base sm:text-lg gap-2.5 rounded-full font-bold",
        icon: "size-10 rounded-xl",
        "icon-xs": "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8 rounded-lg",
        "icon-lg": "size-12 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  children,
  ...props
}) {
  const classes = cn(buttonVariants({ variant, size, className }))

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      ...props,
      ...children.props,
      className: cn(classes, children.props.className),
    })
  }

  return (
    <ButtonPrimitive
      data-slot="button"
      className={classes}
      {...props}
    >
      {children}
    </ButtonPrimitive>
  )
}

export { Button, buttonVariants }
