import { z } from "zod";

export const step7Schema = z.object({
  panNumber: z.string().min(10, "Valid PAN number required"),
  aadhaarNumber: z.string().min(12, "Valid Aadhaar number required"),
  gstNumber: z.string().optional(),
  cinNumber: z.string().optional(),
  panFile: z.any(),
  aadhaarFile: z.any(),
  authorityFile: z.any().optional(),
});

export type Step7Values = z.infer<typeof step7Schema>;
