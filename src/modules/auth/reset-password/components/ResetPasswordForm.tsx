"use client";

import { resetPasswordFormFields } from "@/modules/auth/reset-password/constants/resetPasswordFormFields.constant";
import { resetPasswordSchema } from "@/modules/auth/reset-password/schema/resetPassword.schema";
import { resetPassword } from "@/modules/auth/reset-password/services/resetPassword.service";
import { ResetPasswordFormData } from "@/modules/auth/reset-password/types/resetPassword.type";
import InputField from "@/shared/components/form/InputField";
import { Button } from "@/shared/components/ui/button";
import { Form } from "@/shared/components/ui/form";
import { ROUTES } from "@/shared/constants/routes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function ResetPasswordForm({
  token,
  email,
}: {
  token: string;
  email: string;
}) {
  const router = useRouter();
  const form = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      token: token,
      password: "",
      confirmPassword: "",
      captcha: "",
    },
  });

  // Handle form submission
  const onSubmit = async (data: ResetPasswordFormData) => {
    try {
      const res = await resetPassword(data);
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
    <div className="mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {resetPasswordFormFields.map((field) => (
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

          <InputField name="captcha" type="captcha" required={true} />

          <div className="flex items-center justify-end gap-4">
            <Button
              type="submit"
              variant="default"
              className="w-fit rounded-sm"
              size="sm"
            >
              {form.formState.isSubmitting ? "PROCESSING..." : "RESET PASSWORD"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
