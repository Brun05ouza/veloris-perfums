import Header from './Header.jsx';

const cloudShapes = {
  bank: { src: '/assets/nuvens-recortadas.png', width: 2172, height: 724 },
  volume: { src: '/assets/nuvem-volumosa.png', width: 1774, height: 887 },
  rounded: { src: '/assets/nuvem-arredondada.png', width: 1774, height: 887 },
};

const cloudGroups = {
  left: ['volume', 'bank', 'volume', 'rounded', 'bank', 'rounded', 'volume'],
  right: ['rounded', 'volume', 'bank', 'rounded', 'volume', 'bank', 'rounded'],
};

export default function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="titulo">
      <div className="scenery">
        <div className="landscape" aria-hidden="true"></div>
        <div className="bottle" role="img" aria-label="Frasco azul-escuro de Oceano Noturno, da Véloris Parfums"></div>
      </div>
      <div className="mist" aria-hidden="true"></div>
      <div className="clouds" aria-hidden="true">
        {Object.entries(cloudGroups).map(([side, shapes]) => (
          <div className={`cloud-group cloud-group-${side}`} key={side}>
            {shapes.map((shape, index) => (
              <img
                {...cloudShapes[shape]}
                className={`cloud cloud-${shape}`}
                alt=""
                decoding="async"
                key={index}
              />
            ))}
          </div>
        ))}
      </div>

      <Header />

      <div className="intro" id="fragrancia">
        <h1 id="titulo">
          <span className="title-line"><span className="title-word">Oceano</span></span>
          <span className="title-line"><span className="title-word">Noturno</span></span>
        </h1>
        <p className="classification">Eau de parfum</p>
        <p className="description">Uma fragrância masculina onde a profundidade do oceano encontra o silêncio da noite.</p>
        <a className="discover" href="#proxima-secao">Descobrir a fragrância <span aria-hidden="true">→</span></a>
      </div>

      <aside id="notas" className="details" aria-label="Perfil da fragrância">
        <dl className="facts">
          <div><dt>Família olfativa</dt><dd>Marinha</dd></div>
          <div><dt>Acordes principais</dt><dd>03</dd></div>
        </dl>
        <a className="essence" href="#proxima-secao">
          <span className="essence-media" aria-hidden="true">
            <span className="essence-image"></span>
          </span>
          <span className="essence-arrow" aria-hidden="true"><span>↗</span></span>
          <div className="essence-copy">
            <h2>A essência<br />da noite</h2>
            <p>Frescor marinho, profundidade aromática e o calor das madeiras.</p>
          </div>
        </a>
      </aside>
    </section>
  );
}

