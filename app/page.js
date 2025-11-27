import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Section from "../components/Section";
import GradientButton from "../components/GradientButton";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="page-shell">
        {/* HERO */}
        <section id="inicio" className="section" style={{ marginTop: "2rem" }}>
          <div className="hero-grid">
            <div>
              <p className="hero-kicker">Acompañamiento Humano Aureya</p>
              <h1 className="hero-title">
                Presencia real para cuando la vida{" "}
                <span>se siente demasiado pesada.</span>
              </h1>
              <p className="hero-subtitle">
                Un espacio íntimo donde puedes hablar, llorar, desahogarte y
                ser escuchado de verdad. Sin juicios, sin doctrinas, sin
                etiquetas.
              </p>

              <div className="hero-pill-row">
                <span className="hero-pill">Presencia real</span>
                <span className="hero-pill">Escucha profunda</span>
                <span className="hero-pill">Camino acompañado</span>
              </div>

              <a href="#contacto">
                <GradientButton>Quiero agendar una sesión</GradientButton>
              </a>

              <p className="hero-note" style={{ marginTop: "1rem" }}>
                Cuando no quieres preocupar a tu familia, cuando te sientes solo
                aun estando rodeado, aquí tienes un refugio humano y sereno.
              </p>
            </div>

            {/* LOGO GRANDE, SIN DOBLE CÍRCULO */}
            <div className="hero-logo-shell">
              <div className="hero-logo-frame">
                <img src="/logo-aureya.png" alt="Símbolo Aureya" />
              </div>
            </div>
          </div>
        </section>

        {/* ¿QUÉ ES ESTE ACOMPAÑAMIENTO? */}
        <Section
          id="acompanamiento"
          label="Este espacio"
          title="Cuando necesitas a alguien que de verdad te escuche."
          lead="A veces la vida pesa. A veces te sientes solo, incluso rodeado de otros. Este espacio existe justamente para esos momentos. Para ti."
        >
          <div className="card-soft" style={{ marginTop: "1.6rem" }}>
            <p style={{ marginBottom: "1rem" }}>
              Aquí recibes presencia humana auténtica, sin presiones ni
              expectativas:
            </p>
            <ul className="bullet-soft">
              <li>No es religión.</li>
              <li>No es esoterismo ni brujería.</li>
              <li>No es coaching motivacional.</li>
              <li>No es terapia psicológica tradicional.</li>
              <li>No es nutrición ni nada clínico.</li>
            </ul>
            <p style={{ marginTop: "1rem" }}>
              Es humanidad. Es acompañarte desde la empatía, la claridad y la
              serenidad. Es sostenerte cuando atraviesas procesos que se sienten
              demasiado intensos para llevarlos solo.
            </p>
          </div>
        </Section>

        {/* ¿PARA QUIÉN? */}
        <Section
          id="para-quien"
          label="¿Para quién es?"
          title="Para personas que ya no quieren cargar con todo solas."
          lead="Si sientes que lo que vives te desborda y no encuentras con quién hablarlo en profundidad, este espacio puede ser para ti."
        >
          <div className="grid-two">
            <div className="card-soft">
              <h3 style={{ fontSize: "1.1rem", marginBottom: "0.8rem" }}>
                Suele resonar con personas que:
              </h3>
              <ul className="bullet-soft">
                <li>Se sienten solas o desbordadas emocionalmente.</li>
                <li>No pueden hablar con su familia porque “no los entienden”.</li>
                <li>
                  Están viviendo rupturas, duelos, cambios, ansiedad o crisis
                  personales.
                </li>
                <li>
                  Quieren ser escuchadas sin juicio y con un corazón abierto.
                </li>
                <li>
                  Buscan un acompañamiento cálido, humano y profundo, sin
                  doctrinas ni técnicas confusas.
                </li>
                <li>
                  Necesitan claridad cuando sienten que la vida se traba o se
                  vuelve pesada.
                </li>
              </ul>
            </div>

            <div className="mini-card">
              <p style={{ marginBottom: "0.7rem" }}>
                Si estás cansado de “estar bien” hacia afuera mientras por
                dentro todo se mueve, este espacio te ofrece algo distinto:
                poder ser honesto con lo que realmente sientes.
              </p>
              <p>
                No vienes a demostrar nada, ni a cumplir expectativas. Solo a
                ser acompañado tal y como estás.
              </p>
            </div>
          </div>
        </Section>

        {/* CÓMO TE ACOMPAÑO */}
        <Section
          id="formas"
          label="Formas de acompañarte"
          title="Sesiones individuales y acompañamientos de fin de semana."
          lead="Dependiendo de lo que estés viviendo, podemos encontrarnos por hora o diseñar un retiro personal de fin de semana."
        >
          <div className="grid-two">
            <div className="card-soft">
              <p className="tag-pill">Sesiones por hora</p>
              <h3 style={{ fontSize: "1.1rem", margin: "0.8rem 0" }}>
                Sesiones de acompañamiento individual
              </h3>
              <p style={{ marginBottom: "0.7rem" }}>
                Encuentros uno a uno donde conversamos con calma y ordenas tu
                mundo interior.
              </p>
              <ul className="bullet-soft">
                <li>Te ayudo a visibilizar lo que sientes.</li>
                <li>Ponemos palabras a lo que antes solo era ruido.</li>
                <li>Soltamos tensión y exigencias internas.</li>
                <li>Buscamos claridad sin presionarte a “estar bien”.</li>
              </ul>
            </div>

            <div className="card-soft">
              <p className="tag-pill">Fin de semana</p>
              <h3 style={{ fontSize: "1.1rem", margin: "0.8rem 0" }}>
                Acompañamiento de fin de semana
              </h3>
              <p style={{ marginBottom: "0.7rem" }}>
                Un retiro personal en playa o montaña, íntimo y seguro, para
                desconectarte del ruido exterior y volver a ti.
              </p>
              <ul className="bullet-soft">
                <li>Conversaciones profundas.</li>
                <li>Descanso emocional y espacios de silencio.</li>
                <li>Caminatas acompañadas e integración tranquila.</li>
                <li>Apoyo constante durante todo tu proceso.</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* SOBRE MÍ */}
        <Section
          id="sobre-mi"
          label="Quién acompaña"
          title="Un linaje de escucha, no una técnica de moda."
          lead="Este don no viene de cursos rápidos ni de una tendencia. Es una forma de estar con el otro que ha sido cultivada durante años."
        >
          <div className="grid-two">
            <div className="card-soft">
              <p style={{ marginBottom: "0.7rem" }}>
                Mi papel no es enseñarte nada, ni corregirte, ni imponerte una
                visión de cómo deberías vivir.
              </p>
              <p style={{ marginBottom: "0.7rem" }}>
                Vengo de un linaje de sensibilidad y escucha profunda. A lo
                largo del tiempo he acompañado a personas en momentos de crisis,
                duelo, confusión y cambio, sosteniendo sus procesos con respeto
                y honestidad.
              </p>
              <p>
                Acompañarte es caminar contigo mientras atraviesas lo que te
                toca vivir, sin forzarte ni apurarte, pero sin dejarte solo.
              </p>
            </div>

            <div className="mini-card">
              <p style={{ marginBottom: "0.6rem" }}>
                Puedes imaginar este espacio como un faro: no decide por dónde
                navegas, pero sí te ofrece una luz constante mientras avanzas.
              </p>
              <p>
                Cuando sientas que es momento de hablar con alguien que pueda
                sostenerte de verdad, estaré aquí.
              </p>
            </div>
          </div>
        </Section>

        {/* CONTACTO */}
        <Section
          id="contacto"
          label="Agenda tu espacio"
          title="Si sientes que es el momento, escribe."
          lead="Cuéntame brevemente qué estás viviendo y qué tipo de acompañamiento sientes que necesitas ahora."
        >
          <div className="form-grid">
            <div className="card-soft">
              {/* Cambia el correo por el real de la clienta */}
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
                  <label htmlFor="mensaje">¿Qué estás viviendo?</label>
                  <textarea
                    id="mensaje"
                    name="Mensaje"
                    rows={5}
                    placeholder="Puedes compartir brevemente qué te está pasando y qué tipo de acompañamiento buscas."
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="modalidad">
                    Modalidad que sientes que necesitas
                  </label>
                  <input
                    id="modalidad"
                    name="Modalidad"
                    type="text"
                    placeholder="Sesiones por hora / Fin de semana de retiro, etc."
                  />
                </div>

                <p className="form-hint">
                  Al enviar este mensaje no se genera ningún compromiso. Solo es
                  el primer paso para conversar y sentir si este espacio es para
                  ti.
                </p>

                <div style={{ marginTop: "1.1rem" }}>
                  <GradientButton>Enviar mensaje</GradientButton>
                </div>
              </form>
            </div>

            <div className="mini-card">
              <h3 style={{ fontSize: "1rem", marginBottom: "0.8rem" }}>
                ¿Qué puedes esperar después de escribir?
              </h3>
              <ul className="bullet-soft">
                <li>
                  Una respuesta cercana y clara, sin automatismos ni mensajes
                  genéricos.
                </li>
                <li>
                  Si es necesario, se propondrá una primera sesión para sentir
                  si este acompañamiento encaja contigo.
                </li>
                <li>
                  Siempre tendrás libertad de decir que no. Este espacio se
                  construye desde el respeto a tu ritmo.
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
