"use client";

import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/shared/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select";
import { Separator } from "@/shared/components/ui/separator";
import { useState } from "react";

export interface PrintConfig {
  color: "bw" | "color";
  paperSize: "a4" | "a3" | "legal";
  sides: "single" | "double";
  copies: number;
  binding: "none" | "staple" | "spiral" | "hardcover";
  instructions: string;
  deliveryMethod: "pickup" | "delivery";
}

interface PrintConfigFormProps {
  onChange: (config: PrintConfig) => void;
}

export function PrintConfigForm({ onChange }: PrintConfigFormProps) {
  const [config, setConfig] = useState<PrintConfig>({
    color: "bw",
    paperSize: "a4",
    sides: "single",
    copies: 1,
    binding: "none",
    instructions: "",
    deliveryMethod: "pickup",
  });

  const updateConfig = (key: keyof PrintConfig, value: any) => {
    const newConfig = { ...config, [key]: value };
    setConfig(newConfig);
    onChange(newConfig);
  };

  return (
    <div className="bg-card space-y-6 rounded-lg border p-6">
      <h3 className="text-lg font-semibold">Print Configuration</h3>

      <div className="space-y-4">
        <div className="space-y-3">
          <Label>Color Mode</Label>
          <RadioGroup
            defaultValue="bw"
            onValueChange={(val) => updateConfig("color", val)}
            className="grid grid-cols-2 gap-4"
          >
            <div>
              <RadioGroupItem value="bw" id="bw" className="peer sr-only" />
              <Label
                htmlFor="bw"
                className="border-muted bg-popover hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary flex flex-col items-center justify-between rounded-md border-2 p-4"
              >
                <span className="text-lg font-bold">B&W</span>
                <span className="text-muted-foreground text-xs">
                  Standard Black
                </span>
              </Label>
            </div>
            <div>
              <RadioGroupItem
                value="color"
                id="color"
                className="peer sr-only"
              />
              <Label
                htmlFor="color"
                className="border-muted bg-popover hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary flex flex-col items-center justify-between rounded-md border-2 p-4"
              >
                <span className="text-lg font-bold text-blue-600">Color</span>
                <span className="text-muted-foreground text-xs">
                  Full Color
                </span>
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Paper Size</Label>
            <Select
              defaultValue="a4"
              onValueChange={(val) => updateConfig("paperSize", val)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="a4">A4 (Standard)</SelectItem>
                <SelectItem value="a3">A3 (Large)</SelectItem>
                <SelectItem value="legal">Legal</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Sides</Label>
            <Select
              defaultValue="single"
              onValueChange={(val) => updateConfig("sides", val)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select sides" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="single">Single Sided</SelectItem>
                <SelectItem value="double">Double Sided</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Binding Option</Label>
          <Select
            defaultValue="none"
            onValueChange={(val) => updateConfig("binding", val)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select binding" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">No Binding</SelectItem>
              <SelectItem value="staple">Staple (Corner)</SelectItem>
              <SelectItem value="spiral">Spiral Binding</SelectItem>
              <SelectItem value="hardcover">Hardcover Binding</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Number of Copies</Label>
          <Input
            type="number"
            min={1}
            value={config.copies}
            onChange={(e) =>
              updateConfig("copies", parseInt(e.target.value) || 1)
            }
          />
        </div>

        <div className="space-y-3">
          <Label>Delivery Method</Label>
          <RadioGroup
            defaultValue="pickup"
            onValueChange={(val) => updateConfig("deliveryMethod", val)}
            className="grid grid-cols-2 gap-4"
          >
            <div>
              <RadioGroupItem
                value="pickup"
                id="pickup"
                className="peer sr-only"
              />
              <Label
                htmlFor="pickup"
                className="border-muted bg-popover hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary flex flex-col items-center justify-between rounded-md border-2 p-4"
              >
                <span className="text-base font-semibold">Store Pickup</span>
                <span className="text-muted-foreground text-xs">Free</span>
              </Label>
            </div>
            <div>
              <RadioGroupItem
                value="delivery"
                id="delivery"
                className="peer sr-only"
              />
              <Label
                htmlFor="delivery"
                className="border-muted bg-popover hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary flex flex-col items-center justify-between rounded-md border-2 p-4"
              >
                <span className="text-base font-semibold">Home Delivery</span>
                <span className="text-muted-foreground text-xs">
                  Charges apply
                </span>
              </Label>
            </div>
          </RadioGroup>
        </div>

        <Separator />

        <div className="space-y-2">
          <Label>Special Instructions</Label>
          <Input
            placeholder="Any specific requirements..."
            value={config.instructions}
            onChange={(e) => updateConfig("instructions", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
