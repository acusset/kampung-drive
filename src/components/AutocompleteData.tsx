const ESTATES = [
  "Normanton Park",
  "Queenstown",
  "Tiong Bahru",
  "Redhill",
  "Commonwealth",
  "Dover",
  "Clementi",
  "Bukit Timah",
  "Novena",
  "Toa Payoh",
  "Bishan",
  "Ang Mo Kio",
  "Serangoon",
  "Tampines",
  "Bedok",
  "Pasir Ris",
  "Jurong East",
  "Woodlands",
  "Yishun",
  "Punggol",
  "Sengkang",
];

const DESTINATIONS = [
  "Raffles Place",
  "Marina Bay",
  "Tanjong Pagar",
  "Shenton Way",
  "City Hall",
  "Orchard",
  "Suntec City",
  "One-North",
  "Changi Business Park",
  "Paya Lebar",
];

export default function AutocompleteData() {
  return (
    <>
      <datalist id="estates">
        {ESTATES.map((estate) => (
          <option key={estate} value={estate} />
        ))}
      </datalist>
      <datalist id="destinations">
        {DESTINATIONS.map((destination) => (
          <option key={destination} value={destination} />
        ))}
      </datalist>
    </>
  );
}
