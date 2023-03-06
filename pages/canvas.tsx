import React, { useEffect, useRef } from "react";
import * as S from "../components/canvas/styled";

const Canvas = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const a = ref.current.getContext("2d");
  }, []);

  const makeSquare = ({
    x,
    y,
    가로,
    세로,
  }: {
    x: number;
    y: number;
    가로: number;
    세로: number;
  }) => {
    const ctx = ref.current.getContext("2d");
    ctx.fillStyle = "rgb(200,0,0)";
    ctx.fillRect(x, y, 가로, 세로);
  };

  return (
    <div>
      <div>캔버스</div>
      <S.Canvas ref={ref} id="tutorial" width="150" height="150"></S.Canvas>
      <button onClick={() => makeSquare({ x: 10, y: 10, 가로: 50, 세로: 50 })}>
        사각형 그리기
      </button>
    </div>
  );
};

export default Canvas;
