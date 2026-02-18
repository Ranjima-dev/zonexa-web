import { notFound } from "next/navigation";
import OnboardingForm from "@/components/auth/onboarding/OnboardingForm";
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

    if (isNaN(stepNumber)) {
        notFound();
    }

    if (stepNumber === 1) {
        return <OnboardingForm />;
    }

    const stepComponents: Record<number, React.ComponentType> = {
        4: Step4,
        5: Step5,
        6: Step6,
        7: Step7,
    };

    const StepComponent = stepComponents[stepNumber];

    if (!StepComponent) {
        notFound();
    }

    return <StepComponent />;
}
