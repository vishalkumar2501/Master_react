import React from "react";

import {
  motion
} from "framer-motion";

const AnimatedButton = ({
  text
}) => {

  return (

    <motion.button

      whileHover={{
        scale: 1.1
      }}

      whileTap={{
        scale: 0.9
      }}

      className="motionBtn"
    >

      {text}

    </motion.button>

  );
};

export default AnimatedButton;