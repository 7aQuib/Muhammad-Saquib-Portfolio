import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community Dashboard",
  robots: {
    index: false,
    follow: false,
  },
};

export default function CommunityLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
