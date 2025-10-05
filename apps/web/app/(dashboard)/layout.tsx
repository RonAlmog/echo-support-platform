import { AuthGuard } from "@/modules/auth/ui/components/auth-guard";
import { AuthLayout } from "@/modules/auth/ui/layouts/auth-layout";

export default function DashLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AuthGuard>{children}</AuthGuard>;
}
