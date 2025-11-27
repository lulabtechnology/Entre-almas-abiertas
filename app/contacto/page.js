import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Section from "../../components/Section";
import GradientButton from "../../components/GradientButton";

export const metadata = {
  title: "Contacto | Aureya"
};

export default function ContactoPage() {
  return (
    <>
      <Navbar />
      <main className="page-shell">
        <Section
          label="Agenda tu espacio"
          title="Si sientes que es el momento, escribe."
          lead="Cuéntame brevemente qué estás viviendo y qué tipo de acompañamiento sientes que necesitas ahora."
        >
          <div className="form-grid">
            <div className="card-soft">
              {/* Cambia el mailto por el correo real de la clienta */}
              <form
                action="mailto:correo@aureya.com"
                method="post"
                encType="text/plain"
              >
                <div className="form-field">
                  <label htmlFor="nombre">Nombre</label>
                  <input
                    id="nombre"
                    name="Nombre"
                    type="text"
                    placeholder="Tu nombre"
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="email">Correo electrónico</label>
                  <input
                    id="email"
                    name="Correo"
                    type="email"
                    placeholder="tu@correo.com"
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="motivo">¿Qué estás viviendo?</label>
                  <textarea
                    id="motivo"
                    name="Motivo"
                    rows={5}
                    placeholder="Puedes compartir brevemente qué te está pasando y qué tipo de acompañamiento buscas."
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="modalidad">Modalidad que te interesa</label>
                  <input
                    id="modalidad"
                    name="Modalidad"
                    type="text"
                    placeholder="Sesiones por hora / Fin de semana de retiro, etc."
                  />
                </div>

                <p className="form-hint">
                  Al enviar este mensaje no se genera ningún compromiso. Solo es
                  el primer paso para conversar y ver si este espacio es para ti.
                </p>

                <div style={{ marginTop: "1.1rem" }}>
                  <GradientButton>Enviar mensaje</GradientButton>
                </div>
              </form>
            </div>

            <div className="mini-card">
              <h2 style={{ fontSize: "1rem", marginBottom: "0.8rem" }}>
                ¿Qué puedes esperar después de escribir?
              </h2>
              <ul className="bullet-soft">
                <li>
                  Una respuesta cercana y clara, sin automatismos ni mensajes
                  genéricos.
                </li>
                <li>
                  Si es necesario, propondré una primera sesión para sentir si
                  este acompañamiento encaja contigo.
                </li>
                <li>
                  Siempre podrás decir que no. Este espacio se construye desde
                  la libertad y el respeto a tu ritmo.
                </li>
              </ul>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
