import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const Like = () => {
  const [liked, setLiked] = useState(false);
  return (
    <div>
      {liked ? (
        <FaHeart
          fill="red"
          size={40}
          onClick={() => {
            setLiked(false);
          }}
        />
      ) : (
        <FaRegHeart
          color="red"
          size={40}
          onClick={() => {
            setLiked(true);
          }}
        />
      )}
    </div>
  );
};

export default Like;
