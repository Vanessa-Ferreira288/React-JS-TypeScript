import { useForm as useReactHookForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { formSchema } from "../schemas/formSchema";
import type { FormSchema } from "../schemas/formSchema";

export const useForms = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useReactHookForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  return {
    register,
    handleSubmit,
    errors,
  };
};