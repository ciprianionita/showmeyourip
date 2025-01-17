import "./globals.css";

export const metadata = {
    title: "Show Me Your IP",
    description:
        "This tool helps you quickly find out your current IP address.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="antialiased">{children}</body>
        </html>
    );
}
