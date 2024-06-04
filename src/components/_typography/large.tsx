export function TypographyLarge({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="text-lg font-semibold">{children}</div>;
}
