"use client";
import { Card, CardMedia } from "../components/Card";
import PageHeader from "../components/PageHeader";
import { Resource } from "../types/resource";
import data from "./data.json";

export default function Page() {
  const resources: Resource[] = data.data;

  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <>
      <PageHeader
        title="Design Resources"
        description="Unlock your potential with our curated toolbox. Essential resources for both designers and developers to excel."
      />
      <ul className="flex gap-12 flex-wrap">
        {resources.map((resource) => {
          return (
            <li key={resource.id}>
              <Card
                title={resource.title}
                description={resource.description}
                onClick={() => openInNewTab(resource.url)}>
                <CardMedia alt="" imageSrc={resource.thumbnail} />
                <div className="flex-auto">
                  <h5>{resource.title}</h5>
                  <p className="mb-6 leading-normal text-sm">
                    {resource.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap justify-center gap-6">
                      <button
                        className="relative"
                        onClick={() => openInNewTab(resource.url)}>
                        <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-slate-500"></span>
                        <span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white px-3 py-1 text-base font-bold text-black duration-100 hover:bg-yellow-400 hover:text-gray-900 dark:bg-white active:translate-y-1 active:translate-x-1 active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841] active:border-b-[0px] transition-all">
                          open
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </Card>
            </li>
          );
        })}
      </ul>
    </>
  );
}
