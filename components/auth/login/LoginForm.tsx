'use client'

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { login } from '@/lib/api/login'
import { validateMobile } from '@/utils/validation'
import { montserrat } from '@/app/layout'
import { Check } from 'lucide-react'
import Image from 'next/image'

interface FormErrors {
    mobile?: string
    password?: string
    general?: string
}

export default function LoginForm() {
    const [mobile, setMobile] = useState('')
    const [checked, setChecked] = useState(false);
    const [errors, setErrors] = useState<FormErrors>({})
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const newErrors: FormErrors = {}

        const mobileError = validateMobile(mobile)
        if (mobileError) newErrors.mobile = mobileError

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

        try {
            setIsLoading(true)
            setErrors({})

            await login({ mobile })

            alert('Login successful!')
        } catch (err) {
            setErrors({ general: 'Invalid credentials' })
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="relative flex flex-col justify-center min-h-screen px-4 overflow-hidden">
            <div className='flex flex-col justify-center mx-auto w-full'>
                {/* Logo */}
                <div className="flex items-center gap-3 px-6">
                    <Image
                        src="/images/logo.svg"
                        alt="Zonexa Logo"
                        width={80}
                        height={50}
                        className="shrink-0"
                    />
                    <h1
                        className={`${montserrat.className} text-2xl font-semibold text-[#0B2545] leading-none h-auto`}
                    >
                        ZONEXA
                    </h1>

                </div>

                <div className="w-full max-w-lg z-10 bg-transparent">
                    <Card className="w-full gap-8 bg-transparent">
                        <CardHeader className="space-y-0">
                            <CardTitle>
                                <h1 className={`${montserrat.className} text-3xl text-left text-[#0B2545]`}>Welcome to Zonexa!</h1>
                            </CardTitle>
                            <CardDescription className="text-left text-md">
                                Log In to your Paco account to explore your dream place to live across the whole world!
                            </CardDescription>
                        </CardHeader>

                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-5" noValidate>

                                {/* Mobile Field */}
                                <div className="space-y-2">
                                    <Label htmlFor="mobile">Mobile Numbers</Label>
                                    <Input
                                        id="mobile"
                                        type="tel"
                                        value={mobile}
                                        className="rounded-2xl border bg-white focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:outline-none"
                                        onChange={(e) => setMobile(e.target.value)}
                                        placeholder="Enter your mobile number"
                                        aria-invalid={!!errors.mobile}
                                    />
                                    {errors.mobile && (
                                        <p role="alert" className="text-sm text-red-500">
                                            {errors.mobile}
                                        </p>
                                    )}
                                </div>

                                <div className="flex items-center gap-2 text-sm">
                                    {/* Custom Checkbox */}
                                    <button
                                        type="button"
                                        onClick={() => setChecked(!checked)}
                                        className={`flex h-4 w-4 items-center cursor-pointer justify-center rounded-sm transition-colors ${checked ? "bg-[#2673BE]" : "border border-gray-300 bg-white"
                                            }`}
                                    >
                                        {checked && <Check className="h-4 w-4 text-white" />}
                                    </button>
                                    {/* Text */}
                                    <p className="text-[#6B7280]">
                                        I understand and accept the{" "}
                                        <a
                                            href="#"
                                            className="text-[#2673BE] font-medium underline underline-offset-4"
                                        >
                                            Terms & Conditions.
                                        </a>
                                    </p>
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full bg-[#2673BE] hover:bg-[#1e5a94] border-none rounded-2xl"
                                    disabled={isLoading}
                                >
                                    {isLoading ? 'Logging in...' : 'Login'}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>

            </div>

        </div >
    )
}
