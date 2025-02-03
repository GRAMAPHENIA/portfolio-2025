"use client";

import { useState } from "react";
import { Moon, Sun, Mail, MapPin, Calendar, AxeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import {
  CodeIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Experience from "@/components/custom/experience/Experience";
import Proyects from "@/components/custom/proyects/Proyects";
import { Card, CardContent } from "@/components/ui/card";

// Solución para iconos de GitHub, LinkedIn y Twitter

export default function Portfolio() {
  const [modoOscuro, setModoOscuro] = useState(false);

  const alternarModoOscuro = () => {
    setModoOscuro(!modoOscuro);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div
      className={`min-h-screen flex flex-col ${
        modoOscuro ? "dark" : ""
      }  lg:mx-40`}
    >
      <section className="flex justify-center">
        <header className=" bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md border rounded-lg px-4 mt-4 w-full mx-2">
          <nav className="flex justify-between items-center py-4 mx-auto">
            <h1 className="text-2xl font-bold">
              <CodeIcon className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
            </h1>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" onClick={alternarModoOscuro}>
                {modoOscuro ? (
                  <Sun className="text-zinc-500 dark:text-zinc-400" />
                ) : (
                  <Moon className="text-zinc-500 dark:text-zinc-400" />
                )}
              </Button>
            </div>
          </nav>
        </header>
      </section>

      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Sección "Sobre mí" */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <Image
              width={800}
              height={800}
              src="/avatares/avatar-he.webp"
              alt="John Doe"
              className="rounded-full w-64 h-64 object-cover"
            />
            <div>
              <h2 className="text-4xl text-orange-400 dark:text-orange-300 font-extrabold mb-1">
                Di Corato juan
              </h2>
              <p className="text-lg mb-6 text-zinc-500 dark:text-zinc-400 max-w-xl">
                Diseñador y desarrollador web con experiencia en la creación de
                sitios, funcionales y responsivos.
              </p>
              <div className="flex flex-col space-y-2">
                <div className="flex items-center">
                  <Mail className="text-slate-500 w-5 h-5 mr-2" />
                  <span>dicoratojuanpablo@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="text-slate-500 w-5 h-5 mr-2" />
                  <span>Buenos Aires, Argentina.</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="text-slate-500 w-5 h-5 mr-2" />
                  <span>Disponible para trabajo freelance</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección "Experiencia" */}
        <Experience />

        {/* Sección "Proyectos" */}
        <Proyects />

        {/* Sección "Habilidades" */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Conocimientos en:</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
              "Tailwind CSS",
              "Shadcn/UI",
            ].map((habilidad, index) => (
              <Card key={index}>
                <CardContent className="flex items-center justify-center p-10">
                  <p className="text-lg font-semibold">{habilidad}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Sección "Contáctame" */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Contáctame</h2>
          <Card>
            <CardContent className="p-6">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-1"
                    >
                      Nombre
                    </label>
                    <Input id="name" placeholder="Tu Nombre" />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-1"
                    >
                      Correo Electrónico
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@correo.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-1"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-2 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-primary bg-card"
                    placeholder="Tu mensaje aquí..."
                  ></textarea>
                </div>
                <Button className="w-full">Enviar Mensaje</Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>
      <Separator />
      <footer className="bg-background py-4">
        <div className="container mx-auto px-4 flex flex-col items-center space-y-2">
          <div className="flex space-x-4">
            <Link href="https://github.com/tuusuario" aria-label="GitHub">
              <GitHubLogoIcon className="w-6 h-6 text-zinc-500 hover:text-slate-400" />
            </Link>
            <Link
              href="https://linkedin.com/in/tuusuario"
              aria-label="LinkedIn"
            >
              <LinkedInLogoIcon className="w-6 h-6 text-zinc-500 hover:text-slate-400" />
            </Link>
            <Link href="https://twitter.com/tuusuario" aria-label="Twitter">
              <TwitterLogoIcon className="w-6 h-6 text-zinc-500 hover:text-slate-400" />
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">
            Sitio creado con <span className="text-blue-400/90">Next.js </span>
            por JR Octubre de {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}
