export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="max-w-md m-auto h-full">{children}</div>;
}
