import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Section from "../../components/Section";

export const metadata = {
  title: "¿Para quién es este espacio? | Aureya"
};

export default function ParaQuienPage() {
  return (
    <>
      <Navbar />
      <main className="page-shell">
        <Section
          label="¿Para quién?"
          title="Para personas que ya no quieren cargar con todo solas."
          lead="Si sientes que lo que vives te desborda y no encuentras con quién hablarlo en profundidad, este espacio puede ser para ti."
        >
          <div className="grid-two">
            <div className="card-soft">
              <h2 style={{ fontSize: "1.05rem", marginBottom: "0.8rem" }}>
                Personas que suelen venir a este espacio
              </h2>
              <ul className="bullet-soft">
                <li>Quienes se sienten solas o desbordadas emocionalmente.</li>
                <li>
                  Personas que no pueden hablar con su familia porque “no los
                  entienden”.
                </li>
                <li>
                  Quienes atraviesan rupturas, duelos, cambios, ansiedad o
                  crisis personales.
                </li>
                <li>
                  Personas que buscan ser escuchadas sin juicio y con un corazón
                  abierto.
                </li>
                <li>
                  Quienes necesitan claridad cuando sienten que la vida se
                  traba o se vuelve muy pesada.
                </li>
              </ul>
            </div>

            <div className="mini-card">
              <p style={{ marginBottom: "0.7rem" }}>
                Si estás cansado de explicarte una y otra vez, si sientes que te
                escuchan pero no te comprenden de verdad, tal vez sea momento de
                probar otra forma de estar acompañado.
              </p>
              <p>
                Aquí no se trata de convencerte de nada, sino de darte un lugar
                donde tu experiencia interior tiene espacio y valor.
              </p>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
