"use client";

import { useRef, useState } from "react";

const avatarSampleVideo =
  "https://res.cloudinary.com/dowcybzve/video/upload/v1776948978/LISTQIK_Inro_-_V2_ESP_Ver_2_jzrl95.mp4";

export default function HomePage() {
  const avatarVideoRef = useRef(null);
  const [avatarMuted, setAvatarMuted] = useState(true);
  const [navOpen, setNavOpen] = useState(false);

  const toggleAvatarSound = () => {
    const video = avatarVideoRef.current;
    if (!video) return;
    const nextMuted = !avatarMuted;
    video.muted = nextMuted;
    if (!nextMuted) {
      video.volume = 1;
      video.play().catch(() => {});
    }
    setAvatarMuted(nextMuted);
  };

  return (
    <>
      {/* Navegacion superior fija con CTAs de alta conversion */}
      <header className="topNav">
        <a href="#" className="brand">
          <span className="brandMark">LQ</span>
          <span>ListQik</span>
        </a>
        <button
          type="button"
          className="navToggle"
          aria-label="Abrir o cerrar menu de navegacion"
          aria-expanded={navOpen}
          onClick={() => setNavOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav aria-label="Navegacion principal" className={navOpen ? "open" : ""}>
          <a href="#compare" onClick={() => setNavOpen(false)}>Precios</a>
          <a href="#seller" onClick={() => setNavOpen(false)}>Vender</a>
          <a href="#compare" onClick={() => setNavOpen(false)}>Comparar</a>
          <a href="#seller" onClick={() => setNavOpen(false)}>Comenzar</a>
        </nav>
        <div className="navActions">
          <a href="#compare" className="btn btnSecondary">
            Ver paquetes
          </a>
          <a href="#seller" className="btn btnPrimary">
            Publica tu casa
          </a>
        </div>
      </header>

      <main className="pageShell">
        <section className="hero">
          <div className="heroInner reveal">
            <div className="heroContent">
              <p className="eyebrow">Plataforma inmobiliaria moderna</p>
              <h1>Publica con inteligencia. Vende mas rapido. Cierra con confianza.</h1>
              <p className="heroCopy">
                Presentacion premium de tu propiedad, exposicion para compradores
                serios y expertos locales que se mueven rapido cuando el tiempo importa.
              </p>
              <div className="heroActions">
                <a href="#seller" className="btn btnPrimary">
                  Comienza tu publicacion
                </a>
                <a href="#compare" className="btn btnSecondary">
                  Compara paquetes
                </a>
              </div>
              <ul className="heroStats" aria-label="Indicadores destacados">
                <li>
                  <strong>24h</strong> de respuesta promedio
                </li>
                <li>
                  <strong>98%</strong> de satisfaccion de clientes
                </li>
                <li>
                  <strong>3.2x</strong> de interaccion con publicaciones
                </li>
                <li className="heroStatHighlight">
                  <strong>$9,000</strong> de ahorro para vendedores
                </li>
              </ul>
            </div>

            <aside className="heroAvatarCard" aria-label="Vista previa del asistente IA">
              <p className="avatarKicker">Asistente IA para publicaciones</p>
              <div className="avatarVideoWrap">
                <video
                  ref={avatarVideoRef}
                  className="avatarVideo"
                  src={avatarSampleVideo}
                  autoPlay
                  loop
                  muted={avatarMuted}
                  playsInline
                  preload="metadata"
                  onClick={toggleAvatarSound}
                  aria-label={avatarMuted ? "Toca para activar sonido del video" : "Toca para silenciar el video"}
                />
              </div>
              
            </aside>
          </div>
        </section>

        <section id="compare" className="section pricing reveal">
          <div className="sectionHeading">
            <p className="sectionKicker">Planes de precios</p>
            <h2>Elige como quieres vender</h2>
            <p>
              Sin cargos ocultos ni contratos largos, solo las herramientas y el
              respaldo inmobiliario que necesitas para conservar mas ganancia.
            </p>
          </div>
          <p className="pricingHighlight">
            Los propietarios ahorran en promedio $11,785 frente a las rutas
            tradicionales de publicacion.
          </p>

          <div className="pricingGrid">
            <article className="pricingCard isPopular">
              <p className="planBadge">Mas popular</p>
              <h3>Subsonic</h3>
              <p className="planCopy">
                Todo lo que necesitas para publicar en MLS y vender en tus terminos.
              </p>
              <p className="planPrice">$99</p>
              <p className="planSub">Tarifa unica de publicacion</p>
              <a href="#seller" className="btn btnPrimary wide">
                Obtener Subsonic
              </a>
              <ul>
                <li>Publicado en MLS y en portales principales</li>
                <li>Soporte con toda la documentacion requerida</li>
                <li>Cambios ilimitados en la publicacion</li>
                <li>Reenvio de visitas y consultas</li>
              </ul>
            </article>

            <article className="pricingCard">
              <p className="planBadge isDark">Paquete crecimiento</p>
              <h3>Supersonic</h3>
              <p className="planCopy">
                Destaca con contenido premium y mayor visibilidad de tu publicacion.
              </p>
              <p className="planPrice">$299</p>
              <p className="planSub">Tarifa unica de publicacion</p>
              <a href="#seller" className="btn btnSecondary wide">
                Obtener Supersonic
              </a>
              <ul>
                <li>Todo lo incluido en Subsonic</li>
                <li>Paquete de fotografia profesional</li>
                <li>Optimizacion prioritaria de la publicacion</li>
                <li>Mayor alcance en anuncios sociales</li>
              </ul>
            </article>

            <article className="pricingCard">
              <p className="planBadge isDark">Paquete rendimiento</p>
              <h3>Hypersonic</h3>
              <p className="planCopy">
                Maxima exposicion para publicaciones de alta urgencia y alto impacto.
              </p>
              <p className="planPrice">$599</p>
              <p className="planSub">Tarifa unica de publicacion</p>
              <a href="#seller" className="btn btnSecondary wide">
                Obtener Hypersonic
              </a>
              <ul>
                <li>Todo lo incluido en Supersonic</li>
                <li>Impulso premium de posicionamiento</li>
                <li>Flujo de soporte prioritario para vendedores</li>
                <li>Distribucion ampliada de campanas</li>
              </ul>
            </article>

            <article className="pricingCard">
              <p className="planBadge isDark">Mejor valor</p>
              <h3>Full Service</h3>
              <p className="planCopy">
                Soporte de agente licenciado desde la publicacion hasta la negociacion y el cierre.
              </p>
              <p className="planPrice">1%</p>
              <p className="planSub">Al cierre</p>
              <a href="#seller" className="btn btnSecondary wide">
                Habla con un agente
              </a>
              <ul>
                <li>Agente licenciado dedicado</li>
                <li>Revision de ofertas y ayuda en negociacion</li>
                <li>Filtro y calificacion de compradores</li>
                <li>Estrategia de precio para maximizar el valor de venta</li>
              </ul>
            </article>
          </div>
        </section>

        <section id="seller" className="section sellerCta reveal">
          <h2>Listo para publicar con confianza?</h2>
          <p>
            Elige tu paquete y lanza una estrategia de publicacion que atraiga
            compradores con alta intencion.
          </p>
          <div className="heroActions">
            <a href="#compare" className="btn btnPrimary">
              Publica ahora por $99
            </a>
          </div>
        </section>
      </main>

      <footer className="siteFooter">
        <div className="footerGrid">
          <div>
            <a href="#" className="brand">
              <span className="brandMark">LQ</span>
              <span>ListQik</span>
            </a>
            <p className="footerBlurb">
              Soporte inmobiliario rapido y moderno, disenado para ayudar a vendedores
              a fijar el precio correcto, atraer compradores calificados y cerrar con confianza.
            </p>
          </div>

          <div>
            <h4>Empresa</h4>
            <a href="#seller">Por que ListQik</a>
            <a href="#compare">Planes de precios</a>
            <a href="#seller">Comenzar</a>
          </div>

          <div>
            <h4>Contacto</h4>
            <a href="tel:+18005551234">(800) 555-1234</a>
            <a href="mailto:hello@listqik.com">hello@listqik.com</a>
            <span>Lun-Vie, 9:00 AM - 6:00 PM</span>
          </div>
        </div>

        <div className="footerBottom">
          <p>
            © {new Date().getFullYear()} ListQik. Todos los derechos reservados.
          </p>
          <div className="footerLegal">
            <a href="#">Privacidad</a>
            <a href="#">Terminos</a>
            <a href="#">Vivienda justa</a>
          </div>
        </div>
      </footer>
    </>
  );
}
