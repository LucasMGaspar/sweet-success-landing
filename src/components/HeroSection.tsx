import { ShieldCheck, CreditCard } from "lucide-react";
import heroProduct from "@/assets/hero-product.png";
import ChocolateDrip from "./ChocolateDrip";

const HeroSection = () => (
  <section className="relative bg-sunburst min-h-screen flex items-center overflow-hidden">
    <ChocolateDrip />
    
    {/* Sunburst rays */}
    <div className="absolute inset-0 opacity-20" style={{
      background: "repeating-conic-gradient(hsl(43 100% 55% / 0.3) 0deg 10deg, transparent 10deg 20deg)",
      backgroundPosition: "center",
    }} />

    <div className="container mx-auto px-4 pt-24 pb-16 md:pt-28 md:pb-20 relative z-20">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Text */}
        <div className="order-2 md:order-1 text-center md:text-left">
          <h1 className="animate-fade-up text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-primary leading-tight mb-6">
            Transforme Chocolate em Lucro: O Guia Definitivo do Curso{" "}
            <span className="font-script text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-chocolate-light inline-block">
              Páscoa Lucrativa
            </span>
          </h1>

          <p className="animate-fade-up animate-fade-up-delay-1 text-base sm:text-lg text-foreground/80 mb-8 max-w-lg mx-auto md:mx-0">
            Aprenda as técnicas secretas, receitas gourmet de ovos de colher e o passo a passo para{" "}
            <strong>faturar alto nesta Páscoa</strong>, mesmo começando do zero.
          </p>

          <div className="animate-fade-up animate-fade-up-delay-2">
            <a href="#oferta" className="btn-cta pulse-cta inline-block text-center w-full sm:w-auto">
              QUERO GARANTIR MINHA VAGA E LUCRAR AGORA
            </a>
            <div className="flex items-center justify-center md:justify-start gap-3 mt-4 text-muted-foreground text-sm">
              <ShieldCheck className="w-4 h-4 text-green-700" />
              <span>Compra 100% Segura</span>
              <CreditCard className="w-4 h-4 ml-2" />
              <span>Todos os cartões</span>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="order-1 md:order-2 animate-fade-up flex justify-center">
          <img
            src={heroProduct}
            alt="Curso Páscoa Lucrativa - Ovos de chocolate gourmet"
            className="w-72 sm:w-80 md:w-96 lg:w-[28rem] drop-shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
