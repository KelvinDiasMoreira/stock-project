"use client";
import { HelpCircle } from "lucide-react";
import { useEffect, useReducer, useRef, useState } from "react";
import Tooltip from "./tooltip";

// const objectToReduce = {
//   setLeft: (value: number, state: any) => (state.left = value),
//   setBottom: (value: number, state: any) => (state.bottom = value),
// };

const reduce = (
  state: { left: number; bottom: number },
  action: {
    type: "setLeft" | "setBottom";
    payload: number | boolean;
  }
) => {
  if (action.type === "setBottom" && typeof action.payload === "number")
    state.bottom = action.payload;
  if (action.type === "setLeft" && typeof action.payload === "number")
    state.left = action.payload;

  //TODO: verify why is not working when i use objects literals and how can we do to do this run without this ifs;
  // objectToReduce[action.type](action.payload, action.type)
  return state;
};
interface TooltipCardProps {
  text?: string;
}
export default function TooltipCard({ text }: TooltipCardProps) {
  const [isOver, setIsOver] = useState(false);
  const [state, dispatch] = useReducer(reduce, {
    left: 0,
    bottom: 0,
  });
  const refIcon = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (refIcon) {
      dispatch({
        payload: Number(refIcon.current?.getBoundingClientRect().bottom),
        type: "setBottom",
      });
      dispatch({
        payload: Number(refIcon.current?.getBoundingClientRect().left),
        type: "setLeft",
      });
    }
    const onMouseOver = () => {
      setIsOver(true);
    };
    const onMouseLeave = () => {
      setIsOver(false);
    };
    refIcon.current?.addEventListener("mouseover", onMouseOver);
    refIcon.current?.addEventListener("mouseleave", onMouseLeave);

    return () => {
      refIcon.current?.removeEventListener("mouseover", onMouseOver);
      refIcon.current?.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <>
      <div
        ref={refIcon}
        className="relative flex items-center right-[-25px] cursor-pointer"
      >
        <HelpCircle
          className="text-[#9c9c9c] hover:text-[#d3b583]"
          width={20}
          height={20}
        />
      </div>
      {isOver && (
        <Tooltip
          text={text}
          position={{ bottom: state.bottom, left: state.left }}
        />
      )}
    </>
  );
}
