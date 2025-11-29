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
              <p className="hero-kicker">Entre Almas Abiertas</p>
              <h1 className="hero-title">
                Bienvenido a un espacio íntimo, seguro y sagrado.
              </h1>
              <div className="card-soft" style={{ marginTop: "1rem" }}>
                <p style={{ marginBottom: "0.7rem" }}>
                  Bienvenido a Entre Almas Abiertas, un espacio íntimo, seguro y
                  sagrado donde el ser humano y el ser espiritual se abrazan.
                  Aquí, tu voz importa, tu historia es honrada y tu camino de
                  transformación es acompañado con presencia, respeto y amor.
                </p>
                <p style={{ marginBottom: "0.7rem" }}>
                  Este es un círculo donde puedes ser tú, sin etiquetas ni
                  juicios. No importa tu cultura, tu religión, tu linaje —estelar
                  o terrenal—, tu orientación, tu experiencia o tu edad. Aquí,
                  tu alma encuentra un lugar para expresarse, sanar, expandirse y
                  reconectar con su propia luz.
                </p>
                <p>
                  En Entre Almas Abiertas caminamos juntos: en armonía con la
                  creación, en conciencia, y en la vibración más pura del amor.
                </p>
              </div>

              <div className="hero-pill-row">
                <span className="hero-pill">Espacio íntimo y sagrado</span>
                <span className="hero-pill">Camino de conciencia</span>
                <span className="hero-pill">Amor y presencia</span>
              </div>

              <a href="#contacto">
                <GradientButton>Quiero agendar una sesión</GradientButton>
              </a>

              <p className="hero-note" style={{ marginTop: "1rem" }}>
                Si sientes el llamado a ser escuchado de verdad, sin juicios ni
                etiquetas, este círculo puede ser tu lugar.
              </p>
            </div>

            {/* LOGO GRANDE */}
            <div className="hero-logo-shell">
              <div className="hero-logo-frame">
                <img src="/logo-aureya.png" alt="Símbolo Entre Almas Abiertas" />
              </div>
            </div>
          </div>
        </section>

        {/* ¿QUÉ ES ESTE ACOMPAÑAMIENTO? */}
        <Section
          id="acompanamiento"
          label="Este espacio"
          title="Acompañamiento humano y espiritual, sin dogmas."
          lead="Cuando la vida pesa o se hace confusa, no siempre encontramos un lugar donde podamos hablar de lo humano y lo espiritual al mismo tiempo. Aquí sí."
        >
          <div className="card-soft" style={{ marginTop: "1.6rem" }}>
            <p style={{ marginBottom: "1rem" }}>
              En Entre Almas Abiertas recibes presencia humana auténtica, sin
              presiones ni expectativas, donde lo que vives por dentro es honrado
              con respeto.
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
              serenidad, sosteniéndote mientras atraviesas los procesos que tu
              alma eligió vivir para expandir su conciencia.
            </p>
          </div>
        </Section>

        {/* ¿PARA QUIÉN? */}
        <Section
          id="para-quien"
          label="¿Para quién es?"
          title="Para almas que sienten que ya no pueden seguir solas."
          lead="Si tu mundo interno está en movimiento y no encuentras con quién compartirlo de forma profunda y segura, este espacio puede ser para ti."
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
                También es un espacio para quienes están en procesos espirituales
                profundos y necesitan sostén humano: personas que sienten
                aperturas de conciencia, cambios de ciclo o un llamado interno
                que no logran explicar con palabras.
              </p>
              <p>
                No vienes a demostrar nada, ni a encajar en una creencia. Vienes
                a ser acompañado en lo que tu alma está viviendo ahora.
              </p>
            </div>
          </div>
        </Section>

        {/* CÓMO TE ACOMPAÑO */}
        <Section
          id="formas"
          label="Formas de acompañarte"
          title="Sesiones individuales y acompañamientos de fin de semana."
          lead="Dependiendo de lo que estés atravesando, podemos encontrarnos por hora o abrir un espacio más profundo de retiro personal."
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
                <li>Apoyo constante durante todo tu proceso ese fin de semana.</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* SOBRE MÍ */}
        <Section
          id="sobre-mi"
          label="Quién acompaña"
          title="Aureya, un canal de escucha y presencia."
          lead="Detrás de Entre Almas Abiertas hay una mujer que camina su propio proceso de conciencia y que ha sido llamada a acompañar el de otros."
        >
          <div className="grid-two">
            <div className="card-soft">
              <p style={{ marginBottom: "0.7rem" }}>
                Soy Aureya, te acompañaré y guiaré durante tu recorrido a través
                de los procesos emocionales que tu alma eligió venir a vivir en
                este plano para expandir su conciencia.
              </p>
              <p style={{ marginBottom: "0.7rem" }}>
                Mi papel no es enseñarte nada, ni corregirte, ni imponerte una
                visión de cómo deberías vivir. Escucho lo que traes, honro tu
                experiencia y te acompaño a mirar con más suavidad aquello que
                hoy te duele o te confunde.
              </p>
              <p>
                Acompañarte es caminar contigo mientras atraviesas lo que te
                toca vivir, sosteniendo el espacio para que tu propia sabiduría
                interna pueda expresarse y guiarte.
              </p>
            </div>

            <div className="mini-card">
              <p style={{ marginBottom: "0.6rem" }}>
                Puedes imaginar este espacio como un círculo alrededor del fuego:
                tú te sientas, compartes lo que llevas en el corazón, y yo estoy
                ahí contigo, presente, sin máscaras ni personajes.
              </p>
              <p>
                Si sientes que resuena contigo, será un honor caminar a tu lado
                el tramo de camino que tu alma necesite.
              </p>
            </div>
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
              {/* Cambia el correo por el real de Aureya */}
              <form
                action="mailto:correo@entrealmasabiertas.com"
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
                  Al enviar este mensaje no se genera ningún compromiso. Es
                  solo el primer paso para sentir si este círculo es para ti.
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
                  Una respuesta cercana y clara, escrita por una persona real
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
