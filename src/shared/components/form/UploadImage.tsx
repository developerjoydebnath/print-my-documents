"use client";

import { cn } from "@/shared/lib/utils";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Image from "../custom/Image";

const UploadImage = React.forwardRef<
  HTMLDivElement,
  {
    defaultPreview?: string | undefined;
    onChange: (file: File) => void;
    value: File | undefined;
    className?: string;
    disabled?: boolean;
  }
>(
  (
    { defaultPreview = undefined, onChange, className, disabled, value },
    ref,
  ) => {
    const [preview, setPreview] = useState<string | undefined>(defaultPreview);

    const onDrop = useCallback(
      (file: File[]) => {
        if (disabled) return; // prevent if disabled
        onChange(file[0]);
        setPreview(URL.createObjectURL(file[0]));
      },
      [onChange, disabled],
    );

    React.useEffect(() => {
      if (
        value instanceof File ||
        value !== undefined ||
        defaultPreview !== undefined
      ) {
        return;
      } else {
        setPreview(undefined);
        return;
      }
    }, [value, defaultPreview]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
      disabled, // tell react-dropzone to disable interactions
    });

    return (
      <div
        ref={ref}
        {...getRootProps({
          className: cn(
            "border p-4 h-[200px] sm:h-[300px] md:h-[400px] flex items-center justify-center rounded-lg border-dashed text-sm text-gray-500 bg-gray-50 hover:border-primary-500 dark:hover-border-400 hover:bg-gray-100 dark:bg-input/30 dark:hover:bg-input/40 cursor-pointer overflow-hidden",
            disabled && "opacity-50 cursor-not-allowed pointer-events-none",
            className,
          ),
        })}
      >
        <input {...getInputProps()} />

        {preview ? (
          <Image
            src={preview}
            alt="Preview"
            width={300}
            height={300}
            className="h-full w-full object-cover"
          />
        ) : isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag & drop file here, or click to select files</p>
        )}
      </div>
    );
  },
);

UploadImage.displayName = "UploadImage";

export default UploadImage;
