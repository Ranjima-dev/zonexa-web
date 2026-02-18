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
import { login } from '@/lib/api/login'
import { montserrat } from '@/app/layout'
import { Check } from 'lucide-react'
import Image from 'next/image'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema, LoginFormValues } from '@/schemas/loginSchema'
import { useRouter } from 'next/navigation'
import { toast } from "sonner";

export default function LoginForm() {

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors, isSubmitting },
    } = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            mobile: '',
            acceptTerms: false,
        },
    })

    const checked = watch('acceptTerms')
    const router = useRouter()

    const onSubmit = async (data: LoginFormValues) => {
        try {
            await login({ mobile: data.mobile })
            toast.success("Login successful!");
            router.push('/verify')
        } catch (error) {
            toast.error("Invalid credentials");
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
                    />
                    <h1 className={`${montserrat.className} text-2xl font-semibold text-[#0B2545]`}>
                        ZONEXA
                    </h1>
                </div>

                <div className="w-full max-w-lg z-10 bg-transparent">
                    <Card className="w-full gap-8 bg-transparent">

                        <CardHeader>
                            <CardTitle>
                                <h1 className={`${montserrat.className} text-2xl text-[#0B2545]`}>
                                    Welcome to Zonexa!
                                </h1>
                            </CardTitle>
                            <CardDescription>
                                Log In to your Paco account to explore your dream place to live across the whole world!
                            </CardDescription>
                        </CardHeader>

                        <CardContent>
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

                                {/* Mobile Field */}
                                <div className="space-y-2">
                                    <Label htmlFor="mobile">Mobile Number</Label>

                                    <Input
                                        id="mobile"
                                        type="tel"
                                        inputMode="numeric"
                                        pattern="[0-9]*"
                                        maxLength={10}
                                        placeholder="Enter your mobile number"
                                        className="rounded-2xl"
                                        {...register("mobile", {
                                            required: "Mobile number is required",
                                            pattern: {
                                                value: /^[0-9]{10}$/,
                                                message: "Enter a valid 10-digit mobile number",
                                            },
                                        })}
                                        onInput={(e: React.FormEvent<HTMLInputElement>) => {
                                            e.currentTarget.value = e.currentTarget.value.replace(/\D/g, "");
                                        }}
                                        aria-invalid={!!errors.mobile}
                                    />

                                    {errors.mobile && (
                                        <p className="text-sm text-red-500">
                                            {errors.mobile.message}
                                        </p>
                                    )}
                                </div>


                                {/* Terms Checkbox */}
                                <div className="flex items-center gap-2 text-sm">
                                    <button
                                        type="button"
                                        onClick={() => setValue('acceptTerms', !checked)}
                                        className={`flex h-4 w-4 items-center justify-center rounded-sm transition-colors cursor-pointer ${checked
                                            ? "bg-[#2673BE]"
                                            : "border border-gray-300 bg-white"
                                            }`}
                                    >
                                        {checked && <Check className="h-4 w-4 text-white" />}
                                    </button>

                                    <p className="text-[#6B7280]">
                                        I understand and accept the{" "}
                                        <span className="text-[#2673BE] font-medium underline underline-offset-4 cursor-pointer">
                                            Terms & Conditions.
                                        </span>
                                    </p>
                                </div>

                                {errors.acceptTerms && (
                                    <p className="text-sm text-red-500">
                                        {errors.acceptTerms.message}
                                    </p>
                                )}

                                <Button
                                    type="submit"
                                    className="w-full bg-[#2673BE] hover:bg-[#1e5a94] rounded-2xl"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Logging in...' : 'Login'}
                                </Button>

                            </form>
                        </CardContent>

                    </Card>
                </div>
            </div>
        </div>
    )
}
