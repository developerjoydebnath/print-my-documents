"use client";

import { Button } from "@/shared/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Edit2, MapPin, Plus, Trash2 } from "lucide-react";

const MOCK_ADDRESSES = [
  {
    id: "1",
    label: "Home",
    address: "Flat 4B, House 12, Road 5, Dhanmondi, Dhaka",
    isDefault: true,
  },
  {
    id: "2",
    label: "Office",
    address: "Level 12, City Center, Motijheel, Dhaka",
    isDefault: false,
  },
];

export function AddressList() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-medium">Saved Addresses</h3>
          <p className="text-muted-foreground text-sm">
            Manage your delivery addresses.
          </p>
        </div>
        <Button size="sm">
          <Plus className="mr-2 h-4 w-4" />
          Add Address
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {MOCK_ADDRESSES.map((address) => (
          <Card
            key={address.id}
            className={address.isDefault ? "border-primary" : ""}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                <div className="flex items-center gap-2">
                  <MapPin className="text-muted-foreground h-4 w-4" />
                  {address.label}
                  {address.isDefault && (
                    <span className="bg-primary/10 text-primary rounded-full px-2 py-0.5 text-xs">
                      Default
                    </span>
                  )}
                </div>
              </CardTitle>
              <div className="flex gap-1">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Edit2 className="h-3 w-3" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-destructive hover:text-destructive h-8 w-8"
                >
                  <Trash2 className="h-3 w-3" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">{address.address}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
