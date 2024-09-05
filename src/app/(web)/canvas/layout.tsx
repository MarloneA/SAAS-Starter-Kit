export default async function CanvasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="h-screen">{children}</div>;
}
