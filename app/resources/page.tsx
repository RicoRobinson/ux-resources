"use client";
import { Card, CardMedia } from "../components/Card";
import { Resource } from "../types/resource";

export default function Page() {
  const resources: Resource[] = [
    {
      id: 1,
      title: "Interaction Design Foundation",
      category: "Community",
      description:
        "Online UX design courses by experts, with industry-recognized certificates",
      thumbnail: "ixdf-logo-full-expanded.svg",
      url: "https://www.interaction-design.org/",
    },
    {
      id: 2,
      title: "Unsplash",
      category: "Photos",
      description:
        "Curated collection of high resolution stock photos by photographers.",
      thumbnail: "ixdf-logo-full-expanded.svg",
      url: "https://unsplash.com/",
    },
    {
      id: 3,
      title: "Adobe Color Wheel",
      category: "Colors",
      description:
        "Create color schemes with the color wheel or browse thousands of color combinations.",
      thumbnail: "ixdf-logo-full-expanded.svg",
      url: "https://color.adobe.com/?ref=neede.co",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center px-24 py-12">
      <div className="z-10 max-w-5xl w-full items-center justify-between lg:flex mb-8">
        <h2 className="text-3xl">UX Resources</h2>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://www.linkedin.com/in/rico-robinson/"
            target="_blank"
            rel="noopener noreferrer">
            By Rico Robinson
          </a>
        </div>
      </div>
      <ul className="flex gap-8">
        {resources.map((resource) => {
          return (
            <li key={resource.id}>
              <Card title={resource.title} description={resource.description}>
                <CardMedia alt="" imageSrc={resource.thumbnail} />
              </Card>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
