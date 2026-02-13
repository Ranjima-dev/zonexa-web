import { FormData } from './MultiStepForm'

type Props = {
    formData: FormData
    setFormData: React.Dispatch<React.SetStateAction<FormData>>
    nextStep: () => void
    prevStep: () => void
}

export default function StepTwo({
    formData,
    setFormData,
    nextStep,
    prevStep,
}: Props) {

    const handleFileChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        if (e.target.files?.[0]) {
            setFormData({
                ...formData,
                profileImage: e.target.files[0],
            })
        }
    }

    return (
        <div>
            <h2>Step 2</h2>

            <textarea
                placeholder="Bio"
                value={formData.bio}
                onChange={(e) =>
                    setFormData({ ...formData, bio: e.target.value })
                }
            />

            <input type="file" data-testid="file-input" onChange={handleFileChange} />

            <button onClick={prevStep}>Back</button>
            <button onClick={nextStep}>Next</button>
        </div>
    )
}
