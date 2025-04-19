import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <Image
        src="/profile.png"
        alt="Foto de perfil"
        className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
        unoptimized
        width={160}
        height={160}
        priority
      />
      <h1 className="mb-8 text-3xl font-bold">
        ¡Hola! Soy Talisman 
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Soy un desarrollador full-stack con una fuerte orientación hacia la ciberseguridad, el bug hunting, y la creación de herramientas con impacto real.
        </p>
        <p>
          Desde enero de 2023 vengo aprendiendo programación y ciberseguridad de forma intensiva. Comencé en la academia Hola Mundo y seguí perfeccionándome de forma autodidacta.
        </p>
        <p>
          Manejo tecnologías como <strong>JavaScript, TypeScript, Python, Node.js, Django, React, Docker, Git, GitHub, SQL</strong>, y tengo experiencia trabajando con <strong>Linux</strong>, incluyendo herramientas de pentesting como <code>wifite</code>, y distros como <strong>Kali y Arch (EndeavourOS)</strong>.
        </p>
        <p>
          También desarrollo proyectos que integran inteligencia artificial, meditación, técnicas de estudio como el Método Feynman, y organización personal. Mi objetivo es crear soluciones que ayuden a estudiar mejor, concentrarse más y desbloquear nuestro máximo potencial.
        </p>
        <p>
          Actualmente estoy construyendo mi camino profesional en el mundo del <strong>bug hunting</strong>, desarrollando proyectos open source y preparando contenido para <strong>YouTube</strong>.
        </p>
        <p>
          Este portfolio es parte de ese camino. 🚀
        </p>
        <a
          href="/projects"
          className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Ver mis proyectos
        </a>
      </div>
    </section>
  );
}
