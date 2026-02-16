'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import ProgressDots from './ProgressDots'
import { useRouter } from 'next/navigation'
import OptionButton from '@/components/common/OptionButton'
import { montserrat } from '@/app/layout'

export default function Step1() {
    const [selected, setSelected] = useState<string | null>(null)
    const router = useRouter()

    const handleContinue = () => {
        if (!selected) return

        // Later send to backend or store in context
        router.push('/onboarding/2')
    }

    return (
        <div className="relative min-h-screen flex items-center justify-center px-6">

            {/* Skip Button */}
            <button
                type="button"
                onClick={() => router.push('/onboarding/2')}
                className="absolute top-10 right-0 text-sm font-medium text-[#0B2545] hover:underline cursor-pointer"
            >
                Skip
            </button>

            <div className="w-full max-w-md space-y-10">

                {/* Title */}
                <div className="space-y-3">
                    <h1 className={`${montserrat.className} text-3xl font-bold text-[#0B2545]`}>
                        You would like to?
                    </h1>

                    <p className="text-md text-gray-500">
                        Select the option that best describes what you
                        would like to do on our platform.
                    </p>
                </div>

                {/* Options */}
                <div className="space-y-5">
                    <OptionButton
                        label="Buy"
                        selected={selected === "buy"}
                        onClick={() => setSelected("buy")}
                    />

                    <OptionButton
                        label="Sell"
                        selected={selected === "sell"}
                        onClick={() => setSelected("sell")}
                    />

                    <OptionButton
                        label="Both"
                        selected={selected === "both"}
                        onClick={() => setSelected("both")}
                    />
                </div>

                {/* Progress Dots */}
                <ProgressDots total={3} current={1} />

                {/* Continue Button */}
                <Button
                    onClick={handleContinue}
                    disabled={!selected}
                    className="w-full h-11 rounded-full bg-[#2673BE] hover:bg-[#1e5a94]"
                >
                    Continue
                </Button>

            </div>
        </div>
    )
}
