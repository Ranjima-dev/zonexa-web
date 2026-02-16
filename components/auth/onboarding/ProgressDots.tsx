'use client'

import { cn } from '@/lib/utils'

interface Props {
    total: number
    current: number
}

export default function ProgressDots({ total, current }: Props) {
    return (
        <div className="flex justify-center gap-3">
            {Array.from({ length: total }).map((_, index) => {
                const isActive = index + 1 === current
                return (
                    <div
                        key={index}
                        className={cn(
                            "h-3 w-3 rounded-full transition-all",
                            isActive ? "bg-yellow-400" : "bg-gray-300"
                        )}
                    />
                )
            })}
        </div>
    )
}
