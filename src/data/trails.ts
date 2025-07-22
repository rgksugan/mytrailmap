export type Hike = {
  id: string;
  title: string;
  distance: number;
  duration?: string;
  description?: string;
  elevation?: number;
  routeType: "Loop" | "Out and back" | "Point to point";
  tags: string[];
};

export const hikes: Hike[] = [
  {
    id: "maharajakadai",
    title: "Maharajakadai",
    distance: 4.96,
    elevation: 496,
    routeType: "Out and back",
    tags: ["Views", "Wildlife", "Temple"],
  },
  {
    id: "ankushagiri",
    title: "Ankushagiri",
    distance: 3.74,
    elevation: 247,
    routeType: "Out and back",
    tags: ["Views", "Historic sites"],
  },
  {
    id: "nambikoil",
    title: "Nambikoil",
    distance: 8.66,
    elevation: 198,
    routeType: "Out and back",
    tags: ["Rivers", "Forests", "Wildlife", "Temple"],
  },
  {
    id: "handigundi",
    title: "Handigundi",
    distance: 4.05,
    elevation: 278,
    routeType: "Out and back",
    tags: ["Views", "Forests", "Wildlife"],
  },
  {
    id: "shoolagiri",
    title: "Shoolagiri",
    distance: 3.76,
    elevation: 191,
    routeType: "Out and back",
    tags: ["Views", "Historic sites"],
  },
  {
    id: "musaatumalai",
    title: "Musaatumalai",
    distance: 5.49,
    elevation: 228,
    routeType: "Out and back",
    tags: ["Views", "Temple"],
  },
];
