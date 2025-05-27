import React from 'react';

function MusicPlayer() {
  return (
    <div style={{ marginTop: '30px', textAlign: 'center' }}>
      <h2>🔥 Workout Beats</h2>
      <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%' }}>
        <iframe
          src="https://www.youtube.com/embed/sD-tzrVZvrY?autoplay=1&mute=1"
          title="Workout Music"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        ></iframe>
      </div>
    </div>
  );
}

export default MusicPlayer;


