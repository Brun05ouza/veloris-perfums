import useScrollReveal from '../hooks/useScrollReveal.js';
import '../styles/story.css';

export default function FragranceStory() {
  const sectionRef = useScrollReveal();

  return (
    <section
      className="story"
      id="proxima-secao"
      aria-labelledby="story-title"
      ref={sectionRef}
    >
      <div className="story-layout">
        <div className="story-art">
          <figure className="story-product story-reveal">
            <img
              src="/assets/oceano-noturno-agua.png"
              alt="Frasco de Oceano Noturno sobre a água, com reflexos em azul profundo."
              width="1122"
              height="1402"
              loading="lazy"
              decoding="async"
            />
          </figure>
          <figure className="story-flower story-reveal">
            <img
              src="/assets/iris-azul.png"
              alt="Pétalas de uma íris azul cobertas por gotas de água."
              width="1122"
              height="1402"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>

        <div className="story-copy">
          <h2 className="story-title" id="story-title">
            <span className="story-reveal">A arte</span>
            <span className="story-reveal">de sentir</span>
          </h2>
          <div className="story-description story-reveal">
            <p>
              Inspirado pelo oceano ao anoitecer, Oceano Noturno revela o
              encontro entre o frescor marinho, a profundidade aromática e o
              calor das madeiras.
            </p>
            <p>Uma composição que se descobre aos poucos. Uma presença que permanece.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
