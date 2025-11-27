import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Section from "../../components/Section";

export const metadata = {
  title: "¿Qué es este acompañamiento? | Aureya"
};

export default function AcompanamientoPage() {
  return (
    <>
      <Navbar />
      <main className="page-shell">
        <Section
          label="Acompañamiento humano"
          title="Un espacio para ser, sin presión y sin máscaras."
          lead="Este acompañamiento es un refugio íntimo donde puedes bajar las defensas, respirar y poner en palabras lo que te pasa."
        >
          <div className="card-soft" style={{ marginTop: "1.3rem" }}>
            <p style={{ marginBottom: "0.9rem" }}>
              Aquí recibes presencia humana auténtica:
            </p>
            <ul className="bullet-soft">
              <li>Sin juicios sobre lo que sientes o piensas.</li>
              <li>Sin etiquetas ni diagnósticos que te definan.</li>
              <li>Sin obligaciones de “ser positivo” o “estar bien”.</li>
            </ul>

            <p style={{ marginTop: "1rem", marginBottom: "0.6rem" }}>
              Mi papel no es decirte qué hacer, ni darte fórmulas mágicas.
              Tampoco es darte un discurso motivacional.
            </p>
            <p>
              Mi función es sostenerte, escucharte profundamente y acompañarte a
              mirar con claridad lo que estás viviendo, para que poco a poco
              puedas habitarlo con más serenidad.
            </p>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
