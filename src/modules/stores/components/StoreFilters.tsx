import { Button } from "@/shared/components/ui/button";
import { Checkbox } from "@/shared/components/ui/checkbox";
import { Label } from "@/shared/components/ui/label";
import { Separator } from "@/shared/components/ui/separator";
import { Slider } from "@/shared/components/ui/slider";

export function StoreFilters() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="mb-4 text-lg font-semibold">Filters</h3>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Distance (km)</Label>
            <Slider defaultValue={[5]} max={20} step={1} />
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
            <Checkbox id="delivery" />
            <Label htmlFor="delivery">Home Delivery</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="urgent" />
            <Label htmlFor="urgent">Urgent Service</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="color" />
            <Label htmlFor="color">Color Printing</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="binding" />
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
              <Checkbox id={`rating-${rating}`} />
              <Label htmlFor={`rating-${rating}`}>{rating}+ Stars</Label>
            </div>
          ))}
        </div>
      </div>
      <Button className="w-full">Apply Filters</Button>
    </div>
  );
}
