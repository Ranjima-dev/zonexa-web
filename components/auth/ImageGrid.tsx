"use client";

import Image from "next/image";

const images = [
    "/images/img-1.png",
    "/images/img-2.jpg",
    "/images/img-3.jpg",
    "/images/img-4.jpg",
    "/images/img-5.png",
    "/images/img-6.png",
    "/images/img-7.png",
    "/images/img-8.png",
    "/images/img-9.png",
];

export default function ImageGrid() {
    return (
        <div className="w-full h-full overflow-hidden">
            <div className="columns-3 gap-2 space-y-2">
                {images.map((src, index) => (
                    <div
                        key={index}
                        className="break-inside-avoid overflow-hidden shadow-sm"
                    >
                        <Image
                            src={src}
                            alt={`property-${index}`}
                            width={500}
                            height={900}
                            className="w-full h-auto rounded-md object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
