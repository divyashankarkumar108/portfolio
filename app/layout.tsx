import type { Metadata } from "next";
import "./globals.css";
export const metadata:Metadata={title:"Divya Shankar Kumar | Senior Software Engineer",description:"Senior Software Engineer specializing in distributed systems, cloud architecture and applied AI."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}