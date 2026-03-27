import Image from 'next/image'

const systems = [
  {
    id: 1,
    eyebrow: 'Flagship Profile',
    name: 'MD-750X Apex',
    description:
      'A high-output CMY color mixing profile moving head. Featuring a custom 750W LED engine, delivering perfectly flat field illumination and razor-sharp projections across massive distances.',
    specs: [
      { label: 'OUTPUT', value: '32,000 LUMENS' },
      { label: 'ZOOM RANGE', value: '5° — 50° LINEAR' },
      { label: 'COLOR SYSTEM', value: 'CMY + CTO' },
      { label: 'DMX CHANNELS', value: '38 / 52 MODE' },
    ],
    image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    imageAlt: 'Stage Lighting Rig',
    imageLeft: true,
  },
  {
    id: 2,
    eyebrow: 'Wash / Pixel',
    name: 'WASH-Q40 Matrix',
    description:
      'Massive atmospheric output with pixel-mapping capabilities. 40 individual 15W RGBW LEDs allow for complex volumetric eye-candy effects alongside powerful stage washing.',
    specs: [
      { label: 'LIGHT SOURCE', value: '40x 15W OSRAM RGBW' },
      { label: 'PIXEL MAPPING', value: 'INDIVIDUAL LED CTRL' },
      { label: 'REFRESH RATE', value: '1200Hz (FLICKER FREE)' },
      { label: 'WEIGHT', value: '18.5 KG' },
    ],
    image: 'https://images.pexels.com/photos/17055740/pexels-photo-17055740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    imageAlt: 'LED Matrix detail',
    imageLeft: false,
  },
]

export default function SystemShowcase() {
  return (
    <section
      id="systems"
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
            Featured
            <br />
            Hardware
          </h2>
          <span className="mono-sm">SELECT INVENTORY</span>
        </div>

        {/* System rows */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '64px' }}>
          {systems.map((sys) => (
            <div
              key={sys.id}
              className="system-row"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '64px',
                alignItems: 'center',
                padding: '40px 0',
                borderTop: '1px solid var(--border)',
              }}
            >
              {/* Image */}
              <div
                className="system-image-wrapper"
                style={{
                  position: 'relative',
                  aspectRatio: '4/3',
                  background: 'var(--surface-1)',
                  border: '1px solid var(--border)',
                  overflow: 'hidden',
                  order: sys.imageLeft ? 1 : 2,
                }}
              >
                {/* Crosshair corners */}
                <div
                  style={{
                    position: 'absolute',
                    width: '20px',
                    height: '20px',
                    border: '1px solid rgba(255,255,255,0.2)',
                    top: '20px',
                    left: '20px',
                    borderRight: 'none',
                    borderBottom: 'none',
                    zIndex: 2,
                    pointerEvents: 'none',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    width: '20px',
                    height: '20px',
                    border: '1px solid rgba(255,255,255,0.2)',
                    bottom: '20px',
                    right: '20px',
                    borderLeft: 'none',
                    borderTop: 'none',
                    zIndex: 2,
                    pointerEvents: 'none',
                  }}
                />
                <Image
                  src={sys.image}
                  alt={sys.imageAlt}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Info */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '32px',
                  order: sys.imageLeft ? 2 : 1,
                }}
              >
                <div>
                  <div className="eyebrow" style={{ marginBottom: '16px' }}>
                    {sys.eyebrow}
                  </div>
                  <h3 style={{ fontSize: '2.5rem' }}>{sys.name}</h3>
                </div>

                <p style={{ color: 'var(--text-muted)' }}>{sys.description}</p>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '24px',
                    borderTop: '1px solid var(--border)',
                    borderBottom: '1px solid var(--border)',
                    padding: '24px 0',
                  }}
                >
                  {sys.specs.map((spec) => (
                    <div
                      key={spec.label}
                      style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}
                    >
                      <span className="mono-sm" style={{ color: 'var(--text-muted)' }}>
                        {spec.label}
                      </span>
                      <span
                        className="mono-sm"
                        style={{ fontSize: '1.1rem', color: 'var(--text-main)' }}
                      >
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>

                <a href="#" className="btn" style={{ alignSelf: 'flex-start' }}>
                  View Full Datasheet
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
