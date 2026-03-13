export const metadata = {
  title: "Nobar Tracker",
  description: "Nobar diary Riski & Rapa 🎬",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">

        <header className="border-b border-gray-700 p-4">
          <h1 className="text-xl font-bold">
            🎬 Nobar Tracker
          </h1>
        </header>

        <main className="p-6">
          {children}
        </main>

      </body>
    </html>
  );
}