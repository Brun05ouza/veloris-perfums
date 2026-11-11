import useScrollReveal from '../hooks/useScrollReveal.js';
import '../styles/closing.css';

export default function Newsletter() {
  const sectionRef = useScrollReveal('.closing-reveal');

  return (
    <section
      className="newsletter"
      id="novidades"
      aria-labelledby="newsletter-title"
      ref={sectionRef}
    >
      <img
        className="newsletter-scene"
        src="/assets/veloris-campanha.png"
        alt=""
        aria-hidden="true"
        width="1448"
        height="1086"
        loading="lazy"
        decoding="async"
      />
      <div className="newsletter-card closing-reveal">
        <figure className="newsletter-photo">
          <img
            src="/assets/veloris-editorial-detalhe.png"
            alt="Um homem de terno segura um frasco Véloris sob a luz azul."
            width="1254"
            height="1254"
            loading="lazy"
            decoding="async"
          />
        </figure>
        <div className="newsletter-copy">
          <h2 id="newsletter-title"><span>Fique por</span><span>dentro</span></h2>
          <p className="newsletter-description">
            Novas fragrâncias, histórias e inspirações.
            Descubra o que vem a seguir no universo Véloris.
          </p>
          <form
            className="newsletter-form"
            aria-describedby="newsletter-status"
            onSubmit={(event) => event.preventDefault()}
          >
            <label htmlFor="newsletter-email">Seu e-mail</label>
            <div className="newsletter-field">
              <input
                id="newsletter-email"
                name="email"
                type="email"
                placeholder="voce@exemplo.com"
                autoComplete="email"
                disabled
              />
              <button type="submit" disabled>Em breve</button>
            </div>
            <p id="newsletter-status">As inscrições para a nossa lista abrem em breve.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
