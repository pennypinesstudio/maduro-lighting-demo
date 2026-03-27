export default function Testimonial() {
  return (
    <section
      style={{
        padding: 'var(--section-pad) 0 0',
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
        <div
          style={{
            textAlign: 'center',
            maxWidth: '900px',
            margin: '0 auto',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '2rem',
              lineHeight: 1.4,
              marginBottom: '40px',
              color: 'var(--text-main)',
              textTransform: 'none',
              fontWeight: 700,
              letterSpacing: '0.05em',
            }}
          >
            &ldquo;When you are programming 300 moving fixtures for a stadium tour, you cannot
            afford latency or mechanical failure. Maduro is the only hardware I trust on the
            rig.&rdquo;
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.2rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              ELENA ROSTOVA
            </span>
            <span className="mono-sm highlight">LEAD LIGHTING DESIGNER, VOLT TOURING</span>
          </div>
        </div>
      </div>
    </section>
  )
}
