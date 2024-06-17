import { cn } from "@/lib/utils";

export function H1({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: String;
}>) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className
      )}
    >
      {children}
    </h1>
  );
}

export function H2({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: String;
}>) {
  return (
    <h2
      className={cn(
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function H3({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: String;
}>) {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        className
      )}
    >
      {children}
    </h3>
  );
}

export function H4({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: String;
}>) {
  return (
    <h4
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        className
      )}
    >
      {children}
    </h4>
  );
}

export function InlineCode({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: String;
}>) {
  return (
    <code
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        className
      )}
    >
      {children}
    </code>
  );
}

export function Large({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: String;
}>) {
  return (
    <div className={cn("text-lg font-semibold", className)}>{children}</div>
  );
}

export function Lead({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: String;
}>) {
  return (
    <p className={cn("text-xl text-muted-foreground", className)}>{children}</p>
  );
}

export function ListItem({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: String;
}>) {
  return <li>{children}</li>;
}

export function Muted({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: String;
}>) {
  return (
    <p className={cn("text-sm text-muted-foreground", className)}>{children}</p>
  );
}

export function P({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: String;
}>) {
  return (
    <p
      className={cn(
        "leading-7 [&:not(:first-child)]:mt-6 text-center",
        className
      )}
    >
      {children}
    </p>
  );
}

export function Small({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: String;
}>) {
  return (
    <small className={cn("text-sm font-medium leading-none", className)}>
      {children}
    </small>
  );
}

export function List({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: String;
}>) {
  return (
    <ul className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)}>
      {children}
    </ul>
  );
}

export function Blockquote({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: String;
}>) {
  return (
    <blockquote className={cn("mt-6 border-l-2 pl-6 italic", className)}>
      {children}
    </blockquote>
  );
}
