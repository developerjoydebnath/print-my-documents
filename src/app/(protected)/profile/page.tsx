import { AddressList } from "@/modules/profile/components/AddressList";
import { ProfileForm } from "@/modules/profile/components/ProfileForm";
import { Card, CardContent } from "@/shared/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/shared/components/ui/tabs";

export default function ProfilePage() {
  return (
    <div className="container mx-auto space-y-8 p-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Account Settings</h1>
        <p className="text-muted-foreground mt-1">
          Manage your profile, addresses, and security settings.
        </p>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="addresses">Addresses</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <Card>
            <CardContent className="pt-6">
              <ProfileForm />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="addresses">
          <Card>
            <CardContent className="pt-6">
              <AddressList />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <Card>
            <CardContent className="pt-6">
              <div className="text-muted-foreground py-8 text-center">
                Security settings (Password change, 2FA) coming soon.
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
