import { ShieldCheck, CreditCard } from "lucide-react";

const PricingSection = () => (
  <section className="section-padding bg-background">
    <div className="container mx-auto max-w-xl">
      <div className="animate-fade-up rounded-3xl border-2 border-golden bg-card p-8 md:p-10 text-center shadow-xl">
        <p className="text-muted-foreground text-sm font-heading mb-2">
          Valor Total (Curso + Bônus):
        </p>
        <p className="text-2xl text-muted-foreground line-through mb-1">R$ 297,00</p>
        <p className="text-muted-foreground mb-4 font-heading">
          Hoje, nesta oferta especial, por apenas:
        </p>

        <div className="mb-2">
          <span className="text-5xl sm:text-6xl price-highlight">R$ 19,90</span>
        </div>
        <p className="text-muted-foreground text-sm mb-8">
          Pagamento único · Acesso imediato
        </p>

        <a href="#" className="btn-cta pulse-cta inline-block w-full text-center text-base sm:text-lg">
          QUERO APROVEITAR O DESCONTO AGORA
        </a>

        <div className="flex items-center justify-center gap-3 mt-4 text-muted-foreground text-sm">
          <ShieldCheck className="w-4 h-4 text-green-700" />
          <span>Compra 100% Segura</span>
          <CreditCard className="w-4 h-4 ml-2" />
          <span>Todos os cartões</span>
        </div>
      </div>
    </div>
  </section>
);

export default PricingSection;
