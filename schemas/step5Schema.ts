import { z } from "zod";

export const step5Schema = z.object({
  buildingNo: z.string().min(1, "Building number is required"),
  area: z.string().min(1, "Area is required"),
  landmark: z.string().optional(),
  pincode: z.string().min(4, "Valid pincode required"),
  state: z.string().min(1, "State is required"),
  country: z.string().min(1, "Country is required"),
});

export type Step5Values = z.infer<typeof step5Schema>;
