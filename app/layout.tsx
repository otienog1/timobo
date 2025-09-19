import { ThemeProvider } from '@/components/ThemeProvider'
import './globals.css'
import { Source_Sans_3 } from 'next/font/google'
import localFont from 'next/font/local'

import Navbar from '@/components/Navbar'
import FooterAnimated from '@/components/mvpblocks/footer-animated'

const poppins = Source_Sans_3({
    weight: '400',
    subsets: ['latin'],
    display: 'swap'
})

const productsans = localFont({
    src: [
        {
            path: '../components/font/Google-Sans-Font/GoogleSans-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../components/font/Google-Sans-Font/GoogleSans-Italic.woff2',
            weight: '400',
            style: 'italic',
        },
        {
            path: '../components/font/Google-Sans-Font/GoogleSans-Medium.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../components/font/Google-Sans-Font/GoogleSans-MediumItalic.woff2',
            weight: '500',
            style: 'italic',
        },
        {
            path: '../components/font/Google-Sans-Font/GoogleSans-Bold.woff2',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../components/font/Google-Sans-Font/GoogleSans-BoldItalic.woff2',
            weight: '700',
            style: 'italic',
        },
    ],
})

export const metadata = {
    title: 'Timobo Safaris Ltd - Experiences of Africa',
    description: 'For over 18 years, Timobo Safaris Ltd has specialized in purpose-driven safaris in Kenya and tailor-made African safari tours across Eastern and Southern Africa.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="stylesheet" href="https://use.typekit.net/zlm8ffl.css" />
            </head>
            <body className={productsans.className} suppressHydrationWarning>
                <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} forcedTheme="light">
                    <Navbar />
                    {children}
                    <FooterAnimated />
                </ThemeProvider>
            </body>
        </html>
    )
}
