import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MultiStepForm from "./MultiStepForm";

describe("MultiStepForm", () => {
    it('moves from step1 to step 2', async () => {
        const user = userEvent.setup()
        render(<MultiStepForm />)

        await user.type(
            screen.getByPlaceholderText("Name"),
            "John Doe"
        )

        await user.type(
            screen.getByPlaceholderText('Email'),
            'john@test.com'
        )

        await user.type(
            screen.getByPlaceholderText('Password'),
            'Abc123!'
        )

        await user.click(
            screen.getByRole('button', { name: /next/i })
        )

        expect(
            screen.getByText('Step 2')
        ).toBeInTheDocument()
    })

    it("moves from step2 to step 3", async () => {
        const user = userEvent.setup()
        render(<MultiStepForm />)

        // Step 1
        await user.type(screen.getByPlaceholderText("Name"), "John Doe");
        await user.type(screen.getByPlaceholderText("Email"), "john@test.com");
        await user.type(screen.getByPlaceholderText("Password"), "Abc123!");

        await user.click(screen.getByRole("button", { name: /next/i }));

        // Step 2
        expect(screen.getByText("Step 2")).toBeInTheDocument();

        // Step3
        await user.click(screen.getByRole("button", { name: /next/i }));

        expect(screen.getByText("Step 3")).toBeInTheDocument();
    })

    it("uploads profile image in step 2", async () => {
        const user = userEvent.setup();
        render(<MultiStepForm />);

        // Step 1
        await user.type(screen.getByPlaceholderText("Name"), "John Doe");
        await user.type(screen.getByPlaceholderText("Email"), "john@test.com");
        await user.type(screen.getByPlaceholderText("Password"), "Abc123!");
        await user.click(screen.getByRole("button", { name: /next/i }));

        // Now Step 2
        const file = new File(["hello"], "avatar.png", {
            type: "image/png",
        });

        const fileInput = screen.getByTestId("file-input") as HTMLInputElement;

        await user.upload(fileInput, file);

        expect(fileInput.files?.[0]).toBe(file);
        expect(fileInput.files?.[0].name).toBe("avatar.png");

    });

    it("displays entered data in review step", async () => {
        const user = userEvent.setup();
        render(<MultiStepForm />);

        // Step 1
        await user.type(screen.getByPlaceholderText("Name"), "John Doe");
        await user.type(screen.getByPlaceholderText("Email"), "john@test.com");
        await user.type(screen.getByPlaceholderText("Password"), "Abc123!");
        await user.click(screen.getByRole("button", { name: /next/i }));

        // Step 2
        await user.type(screen.getByPlaceholderText("Bio"), "Hello world");
        await user.click(screen.getByRole("button", { name: /next/i }));

        // Step 3
        expect(screen.getByText(/john doe/i)).toBeInTheDocument();
        expect(screen.getByText(/john@test.com/i)).toBeInTheDocument();
        expect(screen.getByText(/hello world/i)).toBeInTheDocument();
    });

    it("goes back from step 2 to step 1", async () => {
        const user = userEvent.setup();
        render(<MultiStepForm />);

        // Step 1 → Step 2
        await user.type(screen.getByPlaceholderText("Name"), "John Doe");
        await user.type(screen.getByPlaceholderText("Email"), "john@test.com");
        await user.type(screen.getByPlaceholderText("Password"), "Abc123!");
        await user.click(screen.getByRole("button", { name: /next/i }));

        expect(screen.getByText("Step 2")).toBeInTheDocument();

        // Back to Step 1
        await user.click(screen.getByRole("button", { name: /back/i }));

        expect(screen.getByText("Step 1")).toBeInTheDocument();
    });

})