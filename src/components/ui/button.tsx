import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-bold uppercase tracking-wider transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-accent border-2",
  {
    variants: {
      variant: {
        default: "bg-foreground text-background border-foreground hover:bg-foreground/90",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 border-destructive",
        outline:
          "border-foreground bg-background hover:bg-foreground hover:text-background",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 border-secondary",
        ghost:
          "hover:bg-accent hover:text-accent-foreground border-transparent hover:border-accent",
        link: "text-accent underline-offset-4 hover:underline border-transparent",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-8 px-4 gap-1.5",
        lg: "h-12 px-8",
        icon: "size-10",
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
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
