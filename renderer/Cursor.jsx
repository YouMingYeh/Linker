import React from 'react';
import AnimatedCursor from "react-animated-cursor";

function Cursor() {
  return (
      <AnimatedCursor
        
        innerSize={12}
        outerSize={40}
        outerAlpha={0.2}
        innerScale={0}
        outerScale={3}
        innerStyle={{
          backgroundColor: "white",
          mixBlendMode: 'exclusion'
        }}
        outerStyle={{
          backgroundColor: "#ffffff",
          mixBlendMode: 'exclusion'
        }}
        trailingSpeed={4}
      />
  );
}

export default Cursor;
