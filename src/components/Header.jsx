import { useEffect, useState } from 'react';

const links = [
  { href: '#inicio', label: 'Início' },
  { href: '#fragrancia', label: 'Fragrância' },
  { href: '#notas', label: 'Notas' },
];

export default function Header() {
  const [currentLocation, setCurrentLocation] = useState('#inicio');

  useEffect(() => {
    const updateLocation = () => {
      setCurrentLocation(window.location.hash || '#inicio');
    };

    updateLocation();
    window.addEventListener('hashchange', updateLocation);
    return () => window.removeEventListener('hashchange', updateLocation);
  }, []);

  return (
    <header className="site-header">
      <a className="wordmark" href="#inicio" aria-label="Véloris Parfums, início">
        <span>VÉLORIS</span>
        <span>PARFUMS</span>
      </a>
      <nav className="site-nav" aria-label="Navegação principal">
        {links.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            aria-current={currentLocation === href ? 'location' : undefined}
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
