import './globals.css'
import Head from './head'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <Head />

      <body>
        <nav>
          <h1>My Navbar</h1>
        </nav>
        {children}
      </body>
    </html>
  )
}
