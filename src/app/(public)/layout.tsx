import { ScrollToTop } from "@/shared/components/custom/ScrollToTop";
import { Footer } from "@/shared/components/layout/Footer";
import { Navbar } from "@/shared/components/layout/Navbar";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
