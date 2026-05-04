import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'ARYS — Növeld a profitot, csökkentsd a céges káoszt.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0A0B0D',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '600px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(45,212,191,0.12) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />

        {/* Grid lines */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: '60px 60px',
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            marginBottom: '40px',
          }}
        >
          {/* Logo mark */}
          <div
            style={{
              width: '52px',
              height: '52px',
              background: 'white',
              borderRadius: '14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: '26px',
                height: '26px',
                background: '#0A0B0D',
                borderRadius: '6px',
                transform: 'rotate(45deg)',
              }}
            />
          </div>
          {/* ARYS. wordmark */}
          <div
            style={{
              fontSize: '42px',
              fontWeight: 900,
              color: 'white',
              letterSpacing: '-2px',
              display: 'flex',
            }}
          >
            ARYS
            <span style={{ color: '#2dd4bf' }}>.</span>
          </div>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: '60px',
            fontWeight: 800,
            color: 'white',
            textAlign: 'center',
            lineHeight: 1.1,
            letterSpacing: '-2px',
            maxWidth: '900px',
            marginBottom: '24px',
          }}
        >
          Növeld a{' '}
          <span
            style={{
              background: 'linear-gradient(90deg, #2dd4bf, #3b82f6)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              fontStyle: 'italic',
            }}
          >
            profitot
          </span>
          , csökkentsd a céges káoszt.
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: '22px',
            color: 'rgba(156,163,175,1)',
            textAlign: 'center',
            maxWidth: '700px',
            lineHeight: 1.5,
          }}
        >
          Prémium AI és workflow automatizáció modern vállalkozásoknak.
        </div>

        {/* Bottom badge */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(45,212,191,0.1)',
            border: '1px solid rgba(45,212,191,0.3)',
            borderRadius: '999px',
            padding: '8px 20px',
          }}
        >
          <div
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#2dd4bf',
            }}
          />
          <span style={{ color: '#2dd4bf', fontSize: '14px', fontWeight: 700, letterSpacing: '2px' }}>
            VALÓDI ÜZLETI AUTOMATIZÁCIÓ
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
