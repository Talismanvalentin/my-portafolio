// app/dashboard/page.tsx

export default function DashboardPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">📊 Plataformas de Estudio</h1>
      <ul className="list-disc pl-5">
        <li><a href="https://app.hackthebox.com" target="_blank" rel="noopener noreferrer">Hack The Box</a></li>
        <li><a href="https://academy.hackthebox.com" target="_blank" rel="noopener noreferrer">HTB Academy</a></li>
        <li><a href="https://duolingo.com" target="_blank" rel="noopener noreferrer">Duolingo</a></li>
        <li><a href="https://www.hackerrank.com" target="_blank" rel="noopener noreferrer">HackerRank</a></li>
        <li><a href="https://app.codecrafters.io" target="_blank" rel="noopener noreferrer">CodeCrafters</a></li>
        <li><a href="https://brilliant.org" target="_blank" rel="noopener noreferrer">Brilliant</a></li>
        <li><a href="https://hackerone.com/talismanvalentin" target="_blank" rel="noopener noreferrer">HackerOne</a></li>
        <li><a href="https://bugcrowd.com/talismanvalentin" target="_blank" rel="noopener noreferrer">Bugcrowd</a></li>
        <li><a href="https://portswigger.net/web-security/dashboard" target="_blank" rel="noopener noreferrer">PortSwingger</a></li>
      </ul>
    </section>
  );
}
