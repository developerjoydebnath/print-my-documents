"use client";

import { Button } from "@/shared/components/ui/button";
import { Progress } from "@/shared/components/ui/progress";
import { cn } from "@/shared/lib/utils";
import { FileText, Upload, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

export interface FileWithPages extends File {
  pageCount?: number;
}

interface FileUploadProps {
  onFilesChange?: (files: FileWithPages[]) => void;
  onPageCountChange?: (count: number) => void;
}

export function FileUpload({
  onFilesChange,
  onPageCountChange,
}: FileUploadProps) {
  const [files, setFiles] = useState<FileWithPages[]>([]);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  // Calculate total pages whenever files change
  useEffect(() => {
    const total = files.reduce((acc, f) => acc + (f.pageCount || 0), 0);
    if (onPageCountChange) onPageCountChange(total);
    if (onFilesChange) onFilesChange(files);
  }, [files, onPageCountChange, onFilesChange]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Simulate page counting logic
    const newFiles = acceptedFiles.map((file) => {
      const isImage = file.type.startsWith("image/");
      // Mock: 1 page for images, random 1-20 for docs based on size
      const pages = isImage
        ? 1
        : Math.max(1, Math.ceil(file.size / (50 * 1024))); // Approx 50KB per page

      const fileWithPages = file as FileWithPages;
      fileWithPages.pageCount = pages;
      return fileWithPages;
    });

    setFiles((prev) => [...prev, ...newFiles]);

    // Simulate upload progress
    setUploading(true);
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploading(false);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const removeFile = (name: string) => {
    setFiles((prev) => prev.filter((f) => f.name !== name));
  };

  return (
    <div className="w-full space-y-4">
      <div
        {...getRootProps()}
        className={cn(
          "cursor-pointer rounded-lg border-2 border-dashed p-8 text-center transition-colors",
          isDragActive
            ? "border-primary bg-primary/5"
            : "border-muted-foreground/25 hover:border-primary/50",
        )}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center gap-2">
          <div className="bg-primary/10 rounded-full p-4">
            <Upload className="text-primary h-8 w-8" />
          </div>
          <h3 className="text-lg font-semibold">
            {isDragActive ? "Drop files here" : "Upload your documents"}
          </h3>
          <p className="text-muted-foreground max-w-xs text-sm">
            Drag & drop files here, or click to select files (PDF, DOCX, Images)
          </p>
          <p className="text-muted-foreground mt-2 text-xs">Max size: 10MB</p>
        </div>
      </div>

      {files.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-medium">Selected Files</h4>
            <span className="text-primary bg-primary/10 rounded-full px-2 py-1 text-xs font-medium">
              Total Pages:{" "}
              {files.reduce((acc, f) => acc + (f.pageCount || 0), 0)}
            </span>
          </div>

          {files.map((file) => (
            <div
              key={file.name}
              className="bg-card flex items-center justify-between rounded-md border p-3"
            >
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="bg-muted rounded p-2">
                  <FileText className="text-muted-foreground h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">{file.name}</p>
                  <div className="text-muted-foreground flex gap-2 text-xs">
                    <span>{(file.size / 1024 / 1024).toFixed(2)} MB</span>
                    <span>•</span>
                    <span>{file.pageCount} pages detected</span>
                  </div>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:text-destructive"
                onClick={() => removeFile(file.name)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}

          {uploading && (
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span>Uploading...</span>
                <span>{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
