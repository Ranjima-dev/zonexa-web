export function validateEmail(email: string): string {
  if (!email) return "Email is required";

  if (!/\S+@\S+\.\S+/.test(email)) {
    return "Invalid email format";
  }

  return "";
}

export function validatePassword(password: string): string {
  if (!password) return "Password is required";

  if (password.length < 6) {
    return "Password must be at least 6 characters";
  }

  if (!/[A-Z]/.test(password)) {
    return "Password must include at least one uppercase letter";
  }

  if (!/[a-z]/.test(password)) {
    return "Password must include at least one lowercase letter";
  }

  if (!/[0-9]/.test(password)) {
    return "Password must include at least one number";
  }

  if (!/[!@#$%^&*(),.?\":{}|<>]/.test(password)) {
    return "Password must include at least one special character";
  }

  return "";
}
