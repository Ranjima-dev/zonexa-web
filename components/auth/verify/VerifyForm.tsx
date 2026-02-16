'use client'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { otpSchema, OtpFormValues } from '@/schemas/otpSchema'
import { OtpInput } from './otp-input'
import { useRouter } from 'next/navigation'


export default function VerifyForm() {

    const {
        handleSubmit,
        setValue,
        watch,
        formState: { errors, isSubmitting }
    } = useForm<OtpFormValues>({
        resolver: zodResolver(otpSchema),
        defaultValues: { otp: "" }
    })
    const router = useRouter()
    const otpValue = watch("otp")

    const onSubmit = async (data: OtpFormValues) => {
        router.push('/dashboard')
        console.log("OTP Submitted:", data.otp)
    }

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <Card className="w-full max-w-xl bg-transparent border-none shadow-none">

                <CardHeader className="space-y-0">
                    <CardTitle className="text-3xl text-[#0B2545]">
                        OTP Verification
                    </CardTitle>

                    <CardDescription className="text-lg">
                        A verification code has been sent to
                    </CardDescription>

                    <p className="text-xl text-[#2673BE] font-medium">
                        +971 1 123 123 1234
                    </p>
                </CardHeader>

                <CardContent className="space-y-8">

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">

                        <OtpInput
                            value={otpValue}
                            onChange={(val) => setValue("otp", val)}
                        />

                        {errors.otp && (
                            <p className="text-center text-sm text-red-500">
                                {errors.otp.message}
                            </p>
                        )}

                        <div className="text-left text-lg">
                            Didn’t receive the OTP?{" "}
                            <button
                                type="button"
                                className="text-[#2673BE] font-medium cursor-pointer hover:underline"
                            >
                                Resend
                            </button>
                        </div>

                        <Button
                            type="submit"
                            className="w-full h-11 rounded-full bg-[#2673BE] hover:bg-[#1e5a94] cursor-pointer"
                            disabled={isSubmitting}
                        >
                            Submit
                        </Button>

                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
