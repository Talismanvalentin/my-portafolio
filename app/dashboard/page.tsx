"use client";

import { useState } from "react";
import Image from "next/image";

// Lista de plataformas de estudio con su nombre, icono y URL
const platforms = [
  {
    name: "Hack The Box",
    icon: "/icon/hack-the-box.svg",
    url: "https://app.hackthebox.com/profile/2019543",
  },
  {
    name: "Duolingo",
    icon: "/icon/duolingo.webp",
    url: "https://www.duolingo.com/profile/TalismanVe",
  },
  {
    name: "HackerRank",
    icon: "/icon/hackerrank.png",
    url: "https://www.hackerrank.com/profile/talmeireles101",
  },
  {
    name: "CodeCrafters",
    icon: "/icon/Codecraftes.webp",
    url: "https://app.codecrafters.io/users/Talismanvalentin",
  },
  {
    name: "Brilliant",
    icon: "/icon/brilliant.webp",
    url: "https://brilliant.org",
  },
  {
    name: "HackerOne",
    icon: "/icon/hackerone.svg",
    url: "https://hackerone.com/talismanvalentin",
  },
  {
    name: "Bugcrowd",
    icon: "/icon/bugcrowd-svgrepo-com.svg",
    url: "https://bugcrowd.com/talismanvalentin",
  },
  {
    name: "PortSwigger",
    icon: "/icon/burp-suite-icon.webp",
    url: "https://portswigger.net/web-security/dashboard",
  },
];

// Optimized rendering of certificates
const certificates = [
  "MiPrimerCurso.jpg",
  "HTB Academy Student Transcript.pdf",
  "Talisman Verdun - 2024-02-27.pdf",
  "Talisman Verdun - 2024-03-07.pdf",
  "Talisman Verdun - 2024-03-12.pdf",
  "Talisman Verdun - 2024-03-25.pdf",
  "Talisman Verdun - 2024-03-25 (1).pdf",
  "Talisman Verdun - 2024-04-12.pdf",
  "Talisman Verdun - 2024-04-18.pdf",
  "Talisman Verdun - 2024-04-30.pdf",
  "Talisman Verdun - 2024-11-19.pdf",
  "Talisman Verdun - 2024-11-22.pdf",
];

export default function DashboardPage() {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  return (
    <section className="space-y-6">
      {/* Título de la sección de plataformas de estudio */}
      <h1 className="text-3xl font-bold text-white">📊 Plataformas de Estudio</h1>

      {/* Contenedor en formato grid para mostrar las plataformas */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {/* Recorre el array de plataformas para generar un enlace para cada una */}
        {platforms.map((platform) => (
          <a
            key={platform.name} // Utiliza el nombre de la plataforma como clave
            href={platform.url} // Enlace a la plataforma
            target="_blank" // Abre el enlace en una nueva pestaña
            rel="noopener noreferrer" // Seguridad adicional para enlaces externos
            className="flex flex-col items-center bg-zinc-800 hover:bg-zinc-700 transition-all p-4 rounded-xl shadow-md hover:scale-105"
          >
            {/* Imagen de la plataforma */}
            <Image
              src={platform.icon}
              alt={platform.name} // Texto alternativo con el nombre de la plataforma
              width={50}
              height={50}
              className="rounded bg-white p-1" // Estilos para la imagen
            />
            {/* Nombre de la plataforma */}
            <span className="mt-2 text-sm text-white text-center">{platform.name}</span>
          </a>
        ))}
      </div>

      {/* Sección principal de certificados con acordeón */}
      <div className="mt-10 space-y-4">
        {/* Título de la sección de certificados */}
        <h2 className="text-2xl font-bold text-white">🎓 Certificados</h2>
        <div>
          <button
            onClick={() => setIsAccordionOpen(!isAccordionOpen)}
            className="w-full text-left bg-zinc-800 text-white p-4 rounded-lg shadow-md hover:bg-zinc-700 transition-all"
          >
            {isAccordionOpen ? "Ocultar Certificados" : "Mostrar Certificados"}
          </button>
          {isAccordionOpen && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
              {/* Recorre la lista de archivos de certificados */}
              {certificates.map((fileName) => {
                // Formatea el título del certificado quitando la extensión y reemplazando guiones por espacios
                const title = fileName.replace(/\.(pdf|jpg)/i, "").replace(/-/g, " ");
                // Verifica si el archivo es una imagen (JPG)
                const isImage = fileName.toLowerCase().endsWith(".jpg");
                const filePath = `/photos/${fileName}`;

                return (
                  <div
                    key={fileName} // Usamos el nombre del archivo como clave
                    className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700 p-4 rounded-2xl shadow-xl hover:scale-[1.02] transition-transform duration-200"
                  >
                    {/* Título del certificado */}
                    <h3 className="text-white text-sm font-semibold mb-3 text-center">{title}</h3>

                    {/* Si es una imagen (JPG), se muestra como imagen con enlace */}
                    {isImage ? (
                      <a
                        href={filePath}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={filePath}
                          alt={title}
                          className="rounded-lg w-full aspect-[1/1] object-cover border-2 border-zinc-600"
                        />
                      </a>
                    ) : (
                      <>
                        {/* Si es un PDF, se muestra embebido en un iframe */}
                        <iframe
                          src={filePath}
                          className="w-full aspect-[1/1] rounded-lg border-2 border-zinc-600 mb-3"
                          title={title}
                          scrolling="no"
                        />
                        {/* Enlace para ver el PDF completo en otra pestaña */}
                        <a
                          href={filePath}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-400 hover:text-blue-300 underline block text-center"
                        >
                          Ver completo
                        </a>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Mensaje de desarrollo en la parte inferior */}
      <span className="bg-yellow-200 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full inline-block">
        🚧 Este Dashboard está en desarrollo. ¡Pronto más contenido!
      </span>
    </section>
  );
}

