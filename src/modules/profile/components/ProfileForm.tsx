"use client";

import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { Separator } from "@/shared/components/ui/separator";

export function ProfileForm() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Personal Information</h3>
        <p className="text-muted-foreground text-sm">
          Update your personal details here.
        </p>
      </div>
      <Separator />
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First name</Label>
            <Input id="firstName" placeholder="Joy" defaultValue="Joy" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last name</Label>
            <Input id="lastName" placeholder="Barua" defaultValue="Barua" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="joy@example.com"
            defaultValue="joy@example.com"
            disabled
          />
          <p className="text-muted-foreground text-[0.8rem]">
            Email cannot be changed.
          </p>
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone number</Label>
          <Input id="phone" type="tel" placeholder="+880 1..." />
        </div>
      </div>
      <div className="flex justify-end">
        <Button>Save Changes</Button>
      </div>
    </div>
  );
}
