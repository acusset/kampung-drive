import { Card } from "@heroui/react";

export default function TransitDiagram() {
  return (
    <Card>
      <Card.Header>
        <div className="font-[family-name:var(--mono)] text-xs tracking-wide text-[color:var(--sage)]">
          YOUR ROUTE, MAPPED
        </div>
      </Card.Header>
      <Card.Content>
        <svg
          viewBox="0 0 340 150"
          width="100%"
          style={{ overflow: "visible" }}
          role="img"
          aria-label="Diagram of a direct shared commute route from Normanton Park to Raffles Place with three neighbours riding together"
        >
          <line x1="24" y1="90" x2="316" y2="90" stroke="#3E655C" strokeWidth={3} />
          <g className="motion-safe:animate-ride motion-reduce:translate-x-[116px]">
            <circle cx="24" cy="90" r="7" fill="#F2A93B" />
          </g>
          <g>
            <circle cx="24" cy="90" r="9" fill="none" stroke="#F2A93B" strokeWidth={2.5} />
            <text x="24" y="118" fill="#F6F1E4" fontFamily="SFMono-Regular,Consolas,monospace" fontSize="10.5" textAnchor="middle">
              THE
            </text>
            <text x="24" y="130" fill="#F6F1E4" fontFamily="SFMono-Regular,Consolas,monospace" fontSize="10.5" textAnchor="middle">
              INTERLACE
            </text>
          </g>
          <g>
            <circle cx="38" cy="34" r="9" fill="#173F38" stroke="#8FB6A6" strokeWidth={2} />
            <text x="38" y="38" fill="#8FB6A6" fontFamily="Georgia,serif" fontSize="10" textAnchor="middle">
              R
            </text>
            <circle cx="60" cy="29" r="9" fill="#173F38" stroke="#8FB6A6" strokeWidth={2} />
            <text x="60" y="33" fill="#8FB6A6" fontFamily="Georgia,serif" fontSize="10" textAnchor="middle">
              M
            </text>
            <text x="49" y="14" fill="#8FA39B" fontFamily="SFMono-Regular,Consolas,monospace" fontSize="9.5" textAnchor="middle">
              3 riding today
            </text>
          </g>
          <g>
            <circle cx="316" cy="90" r="9" fill="#E8664A" />
            <text x="316" y="118" fill="#F6F1E4" fontFamily="SFMono-Regular,Consolas,monospace" fontSize="10.5" textAnchor="middle">
              RAFFLES
            </text>
            <text x="316" y="130" fill="#F6F1E4" fontFamily="SFMono-Regular,Consolas,monospace" fontSize="10.5" textAnchor="middle">
              PLACE
            </text>
          </g>
        </svg>
      </Card.Content>
    </Card>
  );
}
