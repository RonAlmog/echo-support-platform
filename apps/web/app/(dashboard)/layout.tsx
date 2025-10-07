import { AuthGuard } from "@/modules/auth/ui/components/auth-guard";
import { OrganizationGuard } from "@/modules/auth/ui/components/organization-guard";

export default function DashLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthGuard>
      <OrganizationGuard>{children}</OrganizationGuard>
    </AuthGuard>
  );
}
