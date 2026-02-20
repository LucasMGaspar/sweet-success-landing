import { Gift, BookOpen, Table } from "lucide-react";

const bonuses = [
  {
    icon: BookOpen,
    title: "E-book 'Guia de Recheios Lucrativos'",
    value: "R$ 47,00",
  },
  {
    icon: Table,
    title: "Planilha Automática de Precificação",
    value: "R$ 67,00",
  },
  {
    icon: Gift,
    title: "Checklist Completo de Produção para Páscoa",
    value: "R$ 37,00",
  },
];

const BonusSection = () => (
  <section className="section-padding bg-cream-dark" id="oferta">
    <div className="container mx-auto max-w-3xl">
      <h2 className="animate-fade-up text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-center text-primary mb-10">
        Leve o Curso Completo +{" "}
        <span className="text-golden-dark">Bônus Exclusivos</span> Hoje!
      </h2>

      <div className="space-y-4">
        {bonuses.map((b, i) => (
          <div
            key={b.title}
            className={`animate-fade-up animate-fade-up-delay-${i + 1} flex items-center gap-4 bg-card rounded-xl p-5 border border-border`}
          >
            <div className="w-12 h-12 rounded-lg bg-secondary/30 flex items-center justify-center flex-shrink-0">
              <b.icon className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-heading font-semibold text-primary">
                Bônus {i + 1}: {b.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                Valor: <span className="line-through">{b.value}</span>{" "}
                <span className="font-bold text-green-700">(GRÁTIS)</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BonusSection;
