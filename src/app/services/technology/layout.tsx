import { Dancing_Script } from "next/font/google";

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-dancing",
  display: "swap",
});

export default function TechnologyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={dancing.variable}>{children}</div>;
}
