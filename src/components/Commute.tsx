import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

const DAY_LABELS = ["MON", "TUE", "WED", "THU", "FRI"];

const NEIGHBOURS = [
  {
    initial: "R",
    avatarClass: "a1",
    name: "Ravi",
    route: "BLK 41 → RFP · Raffles Place",
    days: [true, false, true, false, true],
  },
  {
    initial: "M",
    avatarClass: "a2",
    name: "Mei Ling",
    route: "BLK ABC",
    days: [false, true, false, true, false],
  },
  {
    initial: "J",
    avatarClass: "a3",
    name: "Jun Wei",
    route: "The Interlace → TGP · Tanjong Pagar",
    days: [true, true, true, true, true],
  },
];

export default function Commute() {
  return (
    <section id="commute" className="commute">
      <div className="wrap">
        <Reveal className="section-head">
          <Eyebrow>MEET YOUR COMMUTE</Eyebrow>
          <h2>Your neighbours are already going your way.</h2>
          <p>A few of the regular runs being registered near Normanton Park this week.</p>
        </Reveal>
        <div className="cards">
          {NEIGHBOURS.map((person) => (
            <Reveal key={person.name} className="card">
              <div className="card-top">
                <div className={`avatar ${person.avatarClass}`}>{person.initial}</div>
                <div>
                  <div className="card-name">{person.name}</div>
                  <div className="card-route">{person.route}</div>
                </div>
              </div>
              <div className="card-days">
                {DAY_LABELS.map((label, i) => (
                  <span key={label} className={`day${person.days[i] ? " on" : ""}`}>
                    {label}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
