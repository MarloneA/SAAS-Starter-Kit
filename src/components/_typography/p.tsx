export function TypographyP({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <p className="leading-7 [&:not(:first-child)]:mt-6 text-center">
      {children}
    </p>
  );
}
