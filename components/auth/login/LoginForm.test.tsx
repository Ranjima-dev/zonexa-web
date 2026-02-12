import { render, screen, waitFor } from "@testing-library/react";
import LoginForm from "./LoginForm";
import userEvent from "@testing-library/user-event";
import { login } from "@/lib/api/login";

jest.mock('@/lib/api/login', () => ({
    login: jest.fn()
}))

describe("LoginForm", () => {

    beforeEach(() => {
        jest.clearAllMocks()
    });

    it("renders the login form", () => {
        render(<LoginForm />)
        const heading = screen.getByRole("heading", {
            name: /login/i,
        })
        expect(heading).toBeInTheDocument()
    })

    it('renders email input', () => {
        render(<LoginForm />)
        const emailInput = screen.getByLabelText(/email/i)

        expect(emailInput).toBeInTheDocument()
    })

    it('renders password input', () => {
        render(<LoginForm />)
        const passwordInput = screen.getByLabelText(/password/i)

        expect(passwordInput).toBeInTheDocument()
    })

    it('renders login button', () => {
        render(<LoginForm />)
        const loginButton = screen.getByRole("button", {
            name: /login/i,
        })
        expect(loginButton).toBeInTheDocument()
    })

    it("calls login API successfully", async () => {
        const user = userEvent.setup();

        (login as jest.Mock).mockResolvedValue({
            token: "123",
        });

        const alertSpy = jest
            .spyOn(window, "alert")
            .mockImplementation(() => { });

        render(<LoginForm />);

        await user.type(
            screen.getByLabelText(/email/i),
            "test@test.com"
        );

        await user.type(screen.getByLabelText(/password/i), "Abc123!");

        await user.click(
            screen.getByRole("button", { name: /login/i })
        );

        expect(login).toHaveBeenCalledWith({
            email: "test@test.com",
            password: "Abc123!",
        });

        await waitFor(() => {
            expect(alertSpy).toHaveBeenCalledWith(
                "Login successful!"
            );
        });
    });

    it("shows error when login fails", async () => {
        const user = userEvent.setup();

        (login as jest.Mock).mockRejectedValue(
            new Error("Invalid credentials")
        );

        render(<LoginForm />);

        await user.type(
            screen.getByLabelText(/email/i),
            "test@test.com"
        );

        await user.type(
            screen.getByLabelText(/password/i),
            "Abc123!"
        );

        await user.click(
            screen.getByRole("button", { name: /login/i })
        );

        expect(
            await screen.findByRole("alert")
        ).toHaveTextContent("Invalid credentials");
    });

})