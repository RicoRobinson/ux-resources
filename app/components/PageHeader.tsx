// components/PageHeader.tsx
export interface PageHeaderProps {
  title: string;
  description: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description }) => {
  return (
    <div className="z-10 max-w-5xl w-full items-start justify-between lg:flex">
      <div>
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <p>{description}</p>
      </div>
      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        <a
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 underline"
          href="https://www.linkedin.com/in/rico-robinson/"
          target="_blank"
          rel="noopener noreferrer">
          By Rico Robinson
        </a>
      </div>
    </div>
  );
};

export default PageHeader;
