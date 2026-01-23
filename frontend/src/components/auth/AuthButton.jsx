import React from "react";
import { ArrowForward } from "../app-icons/Icons";

function AuthButton({ forwardIcon = true, isDisabled = false, content ,onClick,className,arrowsize}) {
  return (
    <div onClick={onClick}
      className={className ??`w-73.5 py-4.25 ${
        isDisabled ? "bg-battleshipGray" : "bg-moonstone"
      }
      rounded-full flex items-center justify-center text-white font-medium text-[16.5px] cursor-pointer
      `}
    >
      <div className="flex gap-2.75 items-center justify-center">
        {content ?? "Continue"}
        {forwardIcon && <ArrowForward size={arrowsize ?? 24}/>}
      </div>
    </div>
  );
}

export default AuthButton;

