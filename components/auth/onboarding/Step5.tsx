'use client'

import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { step5Schema, Step5Values } from "@/schemas/step5Schema"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select"
import { MapPin } from "lucide-react"
import { montserrat } from "@/app/layout"

export default function Step5() {
    const router = useRouter()

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors, isSubmitting },
    } = useForm<Step5Values>({
        resolver: zodResolver(step5Schema),
    })

    const onSubmit = (data: Step5Values) => {
        console.log("Address Data:", data)
        router.push("/onboarding/6")
    }

    return (
        <div className="min-h-screen max-w-xl w-full flex items-center justify-center px-6 py-10">

            <div className="w-full max-w-xl">

                {/* Card Container */}
                <div className="p-8 flex flex-col max-h-[85vh] relative z-10 w-full">

                    {/* Title (fixed) */}
                    <div className="space-y-2 mb-6">
                        <h1 className={`${montserrat.className} text-2xl font-bold text-[#0B2545]`}>
                            Enter company address
                        </h1>
                        <p className="text-gray-500 text-sm">
                            Provide the registered office address as per official records.
                        </p>
                    </div>

                    {/* Scrollable Form */}
                    <div className="overflow-y-auto pr-2 pl-2 flex-1">

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mb-4">

                            {/* Building */}
                            <div className="space-y-2">
                                <Label>Building no</Label>
                                <Input {...register("buildingNo")} className="rounded-full" />
                                {errors.buildingNo && (
                                    <p className="text-sm text-red-500">{errors.buildingNo.message}</p>
                                )}
                            </div>

                            {/* Area */}
                            <div className="space-y-2">
                                <Label>Area, Street, Sector</Label>
                                <Input {...register("area")} className="rounded-full" />
                                {errors.area && (
                                    <p className="text-sm text-red-500">{errors.area.message}</p>
                                )}
                            </div>

                            {/* Landmark */}
                            <div className="space-y-2">
                                <Label>Landmark</Label>
                                <Input {...register("landmark")} className="rounded-full" />
                            </div>

                            {/* Pincode */}
                            <div className="space-y-2">
                                <Label>Pincode</Label>
                                <Input {...register("pincode")} className="rounded-full" />
                                {errors.pincode && (
                                    <p className="text-sm text-red-500">{errors.pincode.message}</p>
                                )}
                            </div>

                            {/* State */}
                            <div className="space-y-2">
                                <Label>State</Label>
                                <Select onValueChange={(value) => setValue("state", value)}>
                                    <SelectTrigger className="rounded-full w-full">
                                        <SelectValue placeholder="Select state" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="maharashtra">Maharashtra</SelectItem>
                                        <SelectItem value="delhi">Delhi</SelectItem>
                                        <SelectItem value="karnataka">Karnataka</SelectItem>
                                    </SelectContent>
                                </Select>
                                {errors.state && (
                                    <p className="text-sm text-red-500">{errors.state.message}</p>
                                )}
                            </div>

                            {/* Country */}
                            <div className="space-y-2">
                                <Label>Country</Label>
                                <Select onValueChange={(value) => setValue("country", value)}>
                                    <SelectTrigger className="rounded-full w-full">
                                        <SelectValue placeholder="Select country" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="india">India</SelectItem>
                                        <SelectItem value="uae">UAE</SelectItem>
                                        <SelectItem value="usa">USA</SelectItem>
                                    </SelectContent>
                                </Select>
                                {errors.country && (
                                    <p className="text-sm text-red-500">{errors.country.message}</p>
                                )}
                            </div>

                            {/* Map Button */}
                            <button
                                type="button"
                                className="w-full h-12 rounded-full bg-white flex items-center justify-center gap-2 shadow-sm border"
                            >
                                <MapPin size={18} className="text-red-500" />
                                Pin Your Address By Map
                            </button>

                            {/* Continue */}
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full h-12 rounded-full bg-[#2673BE] hover:bg-[#1e5a94]"
                            >
                                Continue
                            </Button>

                        </form>

                    </div>
                </div>

            </div>
        </div>
    );

}
