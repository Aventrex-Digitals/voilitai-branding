import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
import { SITE_NAME } from '@/lib/site';

export const dynamic = 'force-static';
export const alt = `${SITE_NAME} — fast Voice OS agents, a Vapi and Retell alternative`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage() {
  const logoData = await readFile(join(process.cwd(), 'public/assets/logo/favicon-light.jpeg'));
  const logoSrc = `data:image/jpeg;base64,${logoData.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 72px',
          background: '#f6f7fb',
          color: '#0b1220',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} alt="" width={72} height={72} style={{ borderRadius: 18, objectFit: 'cover' }} />
          <div style={{ display: 'flex', fontSize: 36, fontWeight: 700, letterSpacing: -1 }}>voilitai</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={{ display: 'flex', fontSize: 58, fontWeight: 700, lineHeight: 1.12, maxWidth: 980 }}>
            Never miss a call again. Voice agents that feel human.
          </div>
          <div style={{ display: 'flex', fontSize: 26, color: '#5c6578', maxWidth: 860 }}>
            Fast Voice OS agents · Vapi & Retell alternative · 24/7 support
          </div>
        </div>
        <div style={{ display: 'flex', gap: 14 }}>
          {['SOC 2', 'HIPAA-ready', '40+ languages'].map((label) => (
            <div
              key={label}
              style={{
                display: 'flex',
                padding: '10px 20px',
                borderRadius: 999,
                border: '1px solid rgba(139, 53, 232, 0.45)',
                fontSize: 22,
                color: '#8b35e8',
              }}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
