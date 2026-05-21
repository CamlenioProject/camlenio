import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../../../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-95 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg hover:shadow-orange-500/25 hover:-translate-y-0.5",

        destructive:
          "bg-red-500 text-white shadow-sm hover:bg-red-600",

        outline:
          "border border-orange-500 bg-transparent text-orange-500 hover:bg-orange-500 hover:text-white",

        secondary:
          "bg-orange-100 text-orange-900 shadow-sm hover:bg-orange-200",

        ghost:
          "hover:bg-accent hover:text-accent-foreground",

        link:
          "text-primary underline-offset-4 hover:underline",
      },

      size: {
        default:
          "h-9 px-4 py-2 text-sm rounded-xl",

        sm:
          "h-8 rounded-lg px-3 text-xs",

        lg:
          "h-10 rounded-md px-8",

        xl:
          "px-6 py-3 rounded-full text-[15px] font-medium gap-2",

        icon:
          "h-9 w-9 rounded-xl",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
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
      ...props
    },
    ref
  ): React.JSX.Element => {
    return (
      <button
        className={cn(
          buttonVariants({
            variant,
            size,
          }),
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"

export { Button, buttonVariants }