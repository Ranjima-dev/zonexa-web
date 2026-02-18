import React from "react";
import { Rocket } from "lucide-react";

interface UnderConstructionProps {
    title?: string;
    description?: string;
}

const UnderConstruction: React.FC<UnderConstructionProps> = ({
    title = "Something Amazing is Coming",
    description = "We're working hard to build this feature. Stay tuned for updates.",
}) => {
    return (
        <div className="relative flex items-center justify-center min-h-screen overflow-hidden bg-linear-to-br from-indigo-50 via-white to-purple-50 px-6">

            {/* Animated Background Blobs */}
            <div className="absolute w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob -top-25 -left-25" />
            <div className="absolute w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 -bottom-30 -right-30" />
            <div className="absolute w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000 top-[40%] left-[50%]" />

            {/* Glass Card */}
            <div className="relative z-10 backdrop-blur-2xl bg-white/60 border border-white/40 shadow-2xl rounded-3xl p-12 max-w-lg w-full text-center">

                {/* Animated Icon */}
                <div className="flex justify-center mb-6">
                    <div className="p-5 rounded-2xl bg-linear-to-br from-indigo-600 to-purple-600 text-white shadow-xl animate-bounce">
                        <Rocket size={36} />
                    </div>
                </div>

                {/* Title */}
                <h1 className="text-3xl font-bold text-gray-800 tracking-tight">
                    {title}
                </h1>

                {/* Description */}
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                    {description}
                </p>

                {/* Progress Section */}
                <div className="mt-8">
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div className="h-2 bg-linear-to-r from-indigo-500 to-purple-500 animate-progress rounded-full"></div>
                    </div>
                    <p className="mt-2 text-xs text-gray-500">Loading…</p>
                </div>

            </div>
        </div>
    );
};

export default UnderConstruction;
