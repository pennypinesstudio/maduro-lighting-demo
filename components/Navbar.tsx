export default function Navbar() {
  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        padding: '24px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 100,
        background: 'linear-gradient(to bottom, rgba(3,3,3,0.9) 0%, rgba(3,3,3,0) 100%)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div className="logo">
        MADURO<span>LIGHTING</span>
      </div>

      <div style={{ display: 'flex', gap: '48px' }}>
        <a
          href="#systems"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          Systems
        </a>
        <a
          href="#technology"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          Technology
        </a>
        <a
          href="#applications"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          Applications
        </a>
      </div>

      <a href="#demo" className="btn" style={{ padding: '12px 24px' }}>
        Request Demo
      </a>
    </nav>
  )
}
