import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Section from "../components/Section";
import GradientButton from "../components/GradientButton";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="page-shell">
        <div className="hero-grid">
          <div>
            <p className="hero-kicker">Acompañamiento humano Aureya</p>
            <h1 className="hero-title">Presencia real para cuando la vida pesa.</h1>
            <p className="hero-subtitle">
              Un espacio íntimo donde puedes hablar, llorar, soltar y ser escuchado
              de verdad. Sin juicios, sin doctrinas, sin etiquetas.
            </p>

            <div className="hero-pill-row">
              <span className="hero-pill">Presencia real</span>
              <span className="hero-pill">Escucha profunda</span>
              <span className="hero-pill">Camino acompañado</span>
            </div>

            <Link href="/contacto">
              <GradientButton>Quiero agendar una sesión</GradientButton>
            </Link>

            <p className="hero-note">
              Cuando no quieres cargar a tu familia, cuando te sientes solo aun
              estando rodeado, aquí tienes un refugio humano y sereno.
            </p>
          </div>

          <div className="hero-symbol-shell">
            <div className="hero-symbol-circle">
              <div className="hero-symbol-circle-inner">
                <img
                  src="/logo-aureya.png"
                  alt="Símbolo Aureya"
                />
              </div>
            </div>
          </div>
        </div>

        <Section
          label="Este espacio"
          title="Cuando necesitas a alguien que de verdad te escuche."
          lead="A veces la vida pesa, se traba, se vuelve demasiado ruidosa por dentro. Este espacio existe justamente para esos momentos."
        >
          <div className="card-soft" style={{ marginTop: "1.6rem" }}>
            <p style={{ marginBottom: "1rem" }}>
              Aquí puedes traer todo eso que normalmente te guardas:
            </p>
            <ul className="bullet-soft">
              <li>Lo que no dices para no preocupar a tu familia.</li>
              <li>Lo que no compartes porque sientes que “no te entienden”.</li>
              <li>Lo que pesa tanto por dentro que ya no sabes cómo sostener.</li>
            </ul>
          </div>
        </Section>

        <Section
          label="Claridad"
          title="Lo que sí es este acompañamiento… y lo que no."
        >
          <div className="grid-two">
            <div className="card-soft">
              <h2 style={{ fontSize: "1.1rem", marginBottom: "0.9rem" }}>
                Lo que NO es
              </h2>
              <ul className="bullet-soft">
                <li>No es religión.</li>
                <li>No es esoterismo ni brujería.</li>
                <li>No es coaching motivacional.</li>
                <li>No es terapia psicológica tradicional.</li>
                <li>No es nutrición ni nada clínico.</li>
              </ul>
            </div>

            <div className="card-soft">
              <h2 style={{ fontSize: "1.1rem", marginBottom: "0.7rem" }}>
                Lo que SÍ es
              </h2>
              <p style={{ marginBottom: "0.7rem" }}>
                Es humanidad. Es presencia. Es una escucha profunda y serena, sin
                juicios, sin prisas y sin intentar “arreglarte”.
              </p>
              <p style={{ marginBottom: "0.5rem" }}>
                Es acompañarte mientras atraviesas procesos que se sienten
                demasiado intensos para llevarlos solo.
              </p>
              <p>
                Aquí no hay rituales, ni lecturas, ni promesas mágicas. Solo una
                presencia humana que te sostiene.
              </p>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
}
