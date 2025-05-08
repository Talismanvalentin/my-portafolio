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

      <span className="bg-yellow-200 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full inline-block">
        🚧 Este Dashboard está en desarrollo. ¡Pronto más contenido!
      </span>
    </section>
  );
}

