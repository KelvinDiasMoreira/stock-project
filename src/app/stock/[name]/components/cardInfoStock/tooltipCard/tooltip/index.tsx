interface TooltipProps {
  text?: string;
  position: { bottom: number; left: number };
}

export default function Tooltip({ text, position }: TooltipProps) {
  return (
    <div
      style={{ left: `${position.left + 25}px`, top: `${position.bottom}px` }}
      className="absolute"
    >
      <h1>{text}</h1>
    </div>
  );
}
