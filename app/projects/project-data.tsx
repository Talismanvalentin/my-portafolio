export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "YouTubeConverter",
    year: 2023,
    description: "Herramienta CLI para descargar y convertir videos de YouTube a formatos como MP3 y MP4, con opciones personalizables para usuarios avanzados",
    url: "https://github.com/Talismanvalentin/YoutubeConverter",
  },

];
