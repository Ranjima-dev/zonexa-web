'use client'

import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { step7Schema, Step7Values } from "@/schemas/step7Schema"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { BadgeCheck, CircleAlert, Upload } from "lucide-react"
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
        <div className="min-h-screen w-full flex items-center justify-center px-6 py-10">

            <div className="w-full max-w-lg">

                {/* Card Container */}
                <div className="relative p-8 flex flex-col max-h-[85vh] z-10">

                    {/* Skip Button */}
                    <button
                        type="button"
                        onClick={() => router.replace("/login")}
                        className="absolute top-0 right-6 text-sm font-medium text-[#0B2545] hover:underline cursor-pointer"
                    >
                        Skip
                    </button>

                    {/* Title */}
                    <div className="space-y-2 mb-6 pr-16">
                        <h1 className={`${montserrat.className} text-2xl font-bold text-[#0B2545] w-5/6`}>
                            Get Verified. Get Trust and More Enquiries
                        </h1>
                        <div className="space-y-1 flex flex-col w-full">
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Verified users receive a{" "}
                                <span className="inline-flex items-center gap-1">
                                    <BadgeCheck size={14} color="#2673BE" />
                                </span>{" "}
                                badge on listings, increasing buyer trust and response.
                            </p>

                        </div>

                        <div className="bg-[#FFAA5E33] flex gap-4 px-4 py-2 rounded-md items-center w-full">
                            <span>
                                <CircleAlert size={20} color="#0B2545" />
                            </span>
                            <span className="text-xs text-[#0B2545]">
                                Your KYC is verified directly by Govt authorized agency without any data storage.
                            </span>
                        </div>
                    </div>

                    {/* Scrollable Form Area */}
                    <div className="overflow-y-auto flex-1 pr-2 pl-2">

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                            {/* PAN */}
                            <div className="space-y-2">
                                <Label>PAN Number *</Label>
                                <Input {...register("panNumber")} className="rounded-full" />
                                {errors.panNumber && (
                                    <p className="text-sm text-red-500">{errors.panNumber.message}</p>
                                )}

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

                        </form>

                    </div>

                    {/* Fixed Footer */}
                    <div className="pt-4 mt-4">
                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            onClick={handleSubmit(onSubmit)}
                            className="w-full h-12 rounded-full bg-[#2673BE] hover:bg-[#1e5a94]"
                        >
                            Submit
                        </Button>
                    </div>

                </div>

            </div>
        </div>
    );

}
