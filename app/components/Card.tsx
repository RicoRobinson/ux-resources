// components/Card.tsx
import Image from "next/image";
import { ReactNode } from "react";

export interface CardProps {
  children: ReactNode | ReactNode[];
  description: string;
  onClick(): void;
  title: string;
}

const Card: React.FC<CardProps> = ({
  children,
  description,
  onClick: onClickProps,
  title,
}) => {
  return (
    <div className="p-2 bg-white dark:bg-slate-800 rounded-2xl max-w-sm shadow-lg">
      <div className="relative flex flex-col min-w-0 break-words border-0 bg-clip-border">
        {children}
        <div className="flex-auto p-2">
          <h5>{title}</h5>
          <p className="mb-6 leading-normal text-sm">{description}</p>
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap justify-center gap-6">
              <button className="relative" onClick={onClickProps}>
                <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-slate-500"></span>
                <span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white px-3 py-1 text-base font-bold text-black duration-100 hover:bg-yellow-400 hover:text-gray-900 dark:bg-white active:translate-y-1 active:translate-x-1 active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841] active:border-b-[0px] transition-all">
                  view
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export interface CardMediaProps {
  alt: string;
  imageSrc: string;
  height?: number;
  width?: number;
}

const CardMedia: React.FC<CardMediaProps> = ({
  alt,
  imageSrc,
  height = 600,
  width = 600,
}) => {
  return (
    <Image
      src={imageSrc}
      alt={alt}
      className="w-full rounded-xl mb-4 -mt-4 block shadow-lg bg-slate-600"
      width={width}
      height={height}
    />
  );
};

export { Card, CardMedia };
