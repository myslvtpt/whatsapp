import type { Metadata } from "next";
import "./styles.css";

export const metadata: Metadata = {
  title: "SLV WhatsApp Message Sender",
  description: "Send approved WhatsApp Business messages for South India Devotional Tours."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
