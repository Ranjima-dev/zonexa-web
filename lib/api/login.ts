type LoginPayload = {
  email: string;
  password: string;
};

export async function login({ email, password }: LoginPayload) {
  await new Promise((resolve) => setTimeout(resolve, 300));

  if (email === "test@test.com" && password === "Abc123!") {
    return { token: "123" };
  }

  throw new Error("Invalid credentials");
}
