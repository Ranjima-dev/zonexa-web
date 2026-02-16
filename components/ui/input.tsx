import * as React from "react"
import { cn } from "@/lib/utils"

function Input({
  className,
  type,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "placeholder:text-muted-foreground border border-gray-300 h-9 w-full min-w-0 rounded-md bg-transparent px-3 py-1 text-base transition-[color,box-shadow] outline-none md:text-sm",
        "focus-visible:ring-2 focus-visible:ring-[#2673BE]/40",
        "aria-invalid:border-red-500 aria-invalid:ring-2 aria-invalid:ring-red-200",
        className
      )}
      {...props}
    />
  )
}

export { Input }
