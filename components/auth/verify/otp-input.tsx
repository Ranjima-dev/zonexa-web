'use client'

import React, { useRef } from "react";

interface OtpInputProps {
    value: string;
    onChange: (value: string) => void;
    length?: number;
}

export function OtpInput({ value, onChange, length = 4 }: OtpInputProps) {
    const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

    const handleChange = (index: number, val: string) => {
        if (!/^\d?$/.test(val)) return;

        const newOtp = value.split("");
        newOtp[index] = val;
        const updated = newOtp.join("").padEnd(length, "");
        onChange(updated);

        if (val && index < length - 1) {
            inputsRef.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace" && !value[index] && index > 0) {
            inputsRef.current[index - 1]?.focus();
        }
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault();
        const pasted = e.clipboardData.getData("text").slice(0, length);
        if (!/^\d+$/.test(pasted)) return;
        onChange(pasted);
    };

    return (
        <div className="flex gap-6 justify-center">
            {Array.from({ length }).map((_, index) => (
                <input
                    key={index}
                    ref={(el) => {
                        inputsRef.current[index] = el;
                    }}
                    type="text"
                    maxLength={1}
                    value={value[index] || ""}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={handlePaste}
                    className="h-15 w-15 bg-white rounded-full text-center text-3xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2673BE]/40"
                />
            ))}
        </div>
    );
}
