import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import WhyAFZ from "@/components/sections/whyafz";
import Stats from "@/components/sections/Stats";
import Industries from "@/components/sections/Industries";
import Process from "@/components/sections/Process";
import CaseStudies from "@/components/sections/CaseStudies";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import ContactForm from "@/components/sections/ContactForm";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <WhatsAppButton />
      <Hero />
      <Services />
      <Industries />
      <Process />
      <CaseStudies />
      <WhyAFZ />
      <Stats />
      <Testimonials />
      <Pricing />
      <FAQ />
      <ContactForm />
      <Footer />
    </>
  );
}