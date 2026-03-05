// app/lib/validations.ts
import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(100, "Nombre demasiado largo"),
  email: z.string().email("Ingresa un email válido"),
  message: z
    .string()
    .min(10, "El mensaje debe tener al menos 10 caracteres")
    .max(1000, "Mensaje demasiado largo (máx. 1000 caracteres)"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
