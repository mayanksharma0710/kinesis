import type {Metadata} from "next";
import {Manrope, Space_Grotesk} from "next/font/google";
import "./globals.css";
import NavBarLayout from "@/ui/layouts/NavBarLayout";
import FooterLayout from "@/ui/layouts/FooterLayout";
import styles from "@/ui/layouts/NavBarLayout.module.css";
import triColorStyle from "./TriColorLayout.module.css"

const headingFont = Space_Grotesk({
    variable: "--font-family-heading",
})

const normalFont = Manrope({
    variable: "--font-family-normal",
})

export const metadata: Metadata = {
    title: "Kinesis IT Solution",
    description: "Fueling to the self reliant - Industrial growth in India.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${normalFont.variable} ${headingFont.variable}`}>

        <div className={`${triColorStyle.triColor}`}>
            <hr className={`${styles.saffronLine}`}/>
            <hr className={`${styles.whiteLine}`}/>
            <hr className={`${styles.greenLine}`}/>
        </div>
        
        <NavBarLayout/>
        <body>{children}</body>
        <FooterLayout/>
        </html>
    );
}