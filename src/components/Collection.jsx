import useScrollReveal from '../hooks/useScrollReveal.js';
import '../styles/collection.css';

const fragrances = [
  {
    name: 'Eclipse Azul',
    image: '/assets/eclipse-azul.png',
    alt: 'Frasco retangular azul profundo com tampa prateada.',
  },
  {
    name: 'Maré Profunda',
    image: '/assets/mare-profunda.png',
    alt: 'Frasco azul de ombros arredondados e tampa de metal escovado.',
  },
  {
    name: 'Oceano Noturno',
    image: '/assets/oceano-noturno-colecao.png',
    alt: 'Frasco azul facetado com tampa preta.',
  },
  {
    name: 'Brisa Intensa',
    image: '/assets/brisa-intensa.png',
    alt: 'Frasco alto e retangular azul-escuro com tampa prateada.',
  },
  {
    name: 'Âmbar do Mar',
    image: '/assets/ambar-do-mar.png',
    alt: 'Frasco de vidro azul com reflexos âmbar na base.',
  },
];

export default function Collection() {
  const collectionRef = useScrollReveal('.collection-reveal');

  return (
    <div className="collection-stage" ref={collectionRef}>
      <section className="collection-banner" id="colecao-banner" aria-labelledby="collection-banner-title">
        <img
          className="collection-banner-image collection-reveal"
          src="/assets/colecao-pedestais.png"
          alt="Quatro frascos de perfume azul-escuro sobre pedestais de pedra."
          width="1672"
          height="941"
          loading="lazy"
          decoding="async"
        />
        <div className="collection-banner-inner">
          <div className="collection-banner-copy collection-reveal">
            <h2 id="collection-banner-title">
              <span>Fragrâncias</span>
              <span>que ficam com você.</span>
            </h2>
            <p>Uma coleção de encontros entre o mar, a intensidade e a memória.</p>
            <a className="discover" href="#colecao">
              Explorar a coleção <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="collection" id="colecao" aria-labelledby="collection-title">
        <div className="collection-inner">
          <h2 className="collection-title collection-reveal" id="collection-title">
            <span>Descubra</span>
            <span>a coleção</span>
          </h2>
          <ul className="collection-grid">
            {fragrances.map((fragrance, index) => (
              <li
                className="collection-item collection-reveal"
                style={{ '--reveal-delay': `${index * 60}ms` }}
                key={fragrance.name}
              >
                <figure>
                  <div className="collection-product-image">
                    <img
                      src={fragrance.image}
                      alt={fragrance.alt}
                      width="1254"
                      height="1254"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <figcaption>
                    <h3>{fragrance.name}</h3>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
