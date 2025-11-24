import React, { useEffect, useRef, useState } from "react";
import { Button } from "../Button";
import { labelInputVariants } from "../../../../lib/cvaVariants";
import { DragAndDropContainer } from "./DragAndDropContainer";
import { PreviewFile } from "./PreviewFile";
import { PreviewImage } from "./PreviewImage";

// pseudocode
// variants: single,multiple
//handle file upload,delete selected file
//drag and drop
// filetypes:files,images
//based on uploaded file type: for files: csv,xlsx,txt: cards to dwnload files for preview, and clear
// for images: cards for images preview.

type Props = {
  handleSubmitFile: (data: {
    error: string;
    file: { name: string; url: string }[];
  }) => void;
  buttonTitle?: string;
  title?: string;
  error?: string;
  success?: boolean;
  uploadVariant?: "single" | "multiple";
  uiVariant?: "button" | "dragAndDropContainer";
  fileTypes: "files" | "images";
  buttonVariant: "primary" | "secondary" | "tertiary";
  size: "small" | "medium" | "large";
};

const allowedFileTypes = {
  files: ["csv", "xlsx", "txt", "pdf"],
  images: ["jpg", "jpeg", "png", "webp", "svg"],
};

export function FileUpload({
  handleSubmitFile,
  error,
  success,
  title,
  buttonTitle = "Upload",
  fileTypes = "images",
  uploadVariant = "single",
  uiVariant = "button",
  buttonVariant = "primary",
  size = "medium",
}: Props) {
  // TODO add loader here
  const [previewUrl, setPreviewUrl] = React.useState<string>("");
  const [uploadedMultipleFiles, setUploadedMultipleFiles] = React.useState<
    {
      name: string;
      url: string;
    }[]
  >([]);
  const [uploadedSingleFile, setUploadedSingleFile] =
    React.useState<File | null>(null);

  const [caughtError, setCaughtError] = useState("");

  const uploadRef = useRef<HTMLInputElement>(null);

  function handleUploadFile(e: File) {
    // console.log("types", e.target.files?.[0]);
    const fileData = e;

    try {
      if (!fileData) {
        throw new Error(`No file  was provided, try again please`);
      }
      //check file type
      const fileFormat = fileData?.type.split("/")[1];
      console.log("🚀 ~ handleUploadFile ~ fileFormat:", fileFormat);

      if (!fileFormat) {
        throw new Error(`No file format was provided, try again please`);
      }
      //check if allowed
      if (!allowedFileTypes[fileTypes].includes(fileFormat)) {
        throw new Error(
          `Forbidden file format ${fileFormat}, allowed formats: ${allowedFileTypes[
            fileTypes
          ].map((format) => format)}`
        );
      }

      // parse in base64 string for handling Binary Data
      const base64String = URL.createObjectURL(fileData);

      if (!base64String) {
        throw new Error("Invalid file was provided, please try again");
      }

      if (uploadVariant === "multiple") {
        setUploadedMultipleFiles((prev) => {
          return [
            ...prev,
            {
              url: base64String,
              name: fileData.name,
            },
          ];
        });
        setCaughtError("");
      }
      if (uploadVariant === "single") {
        setPreviewUrl(base64String);
        setUploadedSingleFile(fileData);
        setCaughtError("");
      }
    } catch (error: any) {
      handleSubmitFile({
        error: error.message || "Something went wrong",
        file: [{ name: "", url: "" }],
      });
      setCaughtError(error.message || "Something went wrong");
      console.log(error.message);
    }
  }

  function handleDelete(index: number) {
    setPreviewUrl("");
    setCaughtError("");
    if (uploadVariant === "multiple") {
      setUploadedMultipleFiles((prev) => {
        return prev.filter((_, fileIndex) => fileIndex !== index);
      });
    } else {
      setUploadedSingleFile(null);
    }
  }

  useEffect(() => {
    if (uploadVariant === "multiple") {
      handleSubmitFile({
        error: "",
        file: uploadedMultipleFiles,
      });
    }
    if (uploadVariant === "single" && uploadedSingleFile) {
      handleSubmitFile({
        error: "",
        file: [{ name: uploadedSingleFile?.name, url: previewUrl }],
      });
    }
  }, [uploadedMultipleFiles, uploadedSingleFile]);

  return (
    <div className="flex flex-col gap-1">
      {/* LABEL */}
      {title && (
        <label htmlFor="checkbox">
          <p
            className={labelInputVariants({
              errorState: !!error,
              successState: !!success,
            })}
          >
            {title}
          </p>
        </label>
      )}
      <input
        ref={uploadRef}
        className="hidden"
        type="file"
        onChange={(e) => {
          const file = e.target.files?.[0];
          file && handleUploadFile(file);
        }}
      />
      {/* BUTTON UPLOAD */}
      {uiVariant === "button" && (
        <Button
          size={size}
          variant={buttonVariant}
          onClick={() => uploadRef.current?.click()}
        >
          {buttonTitle}
        </Button>
      )}
      {/* DRAG AND DROP */}
      {uiVariant === "dragAndDropContainer" && (
        <DragAndDropContainer
          onClick={() => uploadRef.current?.click()}
          size={size}
          $title={title}
          onDrop={(e) => {
            e.preventDefault();
            const file = e.dataTransfer.files?.[0];
            file && handleUploadFile(file);
          }}
        />
      )}
      {(error || caughtError) && (
        <p className="text-sm text-red-600">{error || caughtError}</p>
      )}

      {/* MULTIPLE */}
      <div className="flex flex-wrap gap-4">
        {uploadVariant === "multiple" &&
          uploadedMultipleFiles.map((file, index) => {
            return (
              <>
                {fileTypes === "files" && (
                  <PreviewFile
                    size={size}
                    key={index}
                    fileUrl={file.url}
                    fileName={file.name}
                    handleClear={() => handleDelete(index)}
                  />
                )}
                {fileTypes === "images" && (
                  <PreviewImage
                    size={size}
                    key={index}
                    imgUrl={file.url}
                    handleClear={() => handleDelete(index)}
                  />
                )}
              </>
            );
          })}
      </div>
      {/* SINGLE */}
      {uploadVariant === "single" && uploadedSingleFile && (
        <>
          {fileTypes === "files" && (
            <PreviewFile
              size={size}
              fileUrl={previewUrl}
              fileName={uploadedSingleFile.name}
              handleClear={() => handleDelete(0)}
            />
          )}
          {fileTypes === "images" && (
            <PreviewImage
              size={size}
              imgUrl={previewUrl}
              handleClear={() => handleDelete(0)}
            />
          )}
        </>
      )}
    </div>
  );
}
