import Image from "next/image";
import { metaData } from "../constants/meta";

export const metadata = {
  title: `🚀 ${metaData.title}`,
  description: "Portafolio de Talisman – Full-stack developer con enfoque en ciberseguridad y bug hunting.",
  openGraph: {
    images: [metaData.ogImage],
  },
};

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

      {/* Saludo principal */}
      <h1 className="mb-8 text-3xl md:text-5xl font-bold text-left">
        ¡Hola! Soy {metaData.name}
      </h1>

      {/* Descripción */}
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <p>
          Soy un "Developer by Day, Ethical Hacker by Night" desarrollador full-stack y entusiasta de la ciberseguridad con un enfoque profesional en el <strong>bug hunting</strong>. Combino habilidades técnicas sólidas con un interés profundo en cómo aprendemos, estudiamos y nos desarrollamos como individuos.
        </p>
        <p>
          Desde 2023 me he dedicado intensamente a aprender programación, hacking ético y pentesting. Domino tecnologías como{" "}
          <strong>JavaScript, TypeScript, Python, Node.js, Django, React, Docker, SQL, Git</strong>, y manejo fluido de <strong>Linux</strong> con distros como Kali y Arch (EndeavourOS).
        </p>
        <p>
          Me formé en la academia Hola Mundo y amplié mis estudios de forma autodidacta con plataformas como Hack The Box, HackerRank, Brilliant, CodeCrafters, PortSwigger Academy y más.
        </p>
        <p>
          También me intereso por la <strong>psicología del aprendizaje</strong>, el <strong>estado de flow</strong>, la <strong>meditación aplicada al estudio</strong> y técnicas como el <strong>Método Feynman</strong>, buscando mejorar no solo qué aprendo, sino cómo lo aprendo.
        </p>
        <p>
          Actualmente me especializo en <strong>bug hunting</strong> y seguridad ofensiva, combinando mis estudios técnicos con una visión de crecimiento personal y autodisciplina. Este portfolio forma parte de ese camino. 🚀
        </p>
      </div>
      <div>
        <span className="bg-yellow-200 text-yellow-800 text-xs font-bold px-2 py-1 rounded-full">
          🚧 Este portafolio está en desarrollo. ¡Pronto más contenido!
        </span>
      </div>
    </section>

  );
}
