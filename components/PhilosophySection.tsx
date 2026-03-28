import Reveal from './ui/Reveal';

export default function PhilosophySection() {
  return (
    <section
      id="philosophy"
      style={{
        padding: 'var(--section-pad) 0',
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
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '80px',
            borderBottom: '1px solid var(--border)',
            paddingBottom: '32px',
          }}
        >
          <Reveal>
            <h2
              style={{
                fontSize: '3rem',
                maxWidth: '600px',
              }}
            >
              Engineered for
              <br />
              the <span className="highlight">stage</span>
            </h2>
          </Reveal>

          <Reveal delay={80}>
            <div
              className="mono-sm"
              style={{ maxWidth: '300px', textAlign: 'right' }}
            >
              [01] WE DO NOT BUILD CONSUMER ELECTRONICS. WE BUILD HEAVY-DUTY OPTICAL INSTRUMENTS
              DESIGNED TO WITHSTAND THE ROAD.
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
