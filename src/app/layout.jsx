import './globals.css'
import Navigation from "./components/navbar";
// import MobileMenu from "./components/mobile";

export const metadata = {
  title: 'Live Score Demo',
  description: 'Live score create with create-app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
