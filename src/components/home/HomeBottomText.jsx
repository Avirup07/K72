import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className="font-[Lausanne-500] flex justify-center gap-5 text-[6.6vw] leading-[5.2vw] uppercase mb-2">
      <Link
        className="border-3 hover:border-[#D3FD50] hover:text-[#D3FD50] border-white rounded-full px-8 pt-5"
        to="/projets"
      >
        Projets
      </Link>
      <Link
        className="border-3 hover:border-[#D3FD50] hover:text-[#D3FD50] border-white rounded-full px-8 pt-5"
        to="/agence"
      >
        Agence
      </Link>
    </div>
  );
}

export default HomeBottomText