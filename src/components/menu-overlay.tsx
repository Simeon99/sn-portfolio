import { projects } from "@/data/projects";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "#" },
  { label: "Projects", href: "/projects", meta: `(${projects.length})` },
  { label: "Blog", href: "#" },
  { label: "Contact", href: "#contact" },
];

export function MenuOverlay({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <div
      aria-hidden={!open}
      inert={!open ? true : undefined}
      className={`absolute inset-x-0 top-0 z-30 flex min-h-[65vh] flex-col bg-[#d8472b] px-6 pt-6 pb-10 text-white transition-[transform,opacity] ease-[cubic-bezier(0.23,1,0.32,1)] sm:px-10 ${
        open
          ? "translate-y-0 opacity-100 duration-[380ms]"
          : "pointer-events-none -translate-y-4 opacity-0 duration-[220ms]"
      }`}
    >
      <div className="flex items-start justify-between">
        <span className="text-lg font-bold tracking-tight">
          S&N<sup className="text-xs">®</sup>
        </span>

        <button
          onClick={onClose}
          className="flex items-center gap-2 text-sm font-bold tracking-wide uppercase transition-transform duration-200 ease-out hover:scale-105 active:scale-95"
        >
          <span className="relative h-4 w-6">
            <span className="absolute top-1/2 left-0 block h-0.5 w-6 -translate-y-1/2 rotate-45 bg-white" />
            <span className="absolute top-1/2 left-0 block h-0.5 w-6 -translate-y-1/2 -rotate-45 bg-white" />
          </span>
          Menu
        </button>
      </div>

      <nav className="absolute top-24 right-6 flex flex-col items-end gap-3 text-2xl font-bold sm:right-10 sm:text-3xl">
        {navItems.map((item, i) => (
          <a
            key={item.label}
            href={item.href}
            style={{ transitionDelay: open ? `${80 + i * 40}ms` : "0ms" }}
            className={`transition-[transform,opacity] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-white/70 ${
              open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
            }`}
          >
            {item.label} {item.meta}
          </a>
        ))}
      </nav>

      <div className="mt-auto">
        <a
          href="tel:+10000000000"
          className="block text-sm font-semibold transition-colors duration-200 ease-out hover:text-white/70"
        >
          (000) 000-0000
        </a>
        <a
          href="mailto:hello@sn-portfolio.com"
          className="block text-3xl font-bold transition-colors duration-200 ease-out hover:text-white/70 sm:text-4xl"
        >
          hello@sn-portfolio.com
        </a>
      </div>
    </div>
  );
}
