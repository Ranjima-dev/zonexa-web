'use client'

import { cn } from '@/lib/utils'

interface OptionButtonProps {
    label: string
    selected: boolean
    onClick: () => void
}

export default function OptionButton({
    label,
    selected,
    onClick,
}: OptionButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={cn(
                "w-full h-11 rounded-full border text-lg font-medium transition-all duration-200 cursor-pointer",
                selected
                    ? "bg-[#2673BE] text-white border-[#2673BE]"
                    : "bg-white text-[#0B2545] border-gray-300 hover:border-[#2673BE]"
            )}
        >
            {label}
        </button>
    )
}
