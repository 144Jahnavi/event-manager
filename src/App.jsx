import React, { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/event/Navbar";
import Hero from "@/components/event/Hero";
import Speakers from "@/components/event/Speakers";
import Schedule from "@/components/event/Schedule";
import CTA from "@/components/event/CTA";
import Footer from "@/components/event/Footer";

function App() {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === "#") { // Allow normal behavior for href="#"
          return;
        }
        e.preventDefault();
        const targetId = href.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const headerOffset = document.querySelector('header')?.offsetHeight || 80;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Speakers />
        <Schedule />
        <CTA />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;