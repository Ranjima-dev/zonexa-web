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

                            <div className="absolute bottom-0 left-0 w-full h-30 pointer-events-none bg-linear-to-t from-[#F3F8FD] via-[#F3F8FD]/80 to-transparent" />
                        </div>

                        {/* Bottom Text Area */}
                        <div className="bg-linear-to-t from-[#FFF] via-[#F3F8FD]/80 to-transparent px-10 pb-2 pt-2 relative z-10 flex flex-col gap-2">
                            <div className="flex flex-col gap-0">
                                <h2 className={`${montserrat.className} w-87.5 text-2xl font-bold text-[#0B2545]`}>
                                    Land to Logistics
                                </h2>
                                <h2 className={`${montserrat.className} w-150 text-2xl font-bold text-[#0B2545]`}>
                                    India‘s Platform for Land, Industrial, and
                                </h2>
                                <h2 className={`${montserrat.className} w-87.5 text-2xl font-bold text-[#0B2545]`}>Logistics Real Estate</h2>
                            </div>

                            <p className="text-[#6B7280] text-sm">Search | Select | Connect</p>
                        </div>

                    </div>
                </div>
            </div>


            {/* Right Side */}
            <div className="w-full lg:w-1/2 flex justify-center relative overflow-y-auto">
                {children}

                <div className="absolute bottom-0 right-0 w-full h-100 pointer-events-none">
                    <Image
                        src="/images/login-watermark.png"
                        alt="image-watermark"
                        fill
                        className="object-fit"
                        priority
                    />
                </div>
            </div>

        </div>
    );
}
