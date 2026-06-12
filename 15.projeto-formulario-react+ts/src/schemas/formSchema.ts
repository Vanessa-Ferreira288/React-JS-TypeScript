import { z } from "zod";

export const formSchema = z
  .object({
    name: z.string().min(3, "O nome deve ter no mínimo 3 caracteres."),
    
    lastname: z.string().min(3, "O sobrenome deve ter no mínimo 3 caracteres."),
    
    gender: z.string().refine((field) => field !== "select", {
      message: "Você precisa escolher um gênero.",
    }),

    email: z
      .string()
      .min(1, "O campo é obrigatório")
      .email("Digite um e-mail válido"),

    password: z
      .string()
      .min(6, "A senha deve ter pelo menos 6 caracteres"),

    confirmpassword: z
      .string()
      .min(6, "A confirmação precisa ter no mínimo 6 caracteres."),

    agree: z.boolean().refine((field) => field === true, {
      message: "Você precisa concordar com os termos.",
    }),
  })
  .refine((field) => field.password === field.confirmpassword, {
    message: "As senhas precisam ser iguais",
    path: ["confirmpassword"],
  });

export type FormSchema = z.infer<typeof formSchema>;