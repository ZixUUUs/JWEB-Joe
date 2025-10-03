import { useEffect } from "react";

function VideoComp({ videoData }) {
  useEffect(() => {
    if (
      !document.querySelector('script[src="https://www.tiktok.com/embed.js"]')
    ) {
      const script = document.createElement("script");
      script.src = "https://www.tiktok.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);
  return (
    <div className="reel-container">
      <div className="video-container">
        <video
          src={videoData.link}
          className="Reels-rub"
          autoPlay
          muted
          loop
        ></video>
      </div>
      <div className="description-video">
        <p>{videoData.desc}</p>
      </div>
    </div>
  );
}
export default VideoComp;
