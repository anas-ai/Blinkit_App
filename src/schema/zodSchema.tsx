import { z } from 'zod';

export const phoneSchema = z.object({
  phone: z
    .string({
      required_error: 'Phone number is required',
      invalid_type_error: 'Phone number must be a string',
    })
    .refine((val) => /^\d{10}$/.test(val.replace(/\s+/g, '')), {
      message: 'Phone number must be exactly 10 digits',
    })
    .transform((val) => val.replace(/\s+/g, '')),
});
