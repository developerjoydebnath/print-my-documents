"use client";

import { cn } from "@/shared/lib/utils";
import { useAuthStore } from "@/shared/stores/authStore";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { logout } from "../services/logout.service";

export const LogoutButton = ({ className }: { className?: string }) => {
  const router = useRouter();
  const { updateAuth } = useAuthStore();

  const handleLogout = async () => {
    try {
      const res = await logout();
      if (res.status === "success") {
        updateAuth({});
        router.push("/login");
        toast.success("Logged out successfully");
      }
    } catch {}
  };

  return (
    <button
      onClick={handleLogout}
      className={cn(
        "fi-dropdown-list-item-color-gray fi-color-gray flex w-full cursor-pointer items-center gap-2 rounded-md p-2 text-sm whitespace-nowrap transition-colors duration-75 outline-none hover:bg-gray-50 focus-visible:bg-gray-50 disabled:pointer-events-none disabled:opacity-70 dark:hover:bg-white/5 dark:focus-visible:bg-white/5",
        className,
      )}
    >
      <span className="">Sign out</span>
    </button>
  );
};
