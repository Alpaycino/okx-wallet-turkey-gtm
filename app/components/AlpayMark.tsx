type Props = {
  size?: number;
  className?: string;
  rounded?: number;
};

/**
 * Alpay mark — bright-green square with 5 black dots arranged in a quincunx
 * (four corners + center), echoing the user-supplied logo.
 */
export function AlpayMark({ size = 32, className = "", rounded = 8 }: Props) {
  // grid: 3x3 cells, dot size scales with the square
  const s = size;
  const pad = s * 0.16; // outer padding
  const inner = s - pad * 2;
  const cell = inner / 3;
  const dot = cell * 0.82;
  const offset = (cell - dot) / 2;

  const positions: [number, number][] = [
    [0, 0],
    [2, 0],
    [1, 1],
    [0, 2],
    [2, 2],
  ];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={s}
      height={s}
      viewBox={`0 0 ${s} ${s}`}
      className={className}
      aria-label="Alpay"
      role="img"
    >
      <rect x="0" y="0" width={s} height={s} rx={rounded} fill="#9EEB2E" />
      {positions.map(([cx, cy], i) => (
        <rect
          key={i}
          x={pad + cx * cell + offset}
          y={pad + cy * cell + offset}
          width={dot}
          height={dot}
          rx={dot * 0.12}
          fill="#000000"
        />
      ))}
    </svg>
  );
}
