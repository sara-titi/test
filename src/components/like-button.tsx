"use client";

import { useState } from "react";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-ful ml-6"
    >
      Like ({likes})
    </button>
  );
}
