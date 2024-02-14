interface TooltipProps {
  text?: string;
  position: { bottom: number; left: number };
}

export default function Tooltip({ text, position }: TooltipProps) {
  return (
    <div
      style={{ left: `${position.left + 25}px`, top: `${position.bottom + 5}px` }}
      className="absolute bg-white rounded-md p-4 border border-[#d0d0d0]"
    >
      <h1>{text}</h1>
    </div>
  );
}
