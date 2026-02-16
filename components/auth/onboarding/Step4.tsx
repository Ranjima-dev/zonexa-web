'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { step4Schema, Step4Values } from "@/schemas/step4Schema"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Check, Camera } from "lucide-react"
import { montserrat } from "@/app/layout"

export default function Step4() {
    const router = useRouter()
    const [imagePreview, setImagePreview] = useState<string | null>(null)

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors, isSubmitting },
    } = useForm<Step4Values>({
        resolver: zodResolver(step4Schema),
        defaultValues: {
            acceptTerms: false,
        },
    })

    const acceptTerms = watch("acceptTerms")

    const handleImageUpload = (file: File) => {
        const reader = new FileReader()
        reader.onload = () => {
            setImagePreview(reader.result as string)
        }
        reader.readAsDataURL(file)
    }

    const onSubmit = (data: Step4Values) => {
        console.log("Profile Data:", data)
        router.push("/onboarding/5")
    }

    return (
        <div className="min-h-screen flex justify-center px-6 py-8">
            <div className="w-full max-w-md space-y-8">

                {/* Title */}
                <div className="space-y-2">
                    <h1 className={`${montserrat.className} text-3xl font-bold text-[#0B2545]`}>
                        Setup your profile
                    </h1>
                    <p className="text-gray-500">
                        Log In to your Paco account to explore your dream place to live across the whole world!
                    </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                    {/* Profile Picture */}
                    <div className="flex items-center gap-4">
                        <div className="h-20 w-20 rounded-full bg-gray-200 overflow-hidden">
                            {imagePreview && (
                                <img src={imagePreview} alt="Preview" className="h-full w-full object-cover" />
                            )}
                        </div>

                        <label className="cursor-pointer flex items-center gap-2 border border-[#2673BE] text-[#2673BE] px-4 py-2 rounded-full">
                            <Camera size={18} />
                            Click Picture
                            <input
                                type="file"
                                accept="image/*"
                                hidden
                                onChange={(e) => {
                                    if (e.target.files?.[0]) {
                                        handleImageUpload(e.target.files[0])
                                    }
                                }}
                            />
                        </label>
                    </div>

                    {/* Full Name */}
                    <div className="space-y-1">
                        <Label>Full Name <span className="text-red-500">*</span></Label>
                        <Input {...register("fullName")} className="rounded-full" />
                        {errors.fullName && (
                            <p className="text-sm text-red-500">{errors.fullName.message}</p>
                        )}
                    </div>

                    {/* Mobile */}
                    <div className="space-y-1">
                        <Label>Mobile Number <span className="text-red-500">*</span></Label>
                        <Input {...register("mobile")} className="rounded-full" />
                        {errors.mobile && (
                            <p className="text-sm text-red-500">{errors.mobile.message}</p>
                        )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                        <Label>Email ID</Label>
                        <Input {...register("email")} className="rounded-full" />
                        {errors.email && (
                            <p className="text-sm text-red-500">{errors.email.message}</p>
                        )}
                    </div>

                    {/* Company */}
                    <div className="space-y-1">
                        <Label>Company Name <span className="text-red-500">*</span></Label>
                        <Input {...register("companyName")} className="rounded-full" />
                        {errors.companyName && (
                            <p className="text-sm text-red-500">{errors.companyName.message}</p>
                        )}
                    </div>

                    {/* Designation */}
                    <div className="space-y-1">
                        <Label>Designation</Label>
                        <Input {...register("designation")} className="rounded-full" />
                    </div>

                    {/* Terms */}
                    <div className="flex items-center gap-3 text-sm mb-4">
                        <button
                            type="button"
                            onClick={() => setValue("acceptTerms", !acceptTerms)}
                            className={`h-5 w-5 rounded-md flex items-center justify-center border ${acceptTerms ? "bg-[#2673BE] border-[#2673BE]" : "border-gray-300"
                                }`}
                        >
                            {acceptTerms && <Check size={14} className="text-white" />}
                        </button>

                        <p>I understand and accept the Terms & Conditions.</p>
                    </div>

                    {errors.acceptTerms && (
                        <p className="text-sm text-red-500">
                            {errors.acceptTerms.message}
                        </p>
                    )}

                    {/* Continue */}
                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-12 rounded-full bg-[#2673BE] hover:bg-[#1e5a94] mb-8"
                    >
                        Continue
                    </Button>

                </form>
            </div>
        </div>
    )
}
