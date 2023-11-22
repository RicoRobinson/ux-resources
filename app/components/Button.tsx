// components/Button.tsx
import { ReactNode } from "react";

export interface ButtonProps {
  text?: string;
  icon?: any;
  onClick: () => void;
  style: "primary" | "secondary" | "link";
}

const Button: React.FC<ButtonProps> = ({ text, icon, style, onClick }) => {
  return (
    <button className="relative" onClick={onClick}>
      <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-neutral-600"></span>
      <span className="relative inline-block h-full w-full rounded border-2 border-black bg-white px-3 py-1 text-base font-bold text-black duration-100 hover:bg-fuchsia-400 hover:text-gray-900 dark:bg-fuchsia-300 active:translate-y-1 active:translate-x-1 active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841] active:border-b-[0px] transition-all">
        {text}
      </span>
    </button>
  );
};

export default Button;
