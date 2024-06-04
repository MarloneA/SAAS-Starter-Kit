export function TypographyMuted({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <p className="text-sm text-muted-foreground">{children}</p>;
}
