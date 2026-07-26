export default function TransitDiagram() {
  return (
    <div className="transit-card">
      <div className="tc-label">YOUR ROUTE, MAPPED</div>
      <svg
        viewBox="0 0 340 190"
        width="100%"
        role="img"
        aria-label="Diagram of a direct shared commute route from Normanton Park to Raffles Place with three neighbours riding together"
      >
        <line x1="20" y1="90" x2="320" y2="90" stroke="#3E655C" strokeWidth={3} />
        <g className="rider-dot">
          <circle cx="20" cy="90" r="7" fill="#F2A93B" />
        </g>
        <g>
          <circle cx="20" cy="90" r="9" fill="none" stroke="#F2A93B" strokeWidth={2.5} />
          <text x="20" y="118" fill="#F6F1E4" fontFamily="SFMono-Regular,Consolas,monospace" fontSize="10.5" textAnchor="middle">
            THE
          </text>
          <text x="20" y="130" fill="#F6F1E4" fontFamily="SFMono-Regular,Consolas,monospace" fontSize="10.5" textAnchor="middle">
            INTERLACE
          </text>
        </g>
        <g>
          <circle cx="12" cy="60" r="9" fill="#173F38" stroke="#8FB6A6" strokeWidth={2} />
          <text x="12" y="64" fill="#8FB6A6" fontFamily="Georgia,serif" fontSize="10" textAnchor="middle">
            R
          </text>
          <circle cx="34" cy="55" r="9" fill="#173F38" stroke="#8FB6A6" strokeWidth={2} />
          <text x="34" y="59" fill="#8FB6A6" fontFamily="Georgia,serif" fontSize="10" textAnchor="middle">
            M
          </text>
          <text x="23" y="38" fill="#8FA39B" fontFamily="SFMono-Regular,Consolas,monospace" fontSize="9.5" textAnchor="middle">
            3 riding today
          </text>
        </g>
        <g>
          <circle cx="320" cy="90" r="9" fill="#E8664A" />
          <text x="320" y="118" fill="#F6F1E4" fontFamily="SFMono-Regular,Consolas,monospace" fontSize="10.5" textAnchor="middle">
            RAFFLES
          </text>
          <text x="320" y="130" fill="#F6F1E4" fontFamily="SFMono-Regular,Consolas,monospace" fontSize="10.5" textAnchor="middle">
            PLACE
          </text>
        </g>
      </svg>
    </div>
  );
}
