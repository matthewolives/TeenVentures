import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/20 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between gap-4">
        <Link href="/" className="hover:opacity-70 transition-opacity">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/Logo.png" alt="TeenVentures" className="h-16 object-contain" />
        </Link>
        <p className="font-mono text-xs text-white/50">
          © {new Date().getFullYear()} TeenVentures. Tutti i diritti riservati.
        </p>
      </div>
    </footer>
  );
}
