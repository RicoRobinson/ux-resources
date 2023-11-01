"use client";
import { Card, CardMedia } from "../components/Card";
import PageHeader from "../components/PageHeader";
import { Resource } from "../types/resource";
import data from "./data.json";

export default function Page() {
  const resources: Resource[] = data.data;

  return (
    <>
      <PageHeader
        title="Design Resources"
        description="Unlock your potential with our curated toolbox. Essential resources for both designers and developers to excel."
      />
      <ul className="flex gap-8 flex-wrap">
        {resources.map((resource) => {
          return (
            <li key={resource.id}>
              <Card
                title={resource.title}
                description={resource.description}
                onClick={() => {
                  console.log(resource.url);
                }}>
                <CardMedia alt="" imageSrc={resource.thumbnail} />
              </Card>
            </li>
          );
        })}
      </ul>
    </>
  );
}
