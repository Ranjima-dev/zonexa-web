'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import ProgressDots from './ProgressDots'
import MultiSelectOption from '@/components/common/MultiSelectOption'
import { montserrat } from '@/app/layout'


const options = [
    "Industrial",
    "Logistics",
    "Data Center",
    "Pre-Lease",
    "Land",
]

export default function Step3() {
    const router = useRouter()
    const [selected, setSelected] = useState<string[]>([])

    const toggleOption = (value: string) => {
        setSelected((prev) =>
            prev.includes(value)
                ? prev.filter((item) => item !== value)
                : [...prev, value]
        )
    }

    const handleContinue = () => {
        if (selected.length === 0) return

        console.log("Selected industries:", selected)

        // Next step OR finish onboarding
        router.push('/dashboard')
    }

    return (
        <div className="relative min-h-screen flex items-center justify-center px-6">

            {/* Skip */}
            <button
                type="button"
                onClick={() => router.push('/onboarding/4')}
                className="absolute top-10 right-0 text-sm font-medium text-[#0B2545] hover:underline cursor-pointer"
            >
                Skip
            </button>

            <div className="w-full max-w-md space-y-8">

                {/* Title */}
                <div className="space-y-3">
                    <h1 className={`${montserrat.className} text-3xl font-bold text-[#0B2545]`}>
                        Property Representation?
                    </h1>

                    <p className="text-lg text-gray-500">
                        Select the industries your company serves from the list.
                    </p>
                </div>

                {/* Multi Select Options */}
                <div className="space-y-4">
                    {options.map((option) => (
                        <MultiSelectOption
                            key={option}
                            label={option}
                            selected={selected.includes(option)}
                            onClick={() => toggleOption(option)}
                        />
                    ))}
                </div>

                {/* Progress */}
                <ProgressDots total={3} current={3} />

                {/* Continue */}
                <Button
                    onClick={handleContinue}
                    disabled={selected.length === 0}
                    className="w-full h-14 rounded-full bg-[#2673BE] hover:bg-[#1e5a94]"
                >
                    Continue
                </Button>

            </div>
        </div>
    )
}
