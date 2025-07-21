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
];
