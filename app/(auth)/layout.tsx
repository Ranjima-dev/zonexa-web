import ImageGrid from "@/components/auth/ImageGrid";
import type { ReactNode } from "react";
import { montserrat } from "../layout";
import Image from "next/image";

export default function AuthLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <div className="h-screen overflow-hidden flex">

            {/* Left Side */}
            <div className="hidden lg:flex w-1/2 bg-white">
                <div className="w-full h-full p-5">
                    <div className="bg-[#F3F8FD] w-full h-full rounded-[40px] flex flex-col overflow-hidden">

                        {/* Image Area */}
                        <div className="relative flex-1 overflow-hidden p-5">
                            <ImageGrid />

                            <div className="absolute bottom-0 left-0 w-full h-50 pointer-events-none bg-linear-to-t from-white to-transparent" />
                        </div>

                        {/* Bottom Text Area */}
                        <div className="bg-white px-10 pb-4 relative z-10 flex flex-col gap-2">
                            <div>
                                <h2 className={`${montserrat.className} w-87.5 text-2xl mb-0 font-bold text-[#0B2545]`}>
                                    Land to Logistics
                                </h2>
                                <h2 className={`${montserrat.className} w-full text-2xl mb-0 font-bold text-[#0B2545]`}>
                                    India‘s Platform for Land, Industrial, and
                                </h2>
                                <h2 className={`${montserrat.className} w-87.5 text-2xl mb-0 font-bold text-[#0B2545]`}>
                                    Logistics Real Estate
                                </h2>
                            </div>

                            <p className="text-[#6B7280] text-md">Search | Select | Connect</p>
                        </div>

                    </div>
                </div>
            </div>


            {/* Right Side */}
            <div className="w-full lg:w-1/2 relative min-h-screen flex flex-col bg-white">

                {/* Centered Content */}
                <div className="flex-1 flex items-center justify-center p-6 z-10">
                    {children}
                </div>

                {/* Watermark */}
                <div className="absolute bottom-0 left-0 w-full h-70 pointer-events-none z-0">
                    <Image
                        src="/images/login-watermark.png"
                        alt="image-watermark"
                        fill
                        className="w-full h-full object-cover opacity-20"
                        priority
                    />
                </div>

            </div>


        </div>
    );
}
