export const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex flex-col h-full min-h-screen min-w-screen items-center justify-center">
      {children}
    </div>
  );
};
