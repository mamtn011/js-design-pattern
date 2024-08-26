import React, { useState } from "react";
import { ShapeTypes } from "@/store/prototype/Shapes";

const Circle = ({ shape }) => {
  const { radius } = shape;
  const diameter = radius * 2;
  const sizeClasses = `w-[${diameter}px] h-[${diameter}px]`;
  return (
    <div className={`circle rounded-full bg-red-500 ${sizeClasses}`}></div>
  );
};

const Rectangle = ({ shape }) => {
  const { width, height } = shape;
  const sizeClasses = `w-[${width}px] h-[${height}px]`;
  return <div className={`rectangle bg-blue-500 ${sizeClasses}`}></div>;
};
const Shape = ({ shape }) => {
  // const [rotationEnabled, setRotationEnabled] = useState(shape.rotationEnabled);
  return (
    <div
      // className={`shape ${rotationEnabled ? "shape--rotate" : ""}`}
      onClick={() => {
        // const newRotationVal = shape.toggleRotation();
        // setRotationEnabled(newRotationVal);
        if (shape.logInfo) {
          shape.logInfo();
        }
      }}
    >
      {shape.name === ShapeTypes.CIRCLE ? (
        <Circle shape={shape} />
      ) : (
        <Rectangle shape={shape} />
      )}
    </div>
  );
};

export default Shape;
