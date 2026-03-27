export default function Hero() {
  return (
    <section
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        paddingTop: '80px',
      }}
    >
      {/* Amber radial glow background */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80vw',
          height: '80vh',
          background: 'radial-gradient(circle at center, rgba(242, 169, 0, 0.08) 0%, transparent 60%)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* Hero Monolith */}
      <div
        style={{
          position: 'absolute',
          right: '10%',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '300px',
          height: '65vh',
          background: '#000',
          zIndex: 1,
          boxShadow: 'inset 2px 0 0 0 rgba(255,255,255,0.05), inset -4px 0 20px rgba(0,0,0,0.9)',
          border: '1px solid var(--border)',
          borderLeft: '2px solid var(--amber)',
        }}
        className="hero-monolith"
      >
        <div
          style={{
            position: 'absolute',
            right: '-20px',
            top: '20px',
            writingMode: 'vertical-rl',
            fontFamily: 'var(--font-display)',
            fontSize: '4rem',
            color: 'rgba(255,255,255,0.02)',
            letterSpacing: '0.2em',
            whiteSpace: 'nowrap',
            textTransform: 'uppercase',
          }}
        >
          PERFORMANCE
        </div>
      </div>

      {/* Main content */}
      <div
        style={{
          maxWidth: '1600px',
          margin: '0 auto',
          padding: '0 40px',
          width: '100%',
        }}
      >
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: '800px',
          }}
        >
          <div className="eyebrow">Intelligent Systems</div>

          <h1
            style={{
              fontSize: '5.5rem',
              marginBottom: '32px',
              background: 'linear-gradient(180deg, #FFFFFF 0%, #888888 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontFamily: 'var(--font-display)',
              textTransform: 'uppercase',
              fontWeight: 700,
              letterSpacing: '0.05em',
              lineHeight: 1.1,
            }}
          >
            Light That
            <br />
            Performs
          </h1>

          <p
            style={{
              fontSize: '1.25rem',
              color: 'var(--text-muted)',
              maxWidth: '500px',
              marginBottom: '48px',
              fontWeight: 300,
            }}
          >
            Precision-engineered lighting hardware for live performance, high-impact touring rigs,
            and permanent architectural installations. Absolute control in absolute darkness.
          </p>

          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="#demo" className="btn primary">
              Deploy System
            </a>
            <a href="#catalog" className="btn">
              View Specs
            </a>
          </div>
        </div>
      </div>

      {/* System data strip */}
      <div
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '40px',
          display: 'flex',
          gap: '40px',
          zIndex: 2,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <span className="mono-sm" style={{ color: 'var(--text-dim)' }}>
            SYS. STATUS
          </span>
          <span className="mono-sm highlight" style={{ fontWeight: 700 }}>
            ONLINE // OPTIMAL
          </span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <span className="mono-sm" style={{ color: 'var(--text-dim)' }}>
            PROTOCOL
          </span>
          <span className="mono-sm" style={{ color: 'var(--text-main)', fontWeight: 700 }}>
            DMX512 / ART-NET
          </span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <span className="mono-sm" style={{ color: 'var(--text-dim)' }}>
            COORD
          </span>
          <span className="mono-sm" style={{ color: 'var(--text-main)', fontWeight: 700 }}>
            N 34° 03&apos; W 118° 15&apos;
          </span>
        </div>
      </div>
    </section>
  )
}
