import React from "react";
import { Timeline, TimelineItem } from "@/components/timeline";

import experiences from "@/data/experiences";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Experience = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-4">Experiencia</h2>
      <Timeline>
        {experiences.map((exp, index) => (
          <TimelineItem key={index}>
            <Card>
              <CardHeader>
                <CardTitle>{exp.title}</CardTitle>
                <CardDescription className="text-orange-400 dark:text-orange-300">
                  {exp.company} | {exp.date}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="max-w-2xl">{exp.description}</p>
              </CardContent>
            </Card>
          </TimelineItem>
        ))}
      </Timeline>
    </section>
  );
};

export default Experience;
