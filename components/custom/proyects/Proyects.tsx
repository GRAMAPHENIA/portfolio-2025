import React from "react";
import { Timeline, TimelineItem } from "@/components/timeline";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ProyectsData from "@/data/proyects";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { LinkIcon } from "lucide-react";

const Proyects = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-4">Proyectos realizados</h2>

      <Timeline>
        {ProyectsData.map((proyecto, index) => (
          <TimelineItem key={index}>
            <Card>
              <CardHeader>
                <CardTitle className="text-zinc-700/70 dark:text-zinc-300">
                  {proyecto.title}
                </CardTitle>
                <CardDescription className="text-orange-400 dark:text-orange-300">
                  {proyecto.date}
                </CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0">
                <Link href={"/"}>
                  <Image
                    width={1904}
                    height={600}
                    src={proyecto.image}
                    alt={proyecto.title}
                    className="object-cover rounded-lg mb-4 border cursor-pointer h-[200px] w-[400px]"
                  />{" "}
                </Link>

                <div className="flex flex-col justify-between">
                  <p className="text-zinc-700/70 dark:text-zinc-300 font-light p-30">
                    {proyecto.description}
                  </p>
                  <div className="flex justify-end space-x-6 mt-4">
                    <a
                      href={proyecto.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-primary bg-secondary/50 border border-neutral-300/50 dark:border-neutral-700/50 hover:bg-secondary px-4 py-2 rounded-full transition-colors antialiased"
                    >
                      <LinkIcon className="mr-2" />
                      visitiar sitio
                    </a>{" "}
                    <a
                      href={proyecto.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-primary bg-secondary/50 border border-neutral-300/50 dark:border-neutral-700/50 hover:bg-secondary px-4 py-2 rounded-full transition-colors antialiased"
                    >
                      <GitHubLogoIcon className="h-6 w-6 mr-2" />
                      Repositorio
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TimelineItem>
        ))}
      </Timeline>
    </section>
  );
};

export default Proyects;
