const categories = [
  {
    number: '01 // MV-SERIES',
    title: 'Moving Head\nFixtures',
    subtitle: '12 MODELS AVAILABLE',
  },
  {
    number: '02 // WS-SERIES',
    title: 'LED Wash\nSystems',
    subtitle: '8 MODELS AVAILABLE',
  },
  {
    number: '03 // CTRL-X',
    title: 'Control & DMX\nRouting',
    subtitle: 'NODE / SPLITTER / BRAIN',
  },
  {
    number: '04 // TR-SYS',
    title: 'Touring\nRigs & Truss',
    subtitle: 'MODULAR DEPLOYMENT',
  },
]

import Reveal from './ui/Reveal';

export default function CatalogGrid() {
  return (
    <section
      id="catalog"
      style={{
        padding: '0 0 var(--section-pad)',
        position: 'relative',
      }}
    >
      <div
        style={{
          maxWidth: '1600px',
          margin: '0 auto',
          padding: '0 40px',
        }}
      >
        <Reveal>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1px',
            background: 'var(--border)',
            border: '1px solid var(--border)',
          }}
        >
          {categories.map((cat) => (
            <div key={cat.number} className="cat-card">
              <span className="mono-sm" style={{ position: 'absolute', top: '24px', left: '24px' }}>
                {cat.number}
              </span>
              <h3
                style={{
                  fontSize: '1.25rem',
                  marginBottom: '16px',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                  letterSpacing: 0,
                  textTransform: 'none',
                }}
              >
                {cat.title.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < cat.title.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </h3>
              <span className="mono-sm" style={{ color: 'var(--text-dim)', marginTop: 'auto' }}>
                {cat.subtitle}
              </span>
            </div>
          ))}
        </div>
        </Reveal>
      </div>
    </section>
  )
}
