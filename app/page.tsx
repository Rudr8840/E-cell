"use client";

import { navItems } from "@/data";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Approach from "@/components/Approach";
import Blogssec from "@/components/Blogssec";
import Gallerysec from "@/components/Gallerysec";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { MobileHamburgerNav } from "@/components/ui/MobileHamburgerNav";
import Jordon from "@/components/Jordon";
import About from "@/components/About";
import Services from "@/components/Services";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      {/* Desktop Floating Nav */}
      <div className="hidden md:block">
        <FloatingNav navItems={navItems} />
      </div>

      {/* Mobile Hamburger Nav */}
      <div className="block md:hidden">
        <MobileHamburgerNav navItems={navItems} />
      </div>
        <Hero />
        <About />
        <Services />
        <Blogssec />
        <Gallerysec />
        <Approach />
        <Jordon />
        <Footer />
    </main>
  );
};

export default Home;
