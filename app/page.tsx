import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";

import Services from "@/components/sections/Services";
import WhyAFZ from "@/components/sections/whyafz";
import Industries from "@/components/sections/Industries";
import CaseStudies from "@/components/sections/CaseStudies";
import Testimonials from "@/components/sections/Testimonials";
import FAQ  from "@/components/sections/FAQ";
import ContactForm from "@/components/sections/ContactForm";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <WhatsAppButton />
      <Hero />
      <WhyAFZ />
      <Services />
      <Industries />
      <CaseStudies />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
    </>
  );
}