import NavBar from '../components/Navigation/Navbar'
import '../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body className="flex min-h-screen h-full flex-col py-5 container mx-auto max-w-screen-xl items-stretch bg-gradient-to-br from-indigo-50 via-white to-cyan-100">
        <div className="fixed top-0 container mx-auto max-w-screen-xl z-10">
        <NavBar fixed={undefined} />
        </div>
        <div className="layoutChildren flex flex-auto py-24">{children}</div>
      </body>
    </html>
  )
}
