"use client";

import { useState } from "react";
import ReactDropzone, { DropzoneState } from "react-dropzone";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast"; // Import ToastAction

type CustomDropZoneProps = {
  handleUpload: (file: File) => void;
  acceptedFiles: { [key: string]: string[] };
  disabled?: boolean;
  message?: React.ReactNode;
};

export const CustomDropZone = ({
  handleUpload,
  acceptedFiles,
  disabled,
}: CustomDropZoneProps) => {
  const [isHover, setIsHover] = useState(false);
  const { toast } = useToast();

  const handleHover = () => setIsHover(true);
  const handleExitHover = () => setIsHover(false);

  const onDrop = (files: File[]) => {
    handleUpload(files[0]);
    handleExitHover();
  };

  const onError = () => {
    handleExitHover();
    toast({
      title: "Error uploading your file(s)",
      description: "Allowed files: Audio, Video, and Images.",
      variant: "destructive",
      action: <ToastAction altText="Try again">Try again</ToastAction>,
    });
  };

  const onDropRejected = () => {
    handleExitHover();
    toast({
      title: "Error uploading your file(s)",
      description: "Allowed files: Audio, Video, and Images.",
      variant: "destructive",
      action: <ToastAction altText="Try again">Try again</ToastAction>,
    });
  };

  return (
    <ReactDropzone
      disabled={disabled}
      onDragEnter={handleHover}
      onDragLeave={handleExitHover}
      onDrop={onDrop}
      accept={acceptedFiles}
      multiple={false}
      onError={onError}
      onDropRejected={onDropRejected}
    >
      {({
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject,
      }: DropzoneState) => (
        <div
          {...getRootProps()}
          className={cn(
            "p-8 mb-8 border-2 border-dashed rounded-lg text-center cursor-pointer transition-colors duration-300 ease-in-out",
            isDragAccept && "border-green-500 bg-green-900/20",
            isDragReject && "border-red-500 bg-red-900/20",
            isDragActive
              ? "border-blue-500 bg-blue-900/20"
              : "border-gray-700 hover:border-blue-500 hover:bg-blue-900/10",
            disabled && "cursor-not-allowed opacity-50"
          )}
        >
          <input {...getInputProps()} className="hidden" />
          <p className="text-lg mb-2">
            {isDragActive
              ? "Drop the images here..."
              : "Drag and drop some images here"}
          </p>
          <p className="text-sm text-gray-400">or click to select files</p>
        </div>
      )}
    </ReactDropzone>
  );
};
