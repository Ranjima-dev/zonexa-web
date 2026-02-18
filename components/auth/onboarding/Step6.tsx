'use client'

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export default function Step6() {
    const router = useRouter()

    const handlePinLocation = () => {
        // Later: Save lat/lng
        router.push("/onboarding/7")
    }

    return (
        <div className="min-h-screen w-full flex items-center justify-center">

            <div className="w-full max-w-md">

                {/* Card Container */}
                <div className="bg-white flex flex-col max-h-[85vh]">

                    {/* Scrollable Content */}
                    <div className="overflow-y-auto flex-1 pr-2 space-y-6">

                        {/* Map Container */}
                        <div className="rounded-2xl overflow-hidden h-80 w-full shadow-md">
                            <iframe
                                width="100%"
                                height="100%"
                                loading="lazy"
                                allowFullScreen
                                src="https://www.google.com/maps?q=JP+Nagar+7th+Phase+Bangalore&output=embed"
                            />
                        </div>

                        {/* Search Bar */}
                        <div className="relative">
                            <Search
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                                size={18}
                            />
                            <input
                                type="text"
                                placeholder="Search for location"
                                className="w-full h-12 pl-12 pr-4 rounded-full bg-gray-100 focus:outline-none"
                            />
                        </div>

                        {/* Selected Location Card */}
                        <div className="space-y-2">
                            <h3 className="text-lg font-semibold text-[#0B2545]">
                                JP Nagar 7th Phase
                            </h3>
                            <p className="text-gray-500 text-sm">
                                JP Nagar 7th Phase, Bengaluru, 560111, Karnataka, India
                            </p>
                        </div>

                    </div>

                    {/* Fixed Footer */}
                    <div className="pt-4 mt-4">
                        <Button
                            onClick={handlePinLocation}
                            className="w-full h-12 rounded-full bg-[#2673BE] hover:bg-[#1e5a94]"
                        >
                            Pin your location
                        </Button>
                    </div>

                </div>

            </div>
        </div>
    );

}
