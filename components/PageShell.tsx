import type { ReactNode } from "react";
import Navbar from "./Navbar";
import ScrollProgress from "./ScrollProgress";
import Footer from "./Footer";

/**
 * Wraps a dedicated listing page with the same header (Navbar + scroll
 * progress) and footer used on the home page. A top spacer keeps content
 * clear of the fixed navbar.
 */
export default function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="pt-16 sm:pt-20">{children}</main>
      <Footer />
    </>
  );
}
