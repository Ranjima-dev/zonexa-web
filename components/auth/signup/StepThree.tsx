import { FormData } from './MultiStepForm'

type Props = {
    formData: FormData
    prevStep: () => void
}

export default function StepThree({
    formData,
    prevStep,
}: Props) {

    const handleSubmit = () => {
        alert('Submitted!')
    }

    return (
        <div>
            <h2>Step 3</h2>

            <p>Name: {formData.name}</p>
            <p>Email: {formData.email}</p>
            <p>Bio: {formData.bio}</p>
            <p>
                Image: {formData.profileImage?.name || 'No file'}
            </p>

            <button onClick={prevStep}>Back</button>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
