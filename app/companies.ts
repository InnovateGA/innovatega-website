export type Company = {
  name: string;
  tagline: string;
  href: string;
  verb: string;
};

export const companies: Company[] = [
  { name: "AirfieldFinder", tagline: "UK airfield discovery and fly-out planning.", href: "https://airfieldfinder.app", verb: "Discover" },
  { name: "Smart PPR", tagline: "PPR booking for pilots and airfield operators.", href: "https://www.smartppr.co.uk", verb: "Book" },
  { name: "FlightDeck EFB", tagline: "The EFB for every pilot.", href: "https://www.flightdeckefb.com", verb: "Fly" },
  { name: "AviNet", tagline: "Pilot community, flight sharing and reflection.", href: "https://avinet.app", verb: "Connect" },
  { name: "Plogbook", tagline: "Flight ops for clubs, schools, and syndicates.", href: "https://www.plogbook.com", verb: "Log" },
  { name: "AeroAds", tagline: "Aircraft marketplace & intelligence platform.", href: "https://aeroads.co.uk", verb: "Trade" },
  { name: "MyPlaneBooker", tagline: "Aircraft booking and syndicate management.", href: "https://www.myplanebooker.com", verb: "Manage" },
];
