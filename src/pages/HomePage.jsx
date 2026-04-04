import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Hero } from "../components/sections/Hero";
import { Services } from "../components/sections/Services";
import { Corporate } from "../components/sections/Corporate";
import { Academy } from "../components/sections/Academy";
import { Web3 } from "../components/sections/Web3";
import { Methodology } from "../components/sections/Methodology";
import { Testimonials } from "../components/sections/Testimonials";
import { FAQ } from "../components/sections/FAQ";
import { CTA } from "../components/sections/CTA";

export function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Corporate />
        <Academy />
        <Web3 />
        <Methodology />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
