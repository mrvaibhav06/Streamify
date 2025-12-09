import { VideoIcon } from "lucide-react";

function CallButton({ handleVideoCall }) {
  return (
    <div className="absolute top-4 right-4 z-50">
      <button
        onClick={handleVideoCall}
        className="
          w-10 h-10 
          rounded-full 
          bg-green-500 
          flex items-center justify-center 
          shadow-lg 
          hover:bg-green-600 
          active:scale-95 
          transition-all
        "
      >
        <VideoIcon className="size-6 text-white" />
      </button>
    </div>
  );
}

export default CallButton;
