// components/WaveBackground.tsx
'use client';

import React from 'react';
import Wavify from 'react-wavify';

const WaveBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      <Wavify
        fill="#3b82f6"
        paused={false}
        options={{
          height: 60,
          amplitude: 40,
          speed: 0.2,
          points: 4,
        }}
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
        }}
      />
    </div>
  );
};

export default WaveBackground;
