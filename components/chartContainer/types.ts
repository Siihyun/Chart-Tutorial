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
