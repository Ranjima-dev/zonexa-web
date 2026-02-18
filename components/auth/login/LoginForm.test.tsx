import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "./LoginForm";
import { login } from "@/lib/api/login";

// Mock login API
jest.mock("@/lib/api/login", () => ({
    login: jest.fn(),
}));

// Mock next/navigation
const pushMock = jest.fn();

jest.mock("next/navigation", () => ({
    useRouter: () => ({
        push: pushMock,
    }),
}));

describe("LoginForm", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("renders the login form", () => {
        render(<LoginForm />);

        expect(
            screen.getByRole("heading", { name: /welcome to zonexa/i })
        ).toBeInTheDocument();

        expect(
            screen.getByLabelText(/mobile number/i)
        ).toBeInTheDocument();

        expect(
            screen.getByRole("button", { name: /login/i })
        ).toBeInTheDocument();
    });

    it("shows validation error for short mobile number", async () => {
        const user = userEvent.setup();
        render(<LoginForm />);

        await user.type(
            screen.getByLabelText(/mobile number/i),
            "123"
        );

        await user.click(
            screen.getByRole("button", { name: /login/i })
        );

        expect(
            await screen.findByText(
                /mobile number must be at least 10 digits/i
            )
        ).toBeInTheDocument();
    });

    it("shows validation error if terms not accepted", async () => {
        const user = userEvent.setup();
        render(<LoginForm />);

        await user.type(
            screen.getByLabelText(/mobile number/i),
            "9876543210"
        );

        await user.click(
            screen.getByRole("button", { name: /login/i })
        );

        expect(
            await screen.findByText(
                /you must accept terms & conditions/i
            )
        ).toBeInTheDocument();
    });

    it("calls login API on successful submission", async () => {
        const user = userEvent.setup();

        (login as jest.Mock).mockResolvedValue({
            success: true,
        });

        const alertSpy = jest
            .spyOn(window, "alert")
            .mockImplementation(() => { });

        render(<LoginForm />);

        await user.type(
            screen.getByLabelText(/mobile number/i),
            "9876543210"
        );

        // click checkbox button (first non-submit button)
        const checkboxButton = screen.getAllByRole("button")[0];
        await user.click(checkboxButton);

        await user.click(
            screen.getByRole("button", { name: /login/i })
        );

        await waitFor(() => {
            expect(login).toHaveBeenCalledWith({
                mobile: "9876543210",
            });
        });

        expect(alertSpy).toHaveBeenCalledWith(
            "Login successful!"
        );

        expect(pushMock).toHaveBeenCalledWith("/verify");
    });

    it("shows error alert when login fails", async () => {
        const user = userEvent.setup();

        (login as jest.Mock).mockRejectedValue(
            new Error("Invalid credentials")
        );

        const alertSpy = jest
            .spyOn(window, "alert")
            .mockImplementation(() => { });

        render(<LoginForm />);

        await user.type(
            screen.getByLabelText(/mobile number/i),
            "9876543210"
        );

        const checkboxButton = screen.getAllByRole("button")[0];
        await user.click(checkboxButton);

        await user.click(
            screen.getByRole("button", { name: /login/i })
        );

        await waitFor(() => {
            expect(alertSpy).toHaveBeenCalledWith(
                "Invalid credentials"
            );
        });
    });
});
