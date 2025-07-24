export type Position = {
  lat: number;
  lng: number;
};

export type Trail = {
  id: string;
  title: string;
  distance: number;
  duration?: string;
  description?: string;
  elevationGain?: number;
  elevationLoss?: number;
  routeType: "Loop" | "Out and back" | "Point to point";
  tags: string[];
  parking?: Position;
  peak?: Position;
  startLocation?: Position;
  movingTime?: number;
  isPermitRequired: boolean;
  url?: string;
  district?: string;
  state?: string;
  country?: string;
};

export const trails: Trail[] = [
  {
    id: "poomalai",
    title: "Poo malai",
    description:
      "Poo Malai Trail is a forest hike with steady climbs, shaded paths, and scenic ridge views. Ideal for intermediate hikers, it offers a peaceful escape into nature and ends at a beautiful high point overlooking the valley.",
    distance: 4.5,
    elevationGain: 254,
    elevationLoss: 252,
    routeType: "Out and back",
    tags: ["Temple", "Views"],
    movingTime: 1.43,
    isPermitRequired: false,
    district: "Krishnagiri",
    state: "Tamilnadu",
    country: "India",
  },
  {
    id: "guthirayan",
    title: "Guthirayan Peak",
    description:
      "The trek to Guthirayan Peak in Krishnagiri is a thrilling climb through dense forests and diverse habitats. It ends at the highest point of the Guthirayan with stunning panoramic views. Expect cool weather, rich greenery, and sightings of local birds and butterflies.",
    distance: 7.37,
    elevationGain: 483,
    elevationLoss: 324,
    routeType: "Out and back",
    tags: ["Forests", "Wildlife", "Views", "TrekTamilNadu"],
    movingTime: 2.41,
    isPermitRequired: true,
    url: "https://www.trektamilnadu.com/trail/guthirayan-peak",
  },
  {
    id: "maramalai",
    title: "Maramalai",
    description:
      "The Kalikesam-Maramalai trail in Kanyakumari weaves through rich forests and ancient plantations. Watch for the Travancore Tortoise, vibrant bird calls, and local snacks served deep in the wild—an immersive journey into the region’s diverse ecosystems.",
    distance: 14.92,
    elevationGain: 407,
    elevationLoss: 393,
    routeType: "Out and back",
    tags: ["Forests", "Wildlife", "Views", "TrekTamilNadu"],
    movingTime: 4.11,
    isPermitRequired: true,
    url: "https://www.trektamilnadu.com/trail/kalikesam-maramalai",
  },
  {
    id: "injikadavu",
    title: "Injikadavu",
    description:
      "The Injikadavu trail in Kanyakumari Wildlife Sanctuary is a journey through deciduous woods, lush evergreen forests, and open grasslands. It’s a quiet escape into wild beauty—revealing the unexpected richness of Kanyakumari’s forested heart.",
    distance: 15.05,
    elevationGain: 613,
    elevationLoss: 583,
    routeType: "Out and back",
    tags: ["Forests", "Wildlife", "Views", "TrekTamilNadu"],
    movingTime: 5.04,
    isPermitRequired: true,
    url: "https://www.trektamilnadu.com/trail/injikadavu",
  },
  {
    id: "melagiri",
    title: "Melagiri",
    description: "",
    distance: 9.22,
    elevationGain: 374,
    elevationLoss: 368,
    routeType: "Out and back",
    tags: ["Forests", "Wildlife", "Views", "Temple"],
    movingTime: 3.12,
    isPermitRequired: false,
  },
  {
    id: "musaatumalai",
    title: "Musaatumalai",
    distance: 5.49,
    elevationGain: 228,
    elevationLoss: 203,
    routeType: "Out and back",
    tags: ["Views", "Temple"],
    isPermitRequired: false,
    movingTime: 1.57,
  },
  {
    id: "maharajakadai",
    title: "Maharajakadai",
    distance: 4.96,
    elevationGain: 485,
    elevationLoss: 458,
    movingTime: 2.06,
    routeType: "Out and back",
    tags: ["Views", "Wildlife", "Temple"],
    isPermitRequired: false,
  },
  {
    id: "handigundi",
    title: "Handigundi",
    distance: 4.24,
    elevationGain: 237,
    elevationLoss: 237,
    movingTime: 1.3,
    routeType: "Out and back",
    tags: ["Views", "Forests", "Wildlife"],
    isPermitRequired: true,
  },
  {
    id: "ankushagiri",
    title: "Ankushagiri",
    distance: 4.05,
    elevationGain: 199,
    elevationLoss: 180,
    movingTime: 1.26,
    routeType: "Out and back",
    tags: ["Views", "Historic sites"],
    isPermitRequired: false,
  },
  {
    id: "nambikoil",
    title: "Nambikoil",
    distance: 9.06,
    elevationGain: 180,
    elevationLoss: 191,
    movingTime: 2.43,
    routeType: "Out and back",
    tags: ["Rivers", "Forests", "Wildlife", "Temple"],
    isPermitRequired: true,
  },
  {
    id: "shoolagiri",
    title: "Shoolagiri",
    distance: 4.1,
    elevationGain: 165,
    elevationLoss: 147,
    movingTime: 1.4,
    routeType: "Out and back",
    tags: ["Views", "Historic sites"],
    isPermitRequired: false,
  },
];
