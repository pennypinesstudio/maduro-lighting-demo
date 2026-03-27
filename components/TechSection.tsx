const techCards = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: 'Absolute Positioning',
    description:
      'Proprietary magnetic encoders ensure fixtures never lose their zero point, even if physically bumped during a live set. Instant recovery.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    ),
    title: 'Color Science',
    description:
      'Advanced dichroic glass mixing flags provide seamless transitions from saturated theatrical gels to precise, high-CRI broadcast whites.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M10 4v4" />
        <path d="M14 4v4" />
        <path d="M2 8h20" />
        <path d="M6 8v12" />
      </svg>
    ),
    title: 'Thermal Management',
    description:
      'Liquid-cooled LED arrays combined with ultra-quiet stepper fan control ensures peak lumen output without compromising theatrical silence.',
  },
]

export default function TechSection() {
  return (
    <section
      id="technology"
      style={{
        background: 'var(--surface-1)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        position: 'relative',
        overflow: 'hidden',
        padding: 'var(--section-pad) 0',
      }}
    >
      <div
        style={{
          maxWidth: '1600px',
          margin: '0 auto',
          padding: '0 40px',
        }}
      >
        {/* Section header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '80px',
            borderBottom: '1px solid var(--border)',
            paddingBottom: '32px',
          }}
        >
          <h2 style={{ fontSize: '3rem', maxWidth: '600px' }}>
            Internal
            <br />
            Architecture
          </h2>
          <div className="mono-sm">[ SYSTEM INTELLIGENCE ]</div>
        </div>

        {/* Tech grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '40px',
          }}
        >
          {techCards.map((card) => (
            <div
              key={card.title}
              style={{
                padding: '40px',
                border: '1px solid var(--border)',
                background: 'var(--void)',
                position: 'relative',
              }}
            >
              {/* Icon box */}
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  marginBottom: '32px',
                  border: '1px solid var(--amber)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--amber)',
                }}
              >
                {card.icon}
              </div>

              <h4
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1.2rem',
                  marginBottom: '16px',
                  fontWeight: 500,
                  letterSpacing: 0,
                  textTransform: 'none',
                }}
              >
                {card.title}
              </h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
