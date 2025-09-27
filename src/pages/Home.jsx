import React from 'react'
import Video from "../components/home/Video";
import HomeHeroText from "../components/home/HomeHeroText"
import HeroBottomText from "../components/home/HomeBottomText"

const Home = () => {
  return (
    <div>
      <div className="h-screen w-screen fixed">
        <Video />
      </div>

      <div className="h-screen w-screen relative flex flex-col justify-between">
        <HomeHeroText />
        <HeroBottomText />
      </div>
    </div>
  );
}

export default Home