import { FormData } from './MultiStepForm'

type Props = {
    formData: FormData
    setFormData: React.Dispatch<React.SetStateAction<FormData>>
    nextStep: () => void
}

export default function StepOne({
    formData,
    setFormData,
    nextStep,
}: Props) {

    const handleNext = () => {
        if (!formData.name || !formData.email || !formData.password) {
            alert('All fields required')
            return
        }

        nextStep()
    }

    return (
        <div>
            <h2>Step 1</h2>

            <input
                placeholder="Name"
                value={formData.name}
                onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                }
            />

            <input
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                }
            />

            <input
                placeholder="Password"
                type="password"
                value={formData.password}
                onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                }
            />

            <button onClick={handleNext}>Next</button>
        </div>
    )
}
