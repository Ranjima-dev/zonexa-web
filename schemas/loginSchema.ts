import { z } from "zod";

export const loginSchema = z.object({
  mobile: z
    .string()
    .min(10, "Mobile number must be at least 10 digits")
    .max(15, "Mobile number is too long")
    .regex(/^[0-9]+$/, "Mobile number must contain only digits"),
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: "You must accept Terms & Conditions",
  }),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
