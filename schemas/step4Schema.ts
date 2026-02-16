import { z } from "zod";

export const step4Schema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  mobile: z.string().min(10, "Valid mobile number required"),
  email: z.string().email("Invalid email").optional().or(z.literal("")),
  companyName: z.string().min(1, "Company name is required"),
  designation: z.string().optional(),
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: "You must accept Terms & Conditions",
  }),
});

export type Step4Values = z.infer<typeof step4Schema>;
