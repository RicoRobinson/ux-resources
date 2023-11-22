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
    <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl max-w-sm shadow-lg">
      <div className="relative flex flex-col min-w-0 break-words border-0 bg-clip-border">
        {children}
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
      src={`./assets/img/${imageSrc}`}
      alt={alt}
      className="w-full rounded-xl mb-4 -mt-8 block shadow-lg bg-slate-600"
      width={width}
      height={height}
    />
  );
};

export { Card, CardMedia };
