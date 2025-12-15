import { Button } from "@/shared/components/ui/button";
import { Checkbox } from "@/shared/components/ui/checkbox";
import { Label } from "@/shared/components/ui/label";
import { Separator } from "@/shared/components/ui/separator";
import { Slider } from "@/shared/components/ui/slider";

export interface FilterState {
  distance: number;
  delivery: boolean;
  urgent: boolean;
  color: boolean;
  binding: boolean;
  rating: number | null;
}

interface StoreFiltersProps {
  filters: FilterState;
  onFilterChange: (key: keyof FilterState, value: any) => void;
  onReset: () => void;
}

export function StoreFilters({
  filters,
  onFilterChange,
  onReset,
}: StoreFiltersProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="mb-4 text-lg font-semibold">Filters</h3>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Distance ({filters.distance}km)</Label>
            <Slider
              value={[filters.distance]}
              max={20}
              step={1}
              onValueChange={(val) => onFilterChange("distance", val[0])}
            />
            <div className="text-muted-foreground flex justify-between text-xs">
              <span>0km</span>
              <span>20km</span>
            </div>
          </div>
        </div>
      </div>
      <Separator />
      <div className="space-y-4">
        <h4 className="text-sm font-medium">Services</h4>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="delivery"
              checked={filters.delivery}
              onCheckedChange={(checked) => onFilterChange("delivery", checked)}
            />
            <Label htmlFor="delivery">Home Delivery</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="urgent"
              checked={filters.urgent}
              onCheckedChange={(checked) => onFilterChange("urgent", checked)}
            />
            <Label htmlFor="urgent">Urgent Service</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="color"
              checked={filters.color}
              onCheckedChange={(checked) => onFilterChange("color", checked)}
            />
            <Label htmlFor="color">Color Printing</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="binding"
              checked={filters.binding}
              onCheckedChange={(checked) => onFilterChange("binding", checked)}
            />
            <Label htmlFor="binding">Binding Available</Label>
          </div>
        </div>
      </div>
      <Separator />
      <div className="space-y-4">
        <h4 className="text-sm font-medium">Rating</h4>
        <div className="space-y-2">
          {[4, 3, 2].map((rating) => (
            <div key={rating} className="flex items-center space-x-2">
              <Checkbox
                id={`rating-${rating}`}
                checked={filters.rating === rating}
                onCheckedChange={(checked) =>
                  onFilterChange("rating", checked ? rating : null)
                }
              />
              <Label htmlFor={`rating-${rating}`}>{rating}+ Stars</Label>
            </div>
          ))}
        </div>
      </div>
      <Button variant="outline" className="w-full" onClick={onReset}>
        Reset Filters
      </Button>
    </div>
  );
}
