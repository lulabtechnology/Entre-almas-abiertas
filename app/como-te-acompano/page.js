import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Section from "../../components/Section";

export const metadata = {
  title: "Cómo te acompaño | Aureya"
};

export default function ComoTeAcompanoPage() {
  return (
    <>
      <Navbar />
      <main className="page-shell">
        <Section
          label="Formas de acompañarte"
          title="Sesiones individuales y acompañamientos más profundos."
          lead="Dependiendo de lo que estés viviendo, podemos encontrarnos por hora o diseñar un fin de semana de retiro personal."
        >
          <div className="grid-two">
            <div className="card-soft">
              <p className="tag-pill">Sesiones por hora</p>
              <h2 style={{ fontSize: "1.1rem", margin: "0.8rem 0" }}>
                Sesiones de acompañamiento individual
              </h2>
              <p style={{ marginBottom: "0.7rem" }}>
                Encuentros uno a uno donde conversamos con calma y ordenas tu
                proceso interior.
              </p>
              <ul className="bullet-soft">
                <li>Te ayudo a visibilizar lo que sientes.</li>
                <li>Ponemos palabras a aquello que es difícil nombrar.</li>
                <li>Soltamos tensión, culpa y exigencias internas.</li>
                <li>Buscamos claridad en medio del ruido emocional.</li>
              </ul>
            </div>

            <div className="card-soft">
              <p className="tag-pill">Fin de semana</p>
              <h2 style={{ fontSize: "1.1rem", margin: "0.8rem 0" }}>
                Acompañamiento de retiro personal
              </h2>
              <p style={{ marginBottom: "0.7rem" }}>
                Si necesitas algo más profundo, podemos organizar un fin de
                semana en playa o montaña: un espacio íntimo y seguro para
                reconectar contigo.
              </p>
              <ul className="bullet-soft">
                <li>Conversaciones profundas y pausadas.</li>
                <li>Descanso emocional y espacios de silencio.</li>
                <li>Caminatas acompañadas y tiempo para integrar.</li>
                <li>Apoyo constante durante todo tu proceso.</li>
              </ul>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
