"use client";

import InputField from "@/shared/components/form/InputField";
import { Button } from "@/shared/components/ui/button";
import { Form } from "@/shared/components/ui/form";
import { ROUTES } from "@/shared/constants/routes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { updatePasswordFormFields } from "../constants/updatePasswordFormFields.constant";
import { updatePasswordSchema } from "../schema/udpatePassword.schema";
import { updatePassword } from "../services/resetPassword.service";
import { UpdatePasswordFormData } from "../types/updatePassword.type";

export default function UpdatePasswordForm() {
  const router = useRouter();
  const form = useForm<UpdatePasswordFormData>({
    resolver: zodResolver(updatePasswordSchema),
    defaultValues: {
      currentPassword: "",
      password: "",
      confirmPassword: "",
    },
  });

  // Handle form submission
  const onSubmit = async (data: UpdatePasswordFormData) => {
    try {
      const res = await updatePassword(data);
      if (res.status !== "success") {
        throw new Error(res.message || "Failed");
      }

      toast.success(res.message || "Success");
      form.reset();
      router.push(ROUTES.LOGIN);
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "An error occurred while processing your request!",
      );
    }
  };

  return (
    <div className="mt-6 w-full max-w-md overflow-hidden bg-white px-6 py-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {updatePasswordFormFields.map((field) => (
            <InputField
              key={field.name}
              name={field.name}
              label={field.label}
              type={field.type}
              placeholder={field.placeholder}
              required={field.required}
              className={field.className}
            />
          ))}

          <div className="flex items-center justify-end gap-4">
            <Button
              type="submit"
              variant="default"
              className="w-fit rounded-sm"
              size="sm"
            >
              {form.formState.isSubmitting
                ? "PROCESSING..."
                : "UPDATE PASSWORD"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
