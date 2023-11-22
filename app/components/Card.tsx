// components/Card.tsx
import Image from "next/image";
import { ReactNode } from "react";

export interface CardProps {
  children: ReactNode | ReactNode[];
  description: string;
  onClick(): void;
  title: string;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="p-4 bg-white dark:bg-neutral-800 rounded-2xl max-w-sm shadow-lg">
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
  width = 600,
}) => {
  return (
    <div className="relative">
      <div
        className="colored-shadow absolute z-0"
        style={{
          backgroundImage: `url(/assets/img/${imageSrc})`,
        }}
      />
      <Image
        src={`/assets/img/${imageSrc}`}
        alt={alt}
        className="w-full rounded-xl mb-6 -mt-8 block bg-gray-600 relative z-10"
        width={width}
        height={width / 2}
      />
    </div>
  );
};

export { Card, CardMedia };
