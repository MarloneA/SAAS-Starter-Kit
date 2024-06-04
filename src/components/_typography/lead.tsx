export function TypographyLead({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <p className="text-xl text-muted-foreground">{children}</p>;
}
