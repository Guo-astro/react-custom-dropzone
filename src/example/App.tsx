import { CustomDropZone } from "@/lib/components/CustomDropZone";
import Header from "./Header";
export const videoFormat = ["mp4", "mov", "mkv", "gif", "webm"];

function App() {
  const handleUpload = (file: File) => {
    console.log(file);
  };
  const acceptedFiles = {
    "video/*": videoFormat,
  };
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-800 transition-colors duration-300">
      <Header />
      <CustomDropZone
        handleUpload={handleUpload}
        acceptedFiles={acceptedFiles}
      />
    </div>
  );
}

export default App;
