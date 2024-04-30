import React, { useState } from 'react';
import styles from './ProcessingGrid.module.css';

function ProcessingGrid() {
  // State to store the video URLs and muted state
  const [videos, setVideos] = useState([
    { id: 1, url: 'jazz.mov', isMuted: true, alt: 'Grid breaks too abruptly' },
    { id: 2, url: 'final.mov', isMuted: true, alt: 'Movement I was looking for, but the grid was too tight' },
    { id: 3, url: 'lines.mov', isMuted: true, alt: 'Lines in the grid are breaking' },
    { id: 4, url: 'biggergrid.mov', isMuted: true, alt: 'Bigger grid system with smooth movements' },
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
          <h4 className={styles.videoAltText}>{video.alt}</h4>
        </div>
      ))}
    </div>
  );
}

export default ProcessingGrid;
