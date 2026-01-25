import { useState } from "react";
import Button from "@mui/material/Button";

function UploadImage() {
  const [preview, setPreview] = useState(null);

  const handleChange = (event) => {
    const file = event.target.files[0];

    console.log("FILE :", file); // 🔴 IMPORTANT

    if (!file) return;

    const url = URL.createObjectURL(file);
    setPreview(url);
  };

  return (
    <div style={{ padding: 20 }} className="flex flex-col justify-center items-center">
      <Button variant="contained" component="label">
        Choisir une image
        <input
          type="file"
          hidden
          accept="image/*,video/*"
          onChange={handleChange}
        />
      </Button>
      <video
          src={preview}
          controls
          preload="metadata"
          style={{ width: "300px", marginTop: 20 }}
        >
          Votre navigateur ne supporte pas la vidéo.
        </video>
      {preview && (
        <img
          src={preview}
          alt="preview"
          style={{ width: 200, marginTop: 20 }}
        />
      )}
    </div>
  );
}

export default UploadImage;
