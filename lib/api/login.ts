type LoginPayload = {
  mobile: string;
};

export async function login({ mobile }: LoginPayload) {
  await new Promise((resolve) => setTimeout(resolve, 300));

  if (mobile === "1234567890") {
    return { token: "123" };
  }

  throw new Error("Invalid credentials");
}
