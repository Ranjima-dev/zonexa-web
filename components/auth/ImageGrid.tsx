"use client";

import Image from "next/image";

const images = [
    "/images/img-1.png",
    "/images/img-2.png",
    "/images/img-3.png",
    "/images/img-4.png",
    "/images/img-5.png",
    "/images/img-6.png",
    "/images/img-7.png",
    "/images/img-8.png",
    "/images/img-9.png",
];

export default function ImageGrid() {
    return (
        <div className="relative w-full h-full overflow-hidden">
            {/* Grid */}
            <div className="grid grid-cols-3 gap-2 max-w-full mx-auto">

                {/* Column 1 */}
                <div className="flex flex-col gap-2">
                    <ImageCard src={images[0]} height="h-[240px]" />
                    <ImageCard src={images[3]} height="h-[300px]" />
                    <ImageCard src={images[6]} height="h-[160px]" />
                </div>

                {/* Column 2 */}
                <div className="flex flex-col gap-2">
                    <ImageCard src={images[1]} height="h-[300px]" />
                    <ImageCard src={images[4]} height="h-[260px]" />
                    <ImageCard src={images[7]} height="h-[120px]" />
                </div>

                {/* Column 3 */}
                <div className="flex flex-col gap-2">
                    <ImageCard src={images[2]} height="h-[280px]" />
                    <ImageCard src={images[5]} height="h-[260px]" />
                    <ImageCard src={images[8]} height="h-[220px]" />
                </div>
            </div>

        </div>
    );
}

function ImageCard({ src, height }: { src: string; height: string }) {
    return (
        <div className={`relative ${height} rounded-[28px] overflow-hidden shadow-sm`}>
            <Image
                src={src}
                alt="property"
                fill
                className="object-cover"
            />
        </div>
    );
}
