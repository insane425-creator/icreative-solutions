import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'iCreative Solutions - Smart POS Software for Pakistani Businesses';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#030712',
          backgroundImage:
            'radial-gradient(circle at 25% 25%, rgba(6, 182, 212, 0.15) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
          position: 'relative',
          padding: '60px 80px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Subtle grid border frame */}
        <div
          style={{
            position: 'absolute',
            inset: '30px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '24px',
          }}
        />

        {/* Brand Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '32px',
          }}
        >
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #06b6d4, #2563eb)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontSize: '32px',
              fontWeight: 800,
              boxShadow: '0 10px 30px rgba(6, 182, 212, 0.4)',
            }}
          >
            iC
          </div>
          <span
            style={{
              fontSize: '28px',
              fontWeight: 700,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: '#94a3b8',
            }}
          >
            iCreative Solutions
          </span>
        </div>

        {/* Main Title */}
        <div
          style={{
            fontSize: '56px',
            fontWeight: 900,
            textAlign: 'center',
            lineHeight: 1.15,
            color: '#ffffff',
            maxWidth: '950px',
            marginBottom: '24px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          Next-Gen POS & Retail Management
        </div>

        {/* Subtitle / Focus Areas */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            fontSize: '22px',
            fontWeight: 600,
            color: '#38bdf8',
            marginBottom: '40px',
          }}
        >
          <span>Software Development</span>
          <span style={{ color: '#64748b' }}>•</span>
          <span>Pharmacy & Retail POS</span>
          <span style={{ color: '#64748b' }}>•</span>
          <span>Business Automation</span>
        </div>

        {/* Footer Tag */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '10px 24px',
            borderRadius: '999px',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: '#cbd5e1',
            fontSize: '16px',
            fontWeight: 500,
          }}
        >
          <span>🇵🇰 Built for Pakistani Businesses</span>
          <span style={{ color: '#64748b' }}>•</span>
          <span>icreative.vercel.app</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
