'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import ProgressDots from './ProgressDots'
import OptionButton from '@/components/common/OptionButton'
import { montserrat } from '@/app/layout'

export default function Step2() {
    const [selected, setSelected] = useState<string | null>(null)
    const router = useRouter()

    const handleContinue = () => {
        if (!selected) return

        // Later: store in onboarding context / API
        router.push('/onboarding/3')
    }

    return (
        <div className="relative min-h-screen flex items-center justify-center px-6">

            {/* Skip */}
            <button
                type="button"
                onClick={() => router.push('/onboarding/3')}
                className="absolute top-10 right-0 text-sm font-medium text-[#0B2545] hover:underline cursor-pointer"
            >
                Skip
            </button>

            <div className="w-full max-w-md space-y-10">

                {/* Title */}
                <div className="space-y-3">
                    <h1 className={`${montserrat.className} text-3xl font-bold text-[#0B2545]`}>
                        Property Representation?
                    </h1>

                    <p className="text-lg text-gray-500">
                        Choose how you represent the property from the options below.
                    </p>
                </div>

                {/* Options */}
                <div className="space-y-5">
                    <OptionButton
                        label="Yourself"
                        selected={selected === "self"}
                        onClick={() => setSelected("self")}
                    />

                    <OptionButton
                        label="On behalf of others"
                        selected={selected === "others"}
                        onClick={() => setSelected("others")}
                    />
                </div>

                {/* Progress */}
                <ProgressDots total={3} current={2} />

                {/* Continue */}
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
