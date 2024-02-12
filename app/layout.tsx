import { Suspense } from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { Toaster } from "@/components/ui/sonner"
import { Loading } from "@/components/auth/loading"
import { ModalProvider } from "@/providers/modal-provider"
import { ConvexClientProvider } from "@/providers/convex-client-provider"

import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Board - Miro Clone",
  description:
    "Board - Miro Clone is a visual workspace for innovation where teams manage projects, design products, and build the future together.",
  icons: "/logo.svg",
}

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={<Loading />}>
          <ConvexClientProvider>
            <Toaster />
            <ModalProvider />
            {children}
          </ConvexClientProvider>
        </Suspense>
      </body>
    </html>
  )
}

export default RootLayout
