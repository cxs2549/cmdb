import "./globals.scss"
import Header from "./components/header/header"
import MyQueueProvider from "./context/state"

export const metadata = {
  title: "CMDb | Cyber Movie Database",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MyQueueProvider>
          <Header />
          {children}
        </MyQueueProvider>
      </body>
    </html>
  )
}
