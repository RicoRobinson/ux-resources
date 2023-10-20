// components/Card.tsx
import Image from "next/image";
import { ReactNode } from "react";

export interface CardProps {
  title: string;
  description: string;
  children: ReactNode | ReactNode[];
}

const Card: React.FC<CardProps> = ({ title, description, children }) => {
  return (
    <div className="p-2 bg-white dark:bg-zinc-800 rounded-2xl max-w-sm shadow-lg">
      <div className="relative flex flex-col min-w-0 break-words  border-0 bg-clip-border">
        {children}
        <div className="flex-auto p-2">
          <h5>{title}</h5>
          <p className="mb-6 leading-normal text-sm">{description}</p>
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="animated-gradient inline-block animate-gradient px-6 py-3 font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl from-purple-700 to-pink-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs">
              View
            </button>
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
      className="w-full rounded-xl mb-4 block shadow-lg bg-white"
      width={width}
      height={height}
    />
  );
};

export { Card, CardMedia };
