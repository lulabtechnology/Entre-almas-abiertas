import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Section from "../../components/Section";

export const metadata = {
  title: "Sobre mí | Aureya"
};

export default function SobreMiPage() {
  return (
    <>
      <Navbar />
      <main className="page-shell">
        <Section
          label="Quién acompaña"
          title="Un linaje de escucha, no una técnica de moda."
          lead="Este don no nace de un curso rápido ni de una tendencia. Es una forma de estar con el otro que ha sido cultivada durante años."
        >
          <div className="grid-two">
            <div className="card-soft">
              <p style={{ marginBottom: "0.7rem" }}>
                Mi papel no es enseñarte, corregirte ni imponerte una forma de
                ver la vida.
              </p>
              <p style={{ marginBottom: "0.7rem" }}>
                Vengo de un linaje de sensibilidad y escucha profunda. A lo
                largo del tiempo he acompañado a personas en momentos de
                crisis, duelo, confusión y cambio, sosteniendo sus procesos con
                respeto y mucha honestidad.
              </p>
              <p>
                Para mí, acompañarte significa caminar a tu lado mientras
                atraviesas lo que te toca vivir, sin forzarte, sin apurarte y
                sin prometerte que “todo estará bien”, pero sí estando contigo
                mientras lo atraviesas.
              </p>
            </div>

            <div className="mini-card">
              <p style={{ marginBottom: "0.6rem" }}>
                Puedes imaginar este espacio como un faro: no decide por dónde
                navegas, pero sí te ofrece una luz constante mientras avanzas.
              </p>
              <p>
                Cuando te sientas listo, estaré aquí para escucharte con calma y
                presencia real.
              </p>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
