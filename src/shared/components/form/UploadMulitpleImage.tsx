import { deleteProfileImage } from "@/modules/protected/profile/services/profile.service";
import { cn } from "@/shared/lib/utils";
import { Avatar } from "@/shared/models/avatar.model";
import { useAuthStore } from "@/shared/stores/authStore";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import { toast } from "sonner";
import Image from "../custom/Image";

type UploadMultipleImageProps = {
  defaultPreviews?: Avatar[]; // existing URLs, optional
  onChange: (files: File[]) => void; // aligns with z.array(z.instanceof(File))
  className?: string;
  disabled?: boolean;
  maxFiles?: number;
  accept?: { [mime: string]: string[] };
};

const UploadMultipleImage = React.forwardRef<
  HTMLDivElement,
  UploadMultipleImageProps
>(
  (
    {
      defaultPreviews,
      onChange,
      className,
      disabled,
      maxFiles = 10,
      accept = { "image/*": [".jpg", ".jpeg", ".png", ".webp", ".gif"] },
    },
    ref,
  ) => {
    const { auth } = useAuthStore();
    const dp =
      defaultPreviews && defaultPreviews.length > 0
        ? defaultPreviews.map((avatar) => {
            return { id: avatar.id, url: avatar.url };
          })
        : undefined;
    const [previews, setPreviews] = useState<{ id: number; url: string }[]>(
      dp ?? [],
    );
    const filesRef = useRef<File[]>([]);

    // Cleanup object URLs on unmount
    useEffect(() => {
      return () => {
        previews.forEach((avatar) => URL.revokeObjectURL(avatar.url));
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Sync default previews when prop changes
    useEffect(() => {
      if (dp) setPreviews(dp);
    }, [defaultPreviews]); // eslint-disable-line react-hooks/exhaustive-deps

    const onDrop = useCallback(
      (acceptedFiles: File[]) => {
        if (disabled) return; // prevent if disabled
        if (!acceptedFiles || acceptedFiles.length === 0) return;

        const newPreviews = acceptedFiles.map((f) => ({
          id: 0,
          url: URL.createObjectURL(f),
        }));
        // Keep files in a ref; emit up via onChange
        filesRef.current = [...(filesRef.current ?? []), ...acceptedFiles];
        onChange(filesRef.current);
        setPreviews((prev) => [...prev, ...newPreviews]);
      },
      [onChange, disabled],
    );

    const removeAt = async (index: number, avatarId: number) => {
      if (!auth?.getId()) {
        toast.error("You must be logged in to perform this action.");
        return;
      }
      try {
        const res = await deleteProfileImage(auth?.getId(), avatarId);

        if (res?.status !== "success") {
          throw new Error(res?.message);
        }

        const current = filesRef.current ?? [];
        const next = current.filter((_: File, i: number) => i !== index);
        onChange(next);
        setPreviews((prev) => {
          const toRemove = prev[index];
          if (toRemove) URL.revokeObjectURL(toRemove.url);
          return prev.filter((_, i) => i !== index);
        });

        toast.success("Image deleted successfully.");
      } catch (error) {
        console.error("Error deleting image:", error);
        toast.error("Failed to delete image.");
      }
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
      disabled,
      multiple: true,
      maxFiles,
      accept,
    });

    const hasPreviews = previews && previews.length > 0;

    return (
      <div
        ref={ref}
        {...getRootProps({
          className: cn(
            "border p-4 min-h-[200px] flex flex-col gap-3 rounded-lg border-dashed text-sm text-gray-500 bg-gray-50 hover:border-primary-500 dark:hover-border-400 hover:bg-gray-100 dark:bg-input/30 dark:hover:bg-input/40 cursor-pointer",
            disabled && "opacity-50 cursor-not-allowed pointer-events-none",
            className,
          ),
        })}
      >
        <input {...getInputProps()} />

        {hasPreviews ? (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {previews.map((avatar, idx) => (
              <div
                key={avatar.url + idx}
                className="relative h-32 w-full overflow-hidden rounded-md ring-1 ring-gray-950/10 dark:ring-white/10"
              >
                <Image
                  src={avatar.url}
                  alt={`Preview ${idx + 1}`}
                  width={300}
                  height={300}
                  className="h-full w-full object-cover"
                />
                {!disabled && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      removeAt(idx, avatar.id);
                    }}
                    className="absolute top-1 right-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80"
                    aria-label="Remove image"
                  >
                    ×
                  </button>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="flex h-[200px] items-center justify-center sm:h-[220px] md:h-[240px]">
            {isDragActive ? (
              <p>Drop the files here ...</p>
            ) : (
              <p>Drag & drop images here, or click to select</p>
            )}
          </div>
        )}
      </div>
    );
  },
);

UploadMultipleImage.displayName = "UploadMultipleImage";

export default UploadMultipleImage;
