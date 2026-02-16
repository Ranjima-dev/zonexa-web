'use client'

import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { step7Schema, Step7Values } from "@/schemas/step7Schema"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Upload } from "lucide-react"
import { montserrat } from "@/app/layout"

export default function Step7() {
    const router = useRouter()

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors, isSubmitting },
    } = useForm<Step7Values>({
        resolver: zodResolver(step7Schema),
    })

    const onSubmit = (data: Step7Values) => {
        console.log("KYC Data:", data)
        router.replace("/login")
    }

    const handleFileChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        field: keyof Step7Values
    ) => {
        if (e.target.files?.[0]) {
            setValue(field, e.target.files[0])
        }
    }

    return (
        <div className="relative min-h-screen px-6 py-10 flex justify-center">
            <div className="w-full max-w-md space-y-8">

                {/* Skip Button */}
                <button
                    type="button"
                    onClick={() => router.replace("/login")}
                    className="absolute top-0 right-0 text-sm font-medium text-[#0B2545] hover:underline cursor-pointer"
                >
                    Skip
                </button>

                {/* Title */}
                <div className="space-y-2">
                    <h1 className={`${montserrat.className} text-3xl font-bold text-[#0B2545]`}>
                        Enter KYC Details
                    </h1>
                    <p className="text-gray-500">
                        Provide your KYC information to verify and secure your account.
                    </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                    {/* PAN */}
                    <div className="space-y-2">
                        <Label>PAN Number *</Label>
                        <Input {...register("panNumber")} className="rounded-full" />
                        {errors.panNumber && (
                            <p className="text-sm text-red-500">{errors.panNumber.message}</p>
                        )}


                        {/* Upload PAN */}
                        <label className="w-full h-11 rounded-full bg-gray-100 border border-dashed flex items-center justify-center gap-2 cursor-pointer">
                            <Upload size={18} />
                            Upload PAN card
                            <input
                                type="file"
                                hidden
                                onChange={(e) => handleFileChange(e, "panFile")}
                            />
                        </label>
                    </div>

                    {/* Aadhaar */}
                    <div className="space-y-2">
                        <Label>Aadhaar Number *</Label>
                        <Input {...register("aadhaarNumber")} className="rounded-full" />
                        {errors.aadhaarNumber && (
                            <p className="text-sm text-red-500">{errors.aadhaarNumber.message}</p>
                        )}

                        {/* Upload Aadhaar */}
                        <label className="w-full h-11 rounded-full bg-gray-100 border border-dashed flex items-center justify-center gap-2 cursor-pointer">
                            <Upload size={18} />
                            Upload Aadhaar card
                            <input
                                type="file"
                                hidden
                                onChange={(e) => handleFileChange(e, "aadhaarFile")}
                            />
                        </label>
                    </div>


                    {/* GST */}
                    <div className="space-y-2">
                        <Label>GST Number</Label>
                        <Input {...register("gstNumber")} className="rounded-full" />
                    </div>

                    {/* CIN */}
                    <div className="space-y-2">
                        <Label>CIN Number</Label>
                        <Input {...register("cinNumber")} className="rounded-full" />
                    </div>

                    {/* Authority Letter */}
                    <label className="w-full h-11 rounded-full bg-gray-100 border border-dashed flex items-center justify-center gap-2 cursor-pointer">
                        <Upload size={18} />
                        Upload Authority Letter
                        <input
                            type="file"
                            hidden
                            onChange={(e) => handleFileChange(e, "authorityFile")}
                        />
                    </label>

                    {/* Submit */}
                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-11 rounded-full bg-[#2673BE] hover:bg-[#1e5a94]"
                    >
                        Submit
                    </Button>

                </form>
            </div>
        </div>
    )
}
