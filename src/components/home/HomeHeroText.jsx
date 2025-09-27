import React from "react";
import VideoInline from "./VideoInline";

const HomeHeroText = () => {
  return (
    <div className="text-center pt-2 text-[9.7vw] leading-[20vh] uppercase">
      <div>L'étincelle </div>
      <div className="flex items-center justify-center">
        qui
        <div className="h-[7.2vw] w-[16vw] mt-[-1.7vw] rounded-full overflow-hidden">
          <VideoInline />
        </div>
        génère
      </div>
      <div>la créativité</div>
    </div>
  );
};

export default HomeHeroText;
