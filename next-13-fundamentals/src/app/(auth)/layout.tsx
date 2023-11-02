export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div>
        <h1 className="text-xl font-bold">Logo o App</h1>
        <div>{children}</div>
      </div>
    )
  }
  