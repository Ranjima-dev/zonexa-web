"use client"

import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react"
import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme="light"
      position="bottom-right"
      expand
      visibleToasts={4}
      closeButton
      toastOptions={{
        classNames: {
          toast:
            "rounded-2xl border border-gray-200 bg-white shadow-lg px-5 py-4 flex items-start gap-4 transition-all",
          title:
            "text-sm font-semibold text-gray-900 tracking-tight",
          description:
            "text-xs text-gray-500 leading-relaxed",
          closeButton:
            "opacity-50 hover:opacity-100 transition-opacity",
        },
      }}
      icons={{
        success: (
          <CircleCheckIcon className="size-8 text-emerald-500" />
        ),
        info: (
          <InfoIcon className="size-8 text-blue-500" />
        ),
        warning: (
          <TriangleAlertIcon className="size-8 text-amber-500" />
        ),
        error: (
          <OctagonXIcon className="size-8 text-rose-500" />
        ),
        loading: (
          <Loader2Icon className="size-8 animate-spin text-gray-400" />
        ),
      }}
      {...props}
    />
  )
}

export { Toaster }
