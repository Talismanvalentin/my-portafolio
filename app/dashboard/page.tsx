import Image from "next/image";

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

export default function DashboardPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold text-white">📊 Plataformas de Estudio</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {platforms.map((platform) => (
          <a
            key={platform.name}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center bg-zinc-800 hover:bg-zinc-700 transition-all p-4 rounded-xl shadow-md hover:scale-105"
          >
            <Image
              src={platform.icon}
              alt={platform.name}
              width={50}
              height={50}
              className="rounded bg-white p-1"
            />
            <span className="mt-2 text-sm text-white text-center">{platform.name}</span>
          </a>
        ))}
      </div>

      <div className="mt-10 space-y-4">
        <h2 className="text-2xl font-bold text-white">🎓 Certificados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
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
          ].map((fileName) => {
            const title = fileName.replace(/\.(pdf|jpg)/i, "").replace(/-/g, " ");
            const isImage = fileName.toLowerCase().endsWith(".jpg");
            return (
              <div
                key={fileName}
                className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700 p-4 rounded-2xl shadow-xl hover:scale-[1.02] transition-transform duration-200"
              >
                <h3 className="text-white text-sm font-semibold mb-3 text-center">{title}</h3>
                {isImage ? (
                  <a
                    href={`/photos/${fileName}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={`/photos/${fileName}`}
                      alt={title}
                      className="rounded-lg w-full aspect-[1/1] object-cover border-2 border-zinc-600"
                    />
                  </a>
                ) : (
                  <>
                    <iframe
                      src={`/photos/${fileName}`}
                      className="w-full aspect-[1/1] rounded-lg border-2 border-zinc-600 mb-3"
                      title={title}
                      scrolling="no"
                    />
                    <a
                      href={`/photos/${fileName}`}
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
      </div>



      <span className="bg-yellow-200 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full inline-block">
        🚧 Este Dashboard está en desarrollo. ¡Pronto más contenido!
      </span>
    </section>
  );
}

