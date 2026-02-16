'use client'

import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Props {
    label: string
    selected: boolean
    onClick: () => void
}

export default function MultiSelectOption({
    label,
    selected,
    onClick,
}: Props) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={cn(
                "w-full h-14 rounded-full border flex items-center justify-between px-6 text-lg font-medium transition-all cursor-pointer",
                selected
                    ? "bg-[#2673BE] text-white border-[#2673BE]"
                    : "bg-white text-[#0B2545] border-gray-300 hover:border-[#2673BE]"
            )}
        >
            <span>{label}</span>

            <div
                className={cn(
                    "h-6 w-6 rounded-md border flex items-center justify-center transition-all",
                    selected
                        ? "bg-white border-white"
                        : "border-[#0B2545]"
                )}
            >
                {selected && <Check className="h-4 w-4 text-[#2673BE]" />}
            </div>
        </button>
    )
}
