type Props = {
  className?: string;
  width?: number;
};

/**
 * OKX WALLET wordmark — pixel-style "OKX" stacked above bold "WALLET",
 * recreated in pure SVG to match the brand's block aesthetic.
 * Renders in `currentColor` so it inherits the parent text color.
 */
export function OkxWalletLogo({ className = "", width = 180 }: Props) {
  // ---------------- Pixel grid for OKX ----------------
  // 3 letters × 3 cols + 2 gaps × 1 col = 11 cols. cell = 24px.
  const cell = 24;
  const gap = cell; // 1 cell gap between letters
  const letterW = 3 * cell; // 72
  const totalW = 3 * letterW + 2 * gap; // 72*3 + 24*2 = 264
  const letterH = 3 * cell; // 72

  // helper: place a cell in letter-local coords (col, row) shifted by letter offset
  const o = 0;
  const k = letterW + gap;
  const x = 2 * (letterW + gap);

  // grid origin inside viewBox — center horizontally inside 320-wide viewBox
  const pad = 10;
  const vbW = totalW + pad * 2; // 284
  const gridX = pad;
  const gridY = pad;

  const rects: { col: number; row: number; base: number }[] = [
    // O — hollow ring (corners + edges, center empty)
    { col: 0, row: 0, base: o },
    { col: 1, row: 0, base: o },
    { col: 2, row: 0, base: o },
    { col: 0, row: 1, base: o },
    { col: 2, row: 1, base: o },
    { col: 0, row: 2, base: o },
    { col: 1, row: 2, base: o },
    { col: 2, row: 2, base: o },
    // K — stem + arms
    { col: 0, row: 0, base: k },
    { col: 0, row: 1, base: k },
    { col: 0, row: 2, base: k },
    { col: 2, row: 0, base: k },
    { col: 1, row: 1, base: k },
    { col: 2, row: 2, base: k },
    // X — diagonals
    { col: 0, row: 0, base: x },
    { col: 2, row: 0, base: x },
    { col: 1, row: 1, base: x },
    { col: 0, row: 2, base: x },
    { col: 2, row: 2, base: x },
  ];

  // ---------------- WALLET text row ----------------
  const walletY = gridY + letterH + 32; // gap under OKX
  const walletBaseline = walletY + 72; // font-size aware
  const vbH = walletBaseline + pad; // bottom padding

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${vbW} ${vbH}`}
      width={width}
      height={(width * vbH) / vbW}
      className={className}
      aria-label="OKX Wallet"
      role="img"
      fill="currentColor"
    >
      {/* OKX pixels */}
      {rects.map((r, i) => (
        <rect
          key={i}
          x={gridX + r.base + r.col * cell}
          y={gridY + r.row * cell}
          width={cell}
          height={cell}
        />
      ))}

      {/* WALLET text */}
      <text
        x={vbW / 2}
        y={walletBaseline}
        textAnchor="middle"
        fontFamily="Inter, Helvetica, Arial, sans-serif"
        fontWeight="900"
        fontSize="72"
        letterSpacing="2"
      >
        WALLET
      </text>
    </svg>
  );
}
