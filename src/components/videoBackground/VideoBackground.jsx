import React from "react";
import styles from "./videoBackground.module.css";

const VideoBackground = () => {
  return (
    <div className={styles.videoContainer}>
      <video className={styles.video} autoPlay muted loop>
        <source
          src='https://youtube.com/clip/Ugkx3_MkN5FcI2IcNXlMSGBhFsnu1HN8VFG_'
          type='video/mp4'
        />
      </video>
      <div className={styles.content}>
        {/* Add your content here */}
        <h1>Welcome to the Website</h1>
        <p>This is a video background component in Next.js</p>
      </div>
    </div>
  );
};

export default VideoBackground;
