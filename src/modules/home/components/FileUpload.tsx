import { useState } from "react";

const FileUpload = () => {
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);

  const handleUpload = () => {
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
    }, 100);
  };

  return (
    <div>
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? "Uploading..." : "Upload File"}
      </button>
      <div
        style={{ width: "100%", backgroundColor: "#e0e0e0", marginTop: "10px" }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "10px",
            backgroundColor: "#3b5998",
          }}
        />
      </div>
    </div>
  );
};

export default FileUpload;
