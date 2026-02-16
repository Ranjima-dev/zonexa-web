import { notFound } from "next/navigation";
import Step1 from "@/components/auth/onboarding/Step1";
import Step2 from "@/components/auth/onboarding/Step2";
import Step3 from "@/components/auth/onboarding/Step3";
import Step4 from "@/components/auth/onboarding/Step4";
import Step5 from "@/components/auth/onboarding/Step5";
import Step6 from "@/components/auth/onboarding/Step6";
import Step7 from "@/components/auth/onboarding/Step7";

interface Props {
    params: Promise<{
        step: string;
    }>;
}

export default async function OnboardingStepPage({ params }: Props) {
    const { step } = await params;

    const stepNumber = Number(step);

    if (stepNumber < 1 || stepNumber > 7 || isNaN(stepNumber)) {
        notFound();
    }

    switch (stepNumber) {
        case 1:
            return <Step1 />;
        case 2:
            return <Step2 />;
        case 3:
            return <Step3 />;
        case 4:
            return <Step4 />;
        case 5:
            return <Step5 />;
        case 6:
            return <Step6 />;
        case 7:
            return <Step7 />;
        default:
            notFound();
    }
}
