import React from "react"
import favicon from "../icons/favicon.ico";
import type { Metadata } from 'next'

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
    title: 'Costs',
    description: 'minha pagina de projetos e orcamentos',
}
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        
    <html lang="pt-br">
        <head>
            <meta charSet="UTF-8" />
            <link rel="icon" type="ico" href={favicon.src} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="" />
            <title>Costs</title>
        </head>
        <body>
            <div id="root">{children}</div>
        </body>
    </html>

    )
}