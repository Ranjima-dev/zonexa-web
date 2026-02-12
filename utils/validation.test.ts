import { validateEmail, validatePassword } from "./validation";

describe("validateEmail", () => {
  it("returns error if empty", () => {
    expect(validateEmail("")).toBe("Email is required");
  });

  it("returns error for invalid format", () => {
    expect(validateEmail("abc")).toBe("Invalid email format");
  });

  it("returns empty string for valid email", () => {
    expect(validateEmail("test@test.com")).toBe("");
  });
});

describe("validatePassword", () => {
  it("requires password", () => {
    expect(validatePassword("")).toBe("Password is required");
  });

  it("requires minimum length", () => {
    expect(validatePassword("Ab1!")).toBe(
      "Password must be at least 6 characters",
    );
  });

  it("requires uppercase letter", () => {
    expect(validatePassword("abc123!")).toBe(
      "Password must include at least one uppercase letter",
    );
  });

  it("requires lowercase letter", () => {
    expect(validatePassword("ABC123!")).toBe(
      "Password must include at least one lowercase letter",
    );
  });

  it("requires number", () => {
    expect(validatePassword("Abcdef!")).toBe(
      "Password must include at least one number",
    );
  });

  it("requires special character", () => {
    expect(validatePassword("Abc123")).toBe(
      "Password must include at least one special character",
    );
  });

  it("accepts valid password", () => {
    expect(validatePassword("Abc123!")).toBe("");
  });
});
