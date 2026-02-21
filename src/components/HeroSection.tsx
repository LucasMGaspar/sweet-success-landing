import { ShieldCheck, CreditCard } from "lucide-react";
import heroProduct from "@/assets/Gemini_Generated_Image_rcccvrrcccvrrccc.png";
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
          <div className="animate-fade-up inline-flex items-center gap-2 bg-red-600 text-white text-sm font-heading font-bold px-4 py-2 rounded-full mb-5 shadow-lg">
            🔥 OFERTA RELÂMPAGO — Encerra em breve!
          </div>

          <h1 className="animate-fade-up text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-chocolate leading-tight mb-5" style={{textShadow: "0 1px 3px rgba(255,255,255,0.4)"}}>
            Fature até{" "}
            <span className="bg-chocolate text-primary-foreground px-2 py-0.5 rounded-lg inline-block">
              R$3.000
            </span>{" "}
            nessa Páscoa vendendo ovos de chocolate
          </h1>

          <p className="animate-fade-up animate-fade-up-delay-1 text-base sm:text-lg font-semibold text-chocolate mb-4 max-w-lg mx-auto md:mx-0">
            O passo a passo completo para produzir, precificar e vender —{" "}
            <span className="underline decoration-2">mesmo que você nunca tenha feito um ovo antes.</span>
          </p>

          <ul className="animate-fade-up animate-fade-up-delay-1 text-sm sm:text-base font-semibold text-chocolate mb-8 max-w-lg mx-auto md:mx-0 space-y-2 text-left">
            <li className="flex items-center gap-2"><span className="text-green-700 text-lg">✅</span> Receitas gourmet testadas e aprovadas</li>
            <li className="flex items-center gap-2"><span className="text-green-700 text-lg">✅</span> Técnicas de precificação para lucro real</li>
            <li className="flex items-center gap-2"><span className="text-green-700 text-lg">✅</span> Acesso imediato após a compra</li>
          </ul>

          <div className="animate-fade-up animate-fade-up-delay-2">
            <a href="https://pay.kiwify.com.br/HBfy6sL" target="_blank" rel="noopener noreferrer" className="btn-cta pulse-cta inline-block text-center w-full sm:w-auto">
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
            className="w-72 sm:w-80 md:w-96 lg:w-[28rem] drop-shadow-2xl hover:scale-105 transition-transform duration-500 rounded-2xl"
          />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
