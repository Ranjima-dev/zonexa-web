'use client'

import { useState } from 'react'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'

export type FormData = {
    name: string
    email: string
    password: string
    bio: string
    profileImage: File | null
}

export default function MultiStepForm() {
    const [step, setStep] = useState(1)

    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        password: '',
        bio: '',
        profileImage: null,
    })

    const nextStep = () => setStep((prev) => prev + 1)
    const prevStep = () => setStep((prev) => prev - 1)

    return (
        <div>
            {step === 1 && (
                <StepOne
                    formData={formData}
                    setFormData={setFormData}
                    nextStep={nextStep}
                />
            )}

            {step === 2 && (
                <StepTwo
                    formData={formData}
                    setFormData={setFormData}
                    nextStep={nextStep}
                    prevStep={prevStep}
                />
            )}

            {step === 3 && (
                <StepThree
                    formData={formData}
                    prevStep={prevStep}
                />
            )}
        </div>
    )
}
