import { Anton } from "next/font/google";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

export default function GraphicDesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={anton.variable}>{children}</div>;
}
