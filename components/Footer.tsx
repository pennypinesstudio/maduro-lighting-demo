export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        padding: '80px 0 40px',
        background: 'var(--void)',
      }}
    >
      <div
        style={{
          maxWidth: '1600px',
          margin: '0 auto',
          padding: '0 40px',
        }}
      >
        {/* CTA */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '100px',
          }}
        >
          <h2
            style={{
              fontSize: '4rem',
              marginBottom: '40px',
            }}
          >
            Construct Your
            <br />
            Next Show.
          </h2>
          <a href="#demo" className="btn primary">
            Request Demo Unit
          </a>
        </div>

        {/* Footer grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr 1fr',
            gap: '40px',
            borderTop: '1px solid var(--border)',
            paddingTop: '40px',
          }}
        >
          {/* Col 1: Logo + tagline */}
          <div>
            <div className="logo" style={{ marginBottom: '24px' }}>
              MADURO<span>LIGHTING</span>
            </div>
            <p
              style={{
                color: 'var(--text-dim)',
                fontSize: '0.9rem',
                maxWidth: '300px',
              }}
            >
              Precision optical hardware for the uncompromising lighting professional.
            </p>
          </div>

          {/* Col 2: Hardware */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                marginBottom: '24px',
                color: 'var(--text-muted)',
                textTransform: 'none',
                letterSpacing: 0,
                fontWeight: 400,
              }}
            >
              Hardware
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['Moving Heads', 'Wash & Matrix', 'Static Profiles', 'Atmospherics'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      color: 'var(--text-dim)',
                      textTransform: 'none',
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Support */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                marginBottom: '24px',
                color: 'var(--text-muted)',
                textTransform: 'none',
                letterSpacing: 0,
                fontWeight: 400,
              }}
            >
              Support
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['Firmware Updates', 'DMX Profiles', 'Service Centers', 'Documentation'].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.8rem',
                        color: 'var(--text-dim)',
                        textTransform: 'none',
                      }}
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Col 4: Company */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                marginBottom: '24px',
                color: 'var(--text-muted)',
                textTransform: 'none',
                letterSpacing: 0,
                fontWeight: 400,
              }}
            >
              Company
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['About', 'Careers', 'Press', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      color: 'var(--text-dim)',
                      textTransform: 'none',
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div
          className="mono-sm"
          style={{
            marginTop: '80px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: 'var(--text-dim)',
            borderTop: '1px solid var(--border)',
            paddingTop: '24px',
          }}
        >
          <div>© 2024 MADURO LIGHTING INC.</div>
          <div>[ DESIGNED FOR IMPACT ]</div>
        </div>
      </div>
    </footer>
  )
}
