import { ShieldCheck } from "lucide-react";

const GuaranteeSection = () => (
  <section className="section-padding bg-cream-dark">
    <div className="container mx-auto max-w-2xl text-center">
      <div className="animate-fade-up">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
          <ShieldCheck className="w-10 h-10 text-green-700" />
        </div>
        <h3 className="text-2xl sm:text-3xl font-heading font-bold text-primary mb-4">
          Garantia Incondicional de 7 Dias
        </h3>
        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
          O risco é todo meu. Se em até 7 dias você achar que o curso não é para
          você, devolvo <strong>100% do seu dinheiro</strong>. Sem perguntas, sem
          burocracia.
        </p>
      </div>
    </div>
  </section>
);

export default GuaranteeSection;
