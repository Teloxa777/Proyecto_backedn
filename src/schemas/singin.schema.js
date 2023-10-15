import { z } from "zod";

export const signInSchema = z.object({
    email: z.string().regex(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/).min(5).max(50),
    role: z.optional(z.enum(["ADMIN", "USER"]))
});