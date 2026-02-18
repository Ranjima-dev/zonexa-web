"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import OptionButton from "@/components/common/OptionButton";
import MultiSelectOption from "@/components/common/MultiSelectOption";
import ProgressDots from "./ProgressDots";
import { montserrat } from "@/app/layout";
import { useRouter } from "next/navigation";

const industries = [
    "Industrial",
    "Logistics",
    "Data Center",
    "Pre-Lease",
    "Land",
];

export default function OnboardingForm() {
    const router = useRouter();

    const [step, setStep] = useState(1);
    const [purpose, setPurpose] = useState<string | null>(null);
    const [representation, setRepresentation] = useState<string | null>(null);
    const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);

    const toggleIndustry = (value: string) => {
        setSelectedIndustries((prev) =>
            prev.includes(value)
                ? prev.filter((item) => item !== value)
                : [...prev, value]
        );
    };

    const handleSubmit = () => {
        if (!purpose || !representation || selectedIndustries.length === 0) return;

        console.log({
            purpose,
            representation,
            selectedIndustries,
        });

        router.push("/onboarding/4");
    };


    const isDisabled =
        (step === 1 && !purpose) ||
        (step === 2 && !representation) ||
        (step === 3 && selectedIndustries.length === 0);

    return (
        <div className="min-h-screen w-full max-w-xl flex items-center justify-center">

            <div className="w-full max-w-lg">

                {/* Card */}
                <div className="bg-white flex flex-col max-h-[85vh] relative z-10 p-8">

                    <button
                        type="button"
                        onClick={() => router.replace("/login")}
                        className="absolute -top-4 right-6 text-sm font-medium text-[#0B2545] hover:underline cursor-pointer"
                    >
                        Skip
                    </button>

                    {/* Scrollable Content */}
                    <div className="overflow-y-auto flex-1 space-y-10 pr-4">

                        {/* Section 1 */}
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <h1 className={`${montserrat.className} text-2xl font-bold text-[#0B2545]`}>
                                    You would like to?
                                </h1>
                                <p className="text-gray-500 text-sm">
                                    Select what best describes your intent.
                                </p>
                            </div>

                            <div className="space-y-3">
                                <OptionButton
                                    label="Buy"
                                    selected={purpose === "buy"}
                                    onClick={() => setPurpose("buy")}
                                />
                                <OptionButton
                                    label="Sell"
                                    selected={purpose === "sell"}
                                    onClick={() => setPurpose("sell")}
                                />
                                <OptionButton
                                    label="Both"
                                    selected={purpose === "both"}
                                    onClick={() => setPurpose("both")}
                                />
                            </div>
                        </div>

                        {/* Section 2 */}
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <h1 className={`${montserrat.className} text-2xl font-bold text-[#0B2545]`}>
                                    Property Representation?
                                </h1>
                                <p className="text-gray-500 text-sm">
                                    Choose how you represent the property.
                                </p>
                            </div>

                            <div className="space-y-3">
                                <OptionButton
                                    label="Yourself"
                                    selected={representation === "self"}
                                    onClick={() => setRepresentation("self")}
                                />
                                <OptionButton
                                    label="On behalf of others"
                                    selected={representation === "others"}
                                    onClick={() => setRepresentation("others")}
                                />
                            </div>
                        </div>

                        {/* Section 3 */}
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <h1 className={`${montserrat.className} text-2xl font-bold text-[#0B2545]`}>
                                    Industries Served
                                </h1>
                                <p className="text-gray-500 text-sm">
                                    Select industries your company serves.
                                </p>
                            </div>

                            <div className="space-y-3">
                                {industries.map((industry) => (
                                    <MultiSelectOption
                                        key={industry}
                                        label={industry}
                                        selected={selectedIndustries.includes(industry)}
                                        onClick={() => toggleIndustry(industry)}
                                    />
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Footer */}
                    <div className="pt-6 mt-6">
                        <Button
                            onClick={handleSubmit}
                            disabled={!purpose || !representation || selectedIndustries.length === 0}
                            className="w-full h-12 rounded-full bg-[#2673BE] hover:bg-[#1e5a94]"
                        >
                            Continue
                        </Button>
                    </div>

                </div>

            </div>

        </div>
    );

}
