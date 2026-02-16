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

                            <div className="absolute bottom-0 left-0 w-full h-70 pointer-events-none bg-linear-to-t from-white to-transparent" />
                        </div>

                        {/* Bottom Text Area */}
                        <div className="bg-white px-10 pb-4 relative z-10 flex flex-col gap-2">
                            <h2 className={`${montserrat.className} w-87.5 text-3xl font-bold text-[#0B2545]`}>
                                Your Complete Property Marketplace
                            </h2>

                            <p className="text-[#6B7280]">Discover, list, and manage properties with a seamless experience.</p>
                        </div>

                    </div>
                </div>
            </div>


            {/* Right Side */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-6 relative">
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
