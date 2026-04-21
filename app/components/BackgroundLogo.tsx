/**
 * Decorative background watermark — a giant OKX pixel-grid tile
 * rendered far behind all content with a soft green glow.
 * Mirrors the "creeper-style" OKX Wallet icon: green rounded square
 * with black pixel holes forming the OKX mark.
 */
export function BackgroundLogo() {
  // Pixel grid geometry (same cell math as OkxWalletLogo)
  const cell = 24;
  const gap = cell;
  const letterW = 3 * cell;
  const totalW = 3 * letterW + 2 * gap; // 264
  const letterH = 3 * cell; // 72

  const o = 0;
  const k = letterW + gap;
  const x = 2 * (letterW + gap);

  const padX = 60;
  const padY = 60;
  const vbW = totalW + padX * 2; // 384
  const vbH = letterH + padY * 2; // 192
  const gridX = padX;
  const gridY = padY;

  const rects: { col: number; row: number; base: number }[] = [
    { col: 0, row: 0, base: o }, { col: 1, row: 0, base: o }, { col: 2, row: 0, base: o },
    { col: 0, row: 1, base: o }, { col: 2, row: 1, base: o },
    { col: 0, row: 2, base: o }, { col: 1, row: 2, base: o }, { col: 2, row: 2, base: o },
    { col: 0, row: 0, base: k }, { col: 0, row: 1, base: k }, { col: 0, row: 2, base: k },
    { col: 2, row: 0, base: k }, { col: 1, row: 1, base: k }, { col: 2, row: 2, base: k },
    { col: 0, row: 0, base: x }, { col: 2, row: 0, base: x }, { col: 1, row: 1, base: x },
    { col: 0, row: 2, base: x }, { col: 2, row: 2, base: x },
  ];

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ zIndex: 0 }}
    >
      {/* outer green glow */}
      <div
        className="absolute"
        style={{
          top: "8%",
          right: "-10%",
          width: "1100px",
          height: "1100px",
          background:
            "radial-gradient(circle at center, rgba(158,235,46,0.22) 0%, rgba(158,235,46,0.08) 35%, transparent 65%)",
          filter: "blur(10px)",
        }}
      />

      {/* tilted creeper tile */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${vbW} ${vbH}`}
        className="absolute"
        style={{
          top: "10%",
          right: "-4%",
          width: "820px",
          height: "auto",
          transform: "rotate(-14deg)",
          opacity: 0.18,
          filter: "drop-shadow(0 0 60px rgba(158,235,46,0.55))",
        }}
        aria-label="OKX backdrop"
        role="img"
      >
        <rect
          x="0"
          y="0"
          width={vbW}
          height={vbH}
          rx="56"
          ry="56"
          fill="#9EEB2E"
        />
        {rects.map((r, i) => (
          <rect
            key={i}
            x={gridX + r.base + r.col * cell}
            y={gridY + r.row * cell}
            width={cell}
            height={cell}
            fill="#000000"
          />
        ))}
      </svg>
    </div>
  );
}
