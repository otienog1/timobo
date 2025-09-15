"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const animatedButtonVariants = cva(
  "relative inline-flex items-center justify-center whitespace-nowrap font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer overflow-hidden z-10",
  {
    variants: {
      variant: {
        primary: [
          "text-white bg-gradient-to-r from-amber-600 to-amber-700",
          "hover:from-amber-700 hover:to-amber-800",
          "shadow-lg shadow-amber-600/20 hover:shadow-amber-700/30",
          "before:absolute before:content-[''] before:top-[-50%] before:left-[-50%] before:w-[200%] before:h-[200%]",
          "before:bg-gradient-to-r before:from-white/10 before:to-transparent before:rotate-45",
          "before:transition-all before:duration-500 before:z-[-1]",
          "hover:before:top-[-100%] hover:before:left-[-100%]",
          "after:absolute after:content-[''] after:w-0 after:h-full after:top-0 after:right-0 after:z-[-1]",
          "after:bg-gradient-to-r after:from-amber-700 after:to-amber-800",
          "after:transition-all after:duration-300",
          "hover:after:w-full hover:after:left-0",
          "active:scale-[0.98] active:shadow-md"
        ],
        secondary: [
          "text-white bg-gradient-to-r from-stone-700 to-stone-800",
          "hover:from-stone-800 hover:to-stone-900",
          "shadow-lg shadow-stone-700/20 hover:shadow-stone-800/30",
          "before:absolute before:content-[''] before:top-[-50%] before:left-[-50%] before:w-[200%] before:h-[200%]",
          "before:bg-gradient-to-r before:from-white/10 before:to-transparent before:rotate-45",
          "before:transition-all before:duration-500 before:z-[-1]",
          "hover:before:top-[-100%] hover:before:left-[-100%]",
          "after:absolute after:content-[''] after:w-0 after:h-full after:top-0 after:right-0 after:z-[-1]",
          "after:bg-gradient-to-r after:from-stone-800 after:to-stone-900",
          "after:transition-all after:duration-300",
          "hover:after:w-full hover:after:left-0",
          "active:scale-[0.98] active:shadow-md"
        ],
        outline: [
          "border-2 border-white text-white bg-transparent",
          "hover:bg-white hover:text-stone-900",
          "shadow-lg shadow-black/10 hover:shadow-white/20",
          "before:absolute before:content-[''] before:top-[-50%] before:left-[-50%] before:w-[200%] before:h-[200%]",
          "before:bg-gradient-to-r before:from-white/10 before:to-transparent before:rotate-45",
          "before:transition-all before:duration-500 before:z-[-1]",
          "hover:before:top-[-100%] hover:before:left-[-100%]",
          "after:absolute after:content-[''] after:w-0 after:h-full after:top-0 after:right-0 after:z-[-1]",
          "after:bg-white after:transition-all after:duration-300",
          "hover:after:w-full hover:after:left-0",
          "active:scale-[0.98] active:shadow-md"
        ]
      },
      size: {
        sm: "h-9 px-3 text-sm rounded-sm",
        md: "h-10 px-4 text-sm rounded-sm",
        lg: "h-12 px-6 text-base rounded-sm",
        xl: "h-14 px-8 text-lg rounded-sm"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
)

export interface AnimatedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof animatedButtonVariants> {
  asChild?: boolean
}

const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(animatedButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <span className="relative z-20">{children}</span>
      </Comp>
    )
  }
)
AnimatedButton.displayName = "AnimatedButton"

export { AnimatedButton, animatedButtonVariants }