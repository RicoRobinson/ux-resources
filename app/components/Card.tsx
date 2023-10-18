import Image from "next/image";

// components/Card.tsx
export interface CardProps {}

const Card: React.FC<CardProps> = ({}) => {
  return (
    <div className="w-full max-w-full mb-6 md:w-6/12 md:flex-none xl:mb-0 xl:w-3/12 p-2 bg-white dark:bg-zinc-600">
      <div className="relative flex flex-col min-w-0 break-words  border-0 shadow-soft-xl rounded-2xl bg-clip-border">
        <div className="relative">
          <a className="block shadow-xl rounded-2xl">
            <Image
              src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-dashboard/assets/img/home-decor-1.jpg"
              alt="img-blur-shadow"
              className="max-w-full shadow-soft-2xl rounded-2xl"
              width={1000}
              height={100}
            />
          </a>
        </div>
        <div className="flex-auto px-1 pt-6">
          <p className="">Project #2</p>
          <h5>Modern</h5>
          <p className="mb-6 leading-normal text-sm">Some description</p>
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="inline-block px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs hover:scale-102 active:shadow-soft-xs tracking-tight-soft border-fuchsia-500 text-fuchsia-500 hover:border-fuchsia-500 hover:bg-transparent hover:text-fuchsia-500 hover:opacity-75 hover:shadow-none active:bg-fuchsia-500 active:text-white active:hover:bg-transparent active:hover:text-fuchsia-500">
              Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
