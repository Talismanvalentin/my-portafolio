// app/dashboard/page.tsx

export default function DashboardPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">📊 Dashboard de Estudio</h1>
      <ul className="list-disc pl-5">
        <li><a href="https://app.hackthebox.com" target="_blank" rel="noopener noreferrer">Hack The Box</a></li>
        <li><a href="https://tryhackme.com" target="_blank" rel="noopener noreferrer">TryHackMe</a></li>
        <li><a href="https://academy.hackthebox.com" target="_blank" rel="noopener noreferrer">HTB Academy</a></li>
        <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        <li><a href="https://chat.openai.com" target="_blank" rel="noopener noreferrer">ChatGPT</a></li>
        <li><a href="https://duolingo.com" target="_blank" rel="noopener noreferrer">Duolingo</a></li>
      </ul>
    </section>
  );
}
