import React from 'react'

const Video = () => {
  return (
    <div>
      <video className="h-full w-auto object-cover" autoPlay loop muted playsInline>
        <source src="videos/69496b2d.mp4" type='video/mp4' />
      </video>
    </div>
  );
}

export default Video