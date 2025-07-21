import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { trails } from "@/data/trails";

type Props = {
  onSelect: (gpxFile: string) => void;
};

export default function TrailList({ onSelect }: Props) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {trails.map((trail) => (
        <Card
          key={trail.id}
          className="hover:shadow-lg cursor-pointer"
          onClick={() => onSelect(trail.gpxFile)}
        >
          <CardHeader>
            <CardTitle>{trail.name}</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            <p>{trail.location}</p>
            <p>{trail.distanceKm} km</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
