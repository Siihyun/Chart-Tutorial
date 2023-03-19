import React, { useRef } from "react";

export interface CanvasContexts {
  readonly bg?: CanvasRenderingContext2D;
  readonly axes?: CanvasRenderingContext2D;
  readonly mouseCoord?: CanvasRenderingContext2D;
}

export interface CanvasContainerProps {
  readonly height: number;
  readonly ratio: number;
  readonly style?: React.CSSProperties;
  readonly width: number;
}

const ChartContainer = () => {
  const bgRef = useRef<HTMLCanvasElement>();
  const axesRef = useRef<HTMLCanvasElement>();
  const mouseRef = useRef<HTMLCanvasElement>();

  const getCanvasContexts = () => {
    return {
      bg: bgRef.current?.getContext("2d"),
      axes: axesRef.current?.getContext("2d"),
      mouseRef: mouseRef.current?.getContext("2d"),
    };
  };

  return (
    <div>
      <canvas ref={bgRef} />
      <canvas ref={axesRef} />
      <canvas ref={mouseRef} />
    </div>
  );
};

export default ChartContainer;
