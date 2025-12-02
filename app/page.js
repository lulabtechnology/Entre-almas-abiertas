import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Section from "../components/Section";
import GradientButton from "../components/GradientButton";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="page-shell">
        {/* HERO / BIENVENIDA */}
        <section id="inicio" className="section" style={{ marginTop: "2rem" }}>
          <div className="hero-grid">
            <div>
              <p className="hero-kicker">ENTRE ALMAS ABIERTAS</p>
              <h1 className="hero-title">
                Bienvenido a este espacio de luz para tu alma.
              </h1>

              <div className="card-soft" style={{ marginTop: "1rem" }}>
                <p style={{ marginBottom: "0.7rem" }}>
                  Aquí en{" "}
                  <span className="gold-text">Entre Almas Abiertas</span>, un
                  espacio íntimo, seguro y sagrado donde el ser humano y el ser
                  espiritual se abrazan. Tu voz importa, tu historia es honrada
                  y tu camino de transformación es acompañado con presencia,
                  respeto y amor.
                </p>
                <p>
                  Este es un círculo donde puedes ser tú, sin etiquetas ni
                  juicios. No importa tu cultura, tu religión, tu linaje —
                  estelar o terrenal—, tu orientación, tu experiencia o tu edad.
                  Aquí, tu alma encuentra un lugar para expresarse, sanar,
                  expandirse y reconectar con{" "}
                  <span className="gold-text">
                    tu propia esencia, en armonía con la vibración sagrada de la
                    creación.
                  </span>
                </p>
              </div>

              {/* Botones hero */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.7rem",
                  marginTop: "1.4rem"
                }}
              >
                <a href="#contacto">
                  <button className="btn-gradient">
                    Si sientes el llamado a ser escuchado de verdad
                  </button>
                </a>
                <a href="#contacto">
                  <GradientButton>Quiero agendar una sesión</GradientButton>
                </a>
              </div>
            </div>

            {/* LOGO GRANDE */}
            <div className="hero-logo-shell">
              <div className="hero-logo-frame">
                <img src="/logo-aureya.png" alt="Símbolo Entre Almas Abiertas" />
              </div>
            </div>
          </div>
        </section>

        {/* SOBRE MÍ (2° sección) */}
        <Section
          id="sobre-mi"
          label="Quién acompaña"
          title={
            <>
              <span className="gold-text">AUREYA</span>, un canal de escucha y
              presencia humana.
            </>
          }
          lead="Detrás de Entre Almas Abiertas hay una mujer que camina su propio proceso de conciencia y que ha sido llamada a acompañar el de otros."
        >
          <div className="grid-two">
            <div className="card-soft">
              <p style={{ marginBottom: "0.7rem" }}>
                Soy <span className="gold-text">AUREYA</span>, te acompañaré y
                guiaré durante tu recorrido a través de los procesos emocionales
                que tu alma eligió venir a vivir en este plano para expandir su
                conciencia.
              </p>
              <p style={{ marginBottom: "0.7rem" }}>
                Mi papel no es enseñarte nada, ni corregirte, ni imponerte una
                visión de cómo deberías vivir. Escucho lo que traes, honro tu
                experiencia y te acompaño a mirar con más suavidad aquello que
                hoy te duele o te confunde.
              </p>
              <p>
                Sería un honor tener la oportunidad de acompañarte mientras
                atraviesas lo que te toca vivir en este plano terrenal,
                sosteniendo el espacio para que tu propia sabiduría interna
                pueda expresarse y guiarte.
              </p>
            </div>

            <div className="mini-card">
              <p>
                Si sientes que resuena contigo, será un honor caminar a tu lado
                el tramo de camino que tu alma necesite.
              </p>
            </div>
          </div>
        </Section>

        {/* ¿PARA QUIÉN? */}
        <Section
          id="para-quien"
          label="¿Para quién es?"
          title="Para almas que sienten que ya no pueden seguir solas."
          lead="Si tu mundo interno está en movimiento y no encuentras con quién compartirlo de forma profunda y segura, este espacio puede ser para ti."
        >
          <div className="card-soft" style={{ marginTop: "1.6rem" }}>
            <h3 style={{ fontSize: "1.1rem", marginBottom: "0.8rem" }}>
              Si sientes que:
            </h3>
            <ul className="bullet-soft">
              <li>Te encuentras sola o desbordada emocionalmente.</li>
              <li>
                No puedes hablar con tu familia porque “no te entienden”.
              </li>
              <li>
                Estás viviendo rupturas, duelos, cambios, ansiedad o crisis
                personales.
              </li>
              <li>
                Quieres ser escuchada sin juicio y con un corazón abierto.
              </li>
              <li>
                Buscas un acompañamiento cálido, humano y profundo, sin
                doctrinas ni técnicas confusas.
              </li>
              <li>
                Necesitas claridad cuando sientes que la vida se traba o se
                vuelve pesada.
              </li>
              <li>
                Estás atravesando procesos espirituales profundos y necesitas
                sostén humano.
              </li>
            </ul>

            <p style={{ marginTop: "1rem" }}>
              Recuerda que no vienes a demostrar nada, ni a encajar en una
              creencia. Vienes a ser acompañada en lo que tu alma está viviendo
              ahora.
            </p>
          </div>
        </Section>

        {/* FORMAS DE ACOMPAÑARTE */}
        <Section
          id="formas"
          label="Formas de acompañarte"
          title="Sesiones individuales, retiros y herramientas holísticas."
          lead="Dependiendo de lo que estés atravesando, podemos encontrarnos por hora, abrir un espacio más profundo de retiro personal o activar herramientas holísticas que acompañen tu proceso."
        >
          <div className="grid-two">
            <div className="card-soft">
              <p className="tag-pill">Sesiones por hora</p>
              <h3 style={{ fontSize: "1.1rem", margin: "0.8rem 0" }}>
                Sesiones de acompañamiento individual
              </h3>
              <p style={{ marginBottom: "0.7rem" }}>
                Encuentros uno a uno donde conversamos con calma, escucho tu
                proceso y juntas vamos dando nombre a lo que tu corazón está
                viviendo.
              </p>
              <ul className="bullet-soft">
                <li>Te ayudo a visibilizar lo que sientes.</li>
                <li>Ponemos palabras a lo que antes solo era ruido interno.</li>
                <li>Soltamos tensión, culpas y exigencias internas.</li>
                <li>
                  Buscamos claridad sin forzarte a “estar bien” ni a ir más
                  rápido de lo que tu alma necesita.
                </li>
              </ul>
            </div>

            <div className="card-soft">
              <p className="tag-pill">Fin de semana</p>
              <h3 style={{ fontSize: "1.1rem", margin: "0.8rem 0" }}>
                Acompañamiento de fin de semana
              </h3>
              <p style={{ marginBottom: "0.7rem" }}>
                Un retiro personal en playa o montaña, íntimo y seguro, para
                desconectarte del ruido exterior y volver a tu centro.
              </p>
              <ul className="bullet-soft">
                <li>Conversaciones profundas y pausadas.</li>
                <li>Descanso emocional y espacios de silencio consciente.</li>
                <li>Caminatas acompañadas e integración tranquila.</li>
                <li>
                  Apoyo constante durante todo tu proceso ese fin de semana.
                </li>
              </ul>
            </div>
          </div>

          {/* Nuevo recuadro: herramientas holísticas */}
          <div className="card-soft" style={{ marginTop: "1.6rem" }}>
            <p className="tag-pill">
              Acompañamiento con herramientas holísticas personalizadas
            </p>
            <h3 style={{ fontSize: "1.1rem", margin: "0.8rem 0" }}>
              Herramientas que acompañan la transformación de tu alma
            </h3>
            <p>
              Estas herramientas te ayudan a canalizar y sanar tus emociones
              durante el proceso de transformación y expansión de tu alma, de
              forma amorosa, consciente y en coherencia con lo que necesitas en
              cada etapa.
            </p>
          </div>
        </Section>

        {/* QUÉ TE OFREZCO (ANTES "ESTE ESPACIO") */}
        <Section
          id="que-te-ofrezco"
          label="Este espacio"
          title="Acompañamiento humano y espiritual, sin dogmas."
          lead={
            <>
              <span className="highlight-yellow">
                Cuando la vida pesa o se hace confusa
              </span>
              , no siempre encuentras un lugar donde puedas hablar de lo humano
              y lo espiritual al mismo tiempo. En este espacio sí.
            </>
          }
        >
          <div className="card-soft" style={{ marginTop: "1.6rem" }}>
            <p style={{ marginBottom: "1rem" }}>
              En{" "}
              <span className="gold-text">Entre Almas Abiertas</span> recibes
              presencia humana auténtica, sin presiones ni expectativas, donde
              lo que vives por dentro es honrado con respeto.
            </p>
            <ul className="bullet-soft">
              <li>No es religión.</li>
              <li>No es esoterismo ni brujería.</li>
              <li>No es coaching motivacional.</li>
              <li>No es terapia psicológica tradicional.</li>
              <li>No es nada clínico.</li>
            </ul>
            <p style={{ marginTop: "1rem" }}>
              Es humanidad. Es acompañarte desde la empatía, la claridad y la
              serenidad, sosteniéndote mientras atraviesas los procesos que tu
              alma eligió vivir para expandir su conciencia.
            </p>
          </div>
        </Section>

        {/* CONTACTO */}
        <Section
          id="contacto"
          label="Agenda tu espacio"
          title="Si sientes el llamado, puedes escribir."
          lead="Cuéntame brevemente qué estás viviendo y qué tipo de acompañamiento sientes que necesitas ahora."
        >
          <div className="form-grid">
            <div className="card-soft">
              <form
                action="mailto:entrealmasabiertas@gmail.com"
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
                    placeholder="Sesiones por hora / Fin de semana / Herramientas holísticas, etc."
                  />
                </div>

                <p className="form-hint">
                  Al enviar este mensaje no se genera ningún compromiso. Es solo
                  el primer paso para sentir si este círculo es para ti.
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
                  Una respuesta cercana y clara, escrita por{" "}
                  <span className="gold-text">AUREYA</span>, una persona real
                  (no por un robot ni un mensaje genérico).
                </li>
                <li>
                  Si ambos lo sienten, podrán agendar una primera sesión para
                  conocer tu proceso con más calma.
                </li>
                <li>
                  Siempre tendrás libertad de decir que no. Este espacio se
                  construye desde el respeto absoluto a tu ritmo y a tu camino.
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
