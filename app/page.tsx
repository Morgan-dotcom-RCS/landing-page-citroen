export default function Home() {
  return (
    <>
      {/* Hero façon Total Énergies */}
      <section className="hero">
        <h1>
          Simplifiez votre quotidien
          <br />
          <span style={{ color: "var(--citroen-red)" }}>avec la gamme Citroën</span>
        </h1>
        <p className="tagline">
          Citroën C3, C5 et C4 Aircross : une gamme pour tous les usages, du citadin au grand voyage.
        </p>
        <a href="#vehicules" className="cta-button">
          Découvrir la gamme
        </a>
      </section>

      {/* Section véhicules avec images C3, C5, C4 Aircross */}
      <section className="section" id="vehicules">
        <h2 className="section-title">Une gamme pour tous</h2>
        <p className="section-subtitle">
          Trois modèles, trois univers. Trouvez le vôtre.
        </p>
        <div className="vehicles-grid">
          <article className="vehicle-card">
            <div className="image-wrap">
              <img
                src="/images/c3.png"
                alt="Citroën ë-C3"
              />
            </div>
            <div className="content">
              <h3>Citroën ë-C3</h3>
              <p>
                Compacte 100 % électrique, agile et design. Idéale en ville comme sur la route.
              </p>
            </div>
          </article>
          <article className="vehicle-card">
            <div className="image-wrap">
              <img
                src="/images/c5.jpg"
                alt="Citroën C5"
              />
            </div>
            <div className="content">
              <h3>Citroën C5</h3>
              <p>
                Berline confort et espace. Pour les longs trajets en toute sérénité.
              </p>
            </div>
          </article>
          <article className="vehicle-card">
            <div className="image-wrap">
              <img
                src="/images/c4-aircross.jpg"
                alt="Citroën C4 Aircross"
              />
            </div>
            <div className="content">
              <h3>Citroën C4 Aircross</h3>
              <p>
                SUV compact, habitabilité et polyvalence au quotidien.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Section avantages (style Total) */}
      <section className="section advantages">
        <h2 className="section-title">Pourquoi choisir Citroën ?</h2>
        <p className="section-subtitle">
          Confort, design et technologies au service de votre conduite.
        </p>
        <div className="advantages-grid">
          <div className="advantage-card">
            <h4>Confort d’exception</h4>
            <p>Sièges confort et suspensions conçus pour le bien-être à bord.</p>
          </div>
          <div className="advantage-card">
            <h4>Design distinctif</h4>
            <p>Une identité forte et reconnaissable sur toute la gamme.</p>
          </div>
          <div className="advantage-card">
            <h4>Technologies connectées</h4>
            <p>Équipements et connectivité pour une conduite sereine.</p>
          </div>
        </div>
      </section>

      {/* CTA + formulaire simple */}
      <section className="form-section" id="contact">
        <h2 className="section-title">Restez informé</h2>
        <p className="section-subtitle">
          Recevez les offres et actualités de la gamme Citroën.
        </p>
        <div className="form-wrap">
          <form action="#" method="post">
            <input
              type="text"
              name="prenom"
              placeholder="Prénom"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Adresse e-mail"
              required
            />
            <button type="submit" className="cta-button">
              Je m’inscris
            </button>
          </form>
        </div>
        <div style={{ textAlign: "center" }}>
          <a href="#contact" className="cta-button">
            Je profite de l’offre
          </a>
        </div>
      </section>

      {/* Footer + mentions légales */}
      <footer className="footer">
        <div className="footer-inner">
          <span>© {new Date().getFullYear()} Citroën</span>
          <div className="footer-links">
            <a href="#mentions">Mentions légales</a>
            <a href="#confidentialite">Politique de confidentialité</a>
          </div>
        </div>
        <div className="legal-mentions" id="mentions">
          Mentions légales : page en cours de rédaction. Citroën est une marque du groupe Stellantis.
        </div>
      </footer>
    </>
  );
}
