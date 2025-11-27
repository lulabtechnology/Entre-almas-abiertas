import Link from "next/link";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/acompanamiento", label: "Acompañamiento" },
  { href: "/para-quien", label: "¿Para quién?" },
  { href: "/como-te-acompano", label: "Cómo te acompaño" },
  { href: "/sobre-mi", label: "Sobre mí" }
];

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-left">
        <div className="nav-logo-circle">
          <img src="/logo-aureya.png" alt="Logo Aureya" />
        </div>
        <div>
          <div className="nav-title-main">Aureya</div>
          <div className="nav-subtitle">Acompañamiento humano</div>
        </div>
      </div>

      <nav className="nav-links">
        {links.map((item) => (
          <Link key={item.href} href={item.href} className="nav-link">
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="nav-cta-wrap">
        <Link href="/contacto">
          <button className="btn-gradient">Agenda una sesión</button>
        </Link>
      </div>
    </header>
  );
}
