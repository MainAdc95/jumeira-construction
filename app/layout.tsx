import "./globals.css";
import { SEO_DESCRIPTION, SEO_TITLE } from "@lib/constants";
import { Aboreto, Inter, Roboto } from "next/font/google";
import Head from "next/head";

const inter = Aboreto({
    subsets: ["latin"],
    weight: ["400"],
});

export const metadata = {
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <Head>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
                <link
                    rel="mask-icon"
                    href="/safari-pinned-tab.svg"
                    color="#5bbad5"
                />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />
            </Head>

            <body>
                <main className={inter.className}>{children}</main>
            </body>
        </html>
    );
}
