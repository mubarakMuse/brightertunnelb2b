import { Suspense } from 'react'
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main>
        <Hero />
        <Services />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}