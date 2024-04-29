import React, { useState } from 'react';
import styles from './ProcessingGrid.module.css';

function ProcessingGrid() {
  // State to store the video URLs and muted state
  const [videos, setVideos] = useState([
    { id: 1, url: 'jazz.mov', isMuted: true },
    { id: 2, url: 'final.mov', isMuted: true },
    { id: 3, url: 'lines.mov', isMuted: true },
    { id: 4, url: 'biggergrid.mov', isMuted: true },
  ]);

  // Toggle mute state for a specific video
  const toggleMute = (id) => {
    const updatedVideos = videos.map(video => {
      if (video.id === id) {
        return {...video, isMuted: !video.isMuted};
      }
      return video;
    });
    setVideos(updatedVideos);
  };

  return (
    <div className={styles.gridContainer}>
      {videos.map(video => (
        <div key={video.id} className={styles[`div${video.id}`]}>
          <video
            src={video.url}
            className={styles.fullSizeImage}
            autoPlay
            muted={video.isMuted}
            loop
            onClick={() => toggleMute(video.id)}
          />
        </div>
      ))}
    </div>
  );
}

export default ProcessingGrid;
