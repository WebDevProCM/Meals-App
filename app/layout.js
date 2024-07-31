import "./globals.css"
import { Playfair_Display, Montserrat, Pacifico } from "next/font/google";
import { ThemeProvider } from "@/components/ui/theme-provider"
import { Toaster } from "react-hot-toast";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Error from "./error";

const playfair_display = Playfair_Display({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-playfair-display'
})

const montserrat= Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat'
})

const pacifico= Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico'
})

export const metadata = {
  title: "Recipes Sharing App",
  description: "Share your favourite and delicious recipes with others and also discover recipes shared by them",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair_display.variable} ${montserrat.variable} ${pacifico.variable}`}>
      <body>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
        
        <ErrorBoundary fallback={<Error />}>
        {children}
        </ErrorBoundary>
        </ThemeProvider>
        <Toaster position="top-right"/>
        </body>
    </html>
  )
}
